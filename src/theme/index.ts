export const theme = {
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
      dark: '#1a1a1a',
      darkSecondary: '#2a2a2a',
    },

    border: {
      light: '#e9ecef',
      medium: '#dee2e6',
      dark: '#404040',
    },
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },

  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },

  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
    md: '0 4px 12px rgba(0, 0, 0, 0.15)',
    lg: '0 8px 25px rgba(0, 0, 0, 0.2)',
    focus: '0 0 0 3px rgba(100, 108, 255, 0.1)',
  },

  typography: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
    },

    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.6,
    },
  },

  transitions: {
    fast: '0.15s ease',
    normal: '0.2s ease',
    slow: '0.3s ease',
  },

  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
} as const;

export type Theme = typeof theme;
