import { css, keyframes } from '@emotion/react';
import { theme } from '../theme';

const slideInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const postStyles = css`
  background: ${theme.colors.background.primary};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.sm};
  transition: ${theme.transitions.normal};
  position: relative;
  animation: ${slideInDown} ${theme.transitions.slow} ease-out;

  &:hover {
    box-shadow: ${theme.shadows.md};
    transform: translateY(-2px);
    border-color: ${theme.colors.border.medium};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.md};
  }
`;

export const contentStyles = css`
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.base};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing.sm};
  word-wrap: break-word;

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

  li {
    margin-bottom: ${theme.spacing.xs};
  }

  blockquote {
    border-left: 3px solid ${theme.colors.primary};
    padding-left: ${theme.spacing.md};
    margin: ${theme.spacing.sm} 0;
    color: ${theme.colors.text.secondary};
    font-style: italic;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${theme.colors.text.primary};
    font-weight: ${theme.typography.fontWeight.semibold};
    margin: ${theme.spacing.sm} 0;

    &:first-of-type {
      margin-top: 0;
    }
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: underline;

    &:hover {
      color: ${theme.colors.primaryHover};
    }
  }
`;

export const timestampStyles = css`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  opacity: 0.8;

  &::before {
    content: '📅 ';
    margin-right: ${theme.spacing.xs};
  }
`;

export const deleteButtonStyles = css`
  position: absolute;
  top: ${theme.spacing.md};
  right: ${theme.spacing.md};
  background: ${theme.colors.danger};
  color: ${theme.colors.text.inverse};
  border: none;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize.xs};
  cursor: pointer;
  opacity: 0;
  transition: ${theme.transitions.normal};

  &:hover {
    background: #c82333;
    transform: scale(1.05);
  }
`;

export const postWithHoverStyles = css`
  ${postStyles}

  &:hover {
    box-shadow: ${theme.shadows.md};
    transform: translateY(-2px);
    border-color: ${theme.colors.border.medium};

    button {
      opacity: 1;
    }
  }
`;

export const commentInputStyles = css`
  width: 100%;
  padding: ${theme.spacing.sm};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize.sm};
  font-family: inherit;
  resize: vertical;
  min-height: 60px;
  margin-bottom: ${theme.spacing.sm};
  background: ${theme.colors.background.secondary};
  color: ${theme.colors.text.primary};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.1);
  }

  &::placeholder {
    color: ${theme.colors.text.muted};
  }
`;

export const commentButtonStyles = css`
  background: ${theme.colors.primary};
  color: ${theme.colors.text.inverse};
  border: none;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize.sm};
  cursor: pointer;
  transition: ${theme.transitions.normal};

  &:hover:not(:disabled) {
    background: ${theme.colors.primaryHover};
  }

  &:disabled {
    background: ${theme.colors.text.muted};
    cursor: not-allowed;
  }
`;

export const commentSectionStyles = css`
  margin-top: ${theme.spacing.md};
  border-top: 1px solid ${theme.colors.border.light};
  padding-top: ${theme.spacing.md};
`;

export const commentsHeaderStyles = css`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

export const toggleCommentsButtonStyles = css`
  background: none;
  border: none;
  color: ${theme.colors.primary};
  font-size: ${theme.typography.fontSize.sm};
  cursor: pointer;
  padding: ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.sm};
  transition: ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.background.secondary};
    color: ${theme.colors.primaryHover};
  }
`;
