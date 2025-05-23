# Telegram Mini App

A minimal Telegram Mini App built with TypeScript and Vite, using pnpm as the package manager.

## Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

## Development

1. Install dependencies:
```bash
pnpm install
```

2. Start development server:
```bash
pnpm dev
```

This will start the development server at http://localhost:3000

## Building for Production

To build the app for production:

```bash
pnpm build
```

This will create a `dist` directory with the production build.

## Deploying to Telegram

### Option 1: Using GitHub Pages (Recommended for testing)

1. Create a new GitHub repository
2. Push your code to the repository
3. Go to repository Settings > Pages
4. Enable GitHub Pages and select the branch you want to deploy (usually `main` or `gh-pages`)
5. Wait for the deployment to complete
6. Your app will be available at `https://<username>.github.io/<repository-name>/`

### Option 2: Using your own server

1. Build the app using `pnpm build`
2. Upload the contents of the `dist` directory to your web server
3. Make sure your server is configured to serve the files with proper CORS headers

### Setting up in Telegram

1. Open [@BotFather](https://t.me/botfather) in Telegram
2. Create a new bot or select an existing one
3. Use the `/newapp` command
4. Follow the instructions to set up your Mini App
5. When asked for the URL, provide your GitHub Pages URL or your server URL
6. Test your Mini App using the provided link or by sending the bot's username to any chat

## Notes

- The app uses Telegram's WebApp API to interact with the Telegram client
- The app automatically adapts to Telegram's theme colors
- For production use, make sure to implement proper security measures and validate the initData
- The current implementation is minimal and can be extended with additional features as needed 