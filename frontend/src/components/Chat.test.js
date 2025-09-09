import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Chat from './Chat';

// Mock axios
jest.mock('../services/axiosInstance', () => ({
  post: jest.fn()
}));

const mockAxios = require('../services/axiosInstance');

describe('Chat Component', () => {
  const mockChatbotId = '1';
  const mockUserId = 'user123';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders chat component with empty state', () => {
    render(<Chat chatbotId={mockChatbotId} userId={mockUserId} />);
    
    expect(screen.getByText('Чатботтой ярилцахыг эхлүүлэхийн тулд мессеж бичнэ үү.')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Мессежээ бичнэ үү...')).toBeInTheDocument();
    expect(screen.getByText('Илгээх')).toBeInTheDocument();
  });

  test('sends message and displays response', async () => {
    // Mock the API response
    mockAxios.post.mockResolvedValue({
      data: {
        response: 'Сайн байна уу! Би танд яаж тусалж чадах вэ?'
      }
    });

    render(<Chat chatbotId={mockChatbotId} userId={mockUserId} />);
    
    // Type a message
    const input = screen.getByPlaceholderText('Мессежээ бичнэ үү...');
    const sendButton = screen.getByText('Илгээх');
    
    fireEvent.change(input, { target: { value: 'Сайн уу' } });
    fireEvent.click(sendButton);
    
    // Check that the user message is displayed
    expect(screen.getByText('Сайн уу')).toBeInTheDocument();
    
    // Wait for and check that the bot response is displayed
    await waitFor(() => {
      expect(screen.getByText('Сайн байна уу! Би танд яаж тусалж чадах вэ?')).toBeInTheDocument();
    });
    
    // Check that the API was called correctly
    expect(mockAxios.post).toHaveBeenCalledWith('/chat/chat/1', {
      message: 'Сайн уу',
      userId: 'user123'
    });
  });

  test('displays error message when API call fails', async () => {
    // Mock API failure
    mockAxios.post.mockRejectedValue(new Error('API Error'));

    render(<Chat chatbotId={mockChatbotId} userId={mockUserId} />);
    
    // Type a message
    const input = screen.getByPlaceholderText('Мессежээ бичнэ үү...');
    const sendButton = screen.getByText('Илгээх');
    
    fireEvent.change(input, { target: { value: 'Сайн уу' } });
    fireEvent.click(sendButton);
    
    // Wait for and check that the error message is displayed
    await waitFor(() => {
      expect(screen.getByText('Уучлаарай, алдаа гарлаа. Дахин оролдоно уу.')).toBeInTheDocument();
    });
  });

  test('disables send button when input is empty or loading', () => {
    render(<Chat chatbotId={mockChatbotId} userId={mockUserId} />);
    
    const input = screen.getByPlaceholderText('Мессежээ бичнэ үү...');
    const sendButton = screen.getByText('Илгээх');
    
    // Button should be disabled when input is empty
    expect(sendButton).toBeDisabled();
    
    // Button should be enabled when input has text
    fireEvent.change(input, { target: { value: 'Сайн уу' } });
    expect(sendButton).not.toBeDisabled();
  });
});