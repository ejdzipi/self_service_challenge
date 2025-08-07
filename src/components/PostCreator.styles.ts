import { css } from '@emotion/react';
import { theme } from '../theme';

export const containerStyles = css`
  background: ${theme.colors.background.primary};
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid ${theme.colors.border.light};
  box-shadow: ${theme.shadows.sm};
  transition: ${theme.transitions.normal};

  &:hover {
    box-shadow: ${theme.shadows.md};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.md};
  }
`;

export const editorStyles = css`
  margin-bottom: ${theme.spacing.md};

  .rsw-editor {
    border: 2px solid ${theme.colors.border.light};
    border-radius: ${theme.borderRadius.md};
    background: ${theme.colors.background.primary};
    color: ${theme.colors.text.primary};
    transition: border-color ${theme.transitions.normal};
    min-height: 120px;
    font-family: inherit;
    font-size: ${theme.typography.fontSize.base};
    line-height: 1.5;

    &:focus-within {
      border-color: ${theme.colors.primary};
      box-shadow: ${theme.shadows.focus};
    }
  }

  .rsw-toolbar {
    border: 2px solid ${theme.colors.border.light};
    border-bottom: none;
    border-radius: ${theme.borderRadius.md} ${theme.borderRadius.md} 0 0;
    background: ${theme.colors.background.secondary};
    padding: ${theme.spacing.sm};

    button {
      background: transparent;
      border: 1px solid transparent;
      border-radius: ${theme.borderRadius.sm};
      color: ${theme.colors.text.secondary};
      padding: ${theme.spacing.xs};
      margin: 0 2px;
      transition: ${theme.transitions.fast};

      &:hover {
        background: ${theme.colors.background.primary};
        border-color: ${theme.colors.border.medium};
        color: ${theme.colors.text.primary};
      }

      &.active {
        background: ${theme.colors.primary};
        color: ${theme.colors.text.inverse};
        border-color: ${theme.colors.primary};
      }
    }

    select {
      background: ${theme.colors.background.primary};
      border: 1px solid ${theme.colors.border.light};
      border-radius: ${theme.borderRadius.sm};
      color: ${theme.colors.text.primary};
      padding: ${theme.spacing.xs};
      margin: 0 2px;

      &:focus {
        outline: none;
        border-color: ${theme.colors.primary};
      }
    }
  }

  .rsw-ce {
    border-radius: 0 0 ${theme.borderRadius.md} ${theme.borderRadius.md};
    padding: ${theme.spacing.md};

    &:focus {
      outline: none;
    }

    p {
      margin: 0 0 ${theme.spacing.sm} 0;

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    strong {
      font-weight: ${theme.typography.fontWeight.semibold};
    }

    em {
      font-style: italic;
    }

    ul,
    ol {
      margin: 0 0 ${theme.spacing.sm} ${theme.spacing.lg};

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    blockquote {
      border-left: 3px solid ${theme.colors.primary};
      padding-left: ${theme.spacing.md};
      margin: ${theme.spacing.sm} 0;
      color: ${theme.colors.text.secondary};
      font-style: italic;
    }
  }
`;

export const buttonStyles = css`
  background: ${theme.colors.primary};
  color: ${theme.colors.text.inverse};
  border: none;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: ${theme.transitions.normal};
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};

  &:hover:not(:disabled) {
    background: ${theme.colors.primaryHover};
    transform: translateY(-1px);
    box-shadow: ${theme.shadows.md};
  }

  &:disabled {
    background: ${theme.colors.text.muted};
    cursor: not-allowed;
    transform: none;
    opacity: 0.6;
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
`;
