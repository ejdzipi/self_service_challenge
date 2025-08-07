import { baseTheme } from './base';

export const lightTheme = {
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
      primary: '#212529',
      secondary: '#6c757d',
      muted: '#adb5bd',
      inverse: '#ffffff',
    },

    background: {
      primary: '#ffffff',
      secondary: '#f8f9fa',
      tertiary: '#e9ecef',
    },

    border: {
      light: '#e9ecef',
      medium: '#dee2e6',
      dark: '#404040',
    },
  },
} as const;
