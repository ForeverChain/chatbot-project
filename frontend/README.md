# Chatbot Frontend

This is the frontend application for the Chatbot project, built with React and Vite.

## Environment Variables

The application uses environment variables for configuration. Create a `.env` file in the frontend root directory with the following variables:

```
VITE_API_URL=http://localhost:3003
```

For different environments, you can use:
- `.env.production` - for production settings
- `.env.staging` - for staging settings

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at http://localhost:3000.

## Build

To build the application for production:
```bash
npm run build
```

## Preview

To preview the production build:
```bash
npm run preview
```