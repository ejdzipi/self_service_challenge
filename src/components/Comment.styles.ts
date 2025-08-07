import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const commentStyles = (theme: Theme) => css`
  background: ${theme.colors.background.tertiary};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  margin: ${theme.spacing.sm} 0;
  position: relative;

  &:hover {
    background: ${theme.colors.background.secondary};
  }
`;

export const commentContentStyles = (theme: Theme) => css`
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing.xs};
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const commentTimestampStyles = (theme: Theme) => css`
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing.sm};

  &::before {
    content: '💬 ';
    margin-right: ${theme.spacing.xs};
  }
`;

export const commentActionsStyles = (theme: Theme) => css`
  display: flex;
  gap: ${theme.spacing.sm};
  align-items: center;
  margin-bottom: ${theme.spacing.sm};
`;

export const actionButtonStyles = (theme: Theme) => css`
  background: none;
  border: none;
  color: ${theme.colors.primary};
  font-size: ${theme.typography.fontSize.xs};
  cursor: pointer;
  padding: ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.sm};
  transition: ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.background.secondary};
    color: ${theme.colors.primaryHover};
  }
`;

export const deleteCommentButtonStyles = (theme: Theme) => css`
  position: absolute;
  top: ${theme.spacing.xs};
  right: ${theme.spacing.xs};
  background: ${theme.colors.danger};
  color: ${theme.colors.text.inverse};
  border: none;
  padding: ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize.xs};
  cursor: pointer;
  opacity: 0;
  transition: ${theme.transitions.normal};

  &:hover {
    background: #c82333;
  }
`;

export const commentWithHoverStyles = (theme: Theme) => css`
  ${commentStyles(theme)}

  &:hover {
    background: ${theme.colors.background.secondary};

    button {
      opacity: 1;
    }
  }
`;

export const replyInputStyles = (theme: Theme) => css`
  width: 100%;
  padding: ${theme.spacing.sm};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize.xs};
  font-family: inherit;
  resize: vertical;
  min-height: 60px;
  margin-bottom: ${theme.spacing.sm};
  background: ${theme.colors.background.primary};
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

export const replyButtonStyles = (theme: Theme) => css`
  background: ${theme.colors.primary};
  color: ${theme.colors.text.inverse};
  border: none;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize.xs};
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

export const repliesContainerStyles = (theme: Theme) => css`
  margin-left: ${theme.spacing.lg};
  border-left: 2px solid ${theme.colors.border.light};
  padding-left: ${theme.spacing.md};
  margin-top: ${theme.spacing.sm};
`;

export const replyStyles = (theme: Theme) => css`
  background: ${theme.colors.background.primary};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.sm};
  padding: ${theme.spacing.sm};
  margin: ${theme.spacing.xs} 0;
  position: relative;

  &:hover {
    background: ${theme.colors.background.secondary};

    button {
      opacity: 1;
    }
  }
`;

export const replyContentStyles = (theme: Theme) => css`
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.xs};
  line-height: ${theme.typography.lineHeight.normal};
  margin-bottom: ${theme.spacing.xs};
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const replyTimestampStyles = (theme: Theme) => css`
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};

  &::before {
    content: '↳ ';
    margin-right: ${theme.spacing.xs};
  }
`;

export const deleteReplyButtonStyles = (theme: Theme) => css`
  position: absolute;
  top: ${theme.spacing.xs};
  right: ${theme.spacing.xs};
  background: ${theme.colors.danger};
  color: ${theme.colors.text.inverse};
  border: none;
  padding: 2px ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.sm};
  font-size: 10px;
  cursor: pointer;
  opacity: 0;
  transition: ${theme.transitions.normal};

  &:hover {
    background: #c82333;
  }
`;
