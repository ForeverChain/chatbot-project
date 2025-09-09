# Free Text Questions Implementation

## Overview
This document describes the implementation of free text questions in the chatbot flow builder. Free text questions allow users to provide any text input rather than being limited to predefined options.

## Implementation Details

### Backend Changes

#### Modified File: `backend/services/flowService.js`

The flow service was updated to detect and handle questions without predefined options:

1. **Detection Logic**: When processing a question node, the system now checks if the question has any options:
   ```javascript
   if (!lastBotNode.data.options || lastBotNode.data.options.length === 0) {
     // This is a free text question
   }
   ```

2. **Processing Logic**: For free text questions:
   - Any user input is accepted
   - The flow proceeds to the next node via the first available edge
   - No option matching is performed

3. **Response Generation**: The system continues the conversation flow normally after receiving free text input.

### Frontend Changes

#### Modified File: `frontend/src/pages/FlowBuilder.jsx`

The QuestionNodeEditor component was updated to:

1. Allow removing all options
2. Display a helpful message when no options are present:
   ```
   No options = Free text input question
   ```

3. Maintain the ability to add options back if needed

### User Experience

#### Creating Free Text Questions
1. In the flow builder, add a new question node
2. Remove all predefined options using the "×" buttons
3. Save the question node
4. Connect it to subsequent nodes in the flow

#### Using Free Text Questions
1. When the chatbot reaches a free text question, it prompts the user with the question text
2. The user can type any response
3. The chatbot accepts the response and continues to the next node in the flow
4. No validation or option matching is performed

## Technical Implementation

### Data Structure
Free text questions are stored the same way as regular questions, but with an empty options array:
```json
{
  "id": "1",
  "type": "question",
  "data": {
    "label": "Please tell me your name:",
    "options": []  // Empty array indicates free text question
  }
}
```

### Flow Processing
When the flow service encounters a question with no options:
1. It identifies the question as a free text question
2. It accepts any user input without validation
3. It follows the first available edge to continue the flow
4. It responds with the next node in the conversation

## Benefits

1. **Flexibility**: Users can provide detailed, open-ended responses
2. **Simplicity**: Easy to create and configure in the flow builder
3. **Compatibility**: Works with existing flow structures and node types
4. **User Experience**: Provides a more natural conversation flow for open-ended questions

## Testing

A comprehensive test was created and executed to verify the functionality:
- Created a mock flow with a free text question
- Simulated user input with arbitrary text
- Verified that the flow correctly proceeded to the next node
- Confirmed that no option matching was attempted

Test result: ✅ PASSED

## Usage Examples

### Example 1: Name Collection
```
Bot: Please tell me your name:
User: John Doe
Bot: Nice to meet you, John! How can I help you today?
```

### Example 2: Feedback Collection
```
Bot: How was your experience with our service?
User: It was great, but the wait time was a bit long.
Bot: Thank you for your feedback! We'll work on reducing wait times.
```

## Limitations

1. **Single Path**: Free text questions follow a single path regardless of user input
2. **No Validation**: No input validation is performed on user responses
3. **No Variable Storage**: User responses are not automatically stored for later use (would require additional implementation)

## Future Enhancements

1. **Variable Storage**: Automatically store free text responses in conversation variables
2. **Conditional Logic**: Add support for routing based on keywords in free text responses
3. **Input Validation**: Add optional validation patterns for free text inputs
4. **Response Analysis**: Integrate with NLP services to analyze free text responses