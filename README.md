# ESET - Self service specialist - challenge

A React application built with Vite.js, TypeScript, and React 19. eveloper experience.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is formatted correctly

## Project Structure

```
src/
  ├── components/     # Reusable UI components with Emotion styling
  ├── theme/         # Centralized theme configuration
  ├── App.tsx        # Main application component with CSS-in-JS
  └── main.tsx       # Application entry point
```

## Styling Architecture

This project uses **Emotion React** for CSS-in-JS styling:

- **Theme System**: Centralized design tokens in `src/theme/index.ts`
- **CSS-in-JS**: Component-scoped styles using Emotion's `css` prop
- **Dynamic Styling**: Theme-aware components with TypeScript support
- **Modern Features**: CSS nesting, animations, and responsive design
