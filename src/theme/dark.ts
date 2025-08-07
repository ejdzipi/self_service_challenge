import { baseTheme } from './base';

export const darkTheme = {
  ...baseTheme,
  colors: {
    primary: '#646cff',
    primaryHover: '#4f46e5',
    secondary: '#868e96',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',

    text: {
      primary: '#ffffff',
      secondary: '#e9ecef',
      muted: '#adb5bd',
      inverse: '#212529',
    },

    background: {
      primary: '#1a1a1a',
      secondary: '#2a2a2a',
      tertiary: '#404040',
    },

    border: {
      light: '#404040',
      medium: '#505050',
      dark: '#606060',
    },
  },

  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.3)',
    md: '0 4px 12px rgba(0, 0, 0, 0.4)',
    lg: '0 8px 25px rgba(0, 0, 0, 0.5)',
    focus: '0 0 0 3px rgba(100, 108, 255, 0.3)',
  },
} as const;
