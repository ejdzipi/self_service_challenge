import { css, type Theme } from '@emotion/react';

export const appStyles = (theme: Theme) => css`
  max-width: 800px;
  margin: 0 auto;
  padding: ${theme.spacing.xl};
  min-height: 100vh;
  background-color: ${theme.colors.background.secondary};
  transition: background-color ${theme.transitions.normal};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.md};
  }
`;

export const headerStyles = (theme: Theme) => css`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  position: relative;

  h1 {
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.sm};
    font-size: ${theme.typography.fontSize['4xl']};
    font-weight: ${theme.typography.fontWeight.bold};

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize['3xl']};
    }
  }

  p {
    color: ${theme.colors.text.secondary};
    font-size: ${theme.typography.fontSize.lg};
  }
`;

export const themeToggleStyles = (theme: Theme) => css`
  position: absolute;
  top: 0;
  right: 0;
  background: ${theme.colors.primary};
  color: ${theme.colors.text.inverse};
  border: none;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-size: ${theme.typography.fontSize.sm};
  transition: ${theme.transitions.normal};

  &:hover {
    background: ${theme.colors.primaryHover};
    transform: translateY(-1px);
  }
`;

export const statsStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.colors.background.primary};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  border: 1px solid ${theme.colors.border.light};
  margin-bottom: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${theme.spacing.sm};
  }
`;

export const statsTextStyles = (theme: Theme) => css`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
`;

export const clearButtonStyles = (theme: Theme) => css`
  background: ${theme.colors.danger};
  color: ${theme.colors.text.inverse};
  border: none;
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize.sm};
  cursor: pointer;
  transition: ${theme.transitions.normal};

  &:hover {
    background: #c82333;
    transform: translateY(-1px);
  }

  &:disabled {
    background: ${theme.colors.text.muted};
    cursor: not-allowed;
    transform: none;
  }
`;

export const mainStyles = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

export const postsListStyles = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const noPostsStyles = (theme: Theme) => css`
  text-align: center;
  padding: ${theme.spacing['2xl']} ${theme.spacing.md};
  color: ${theme.colors.text.secondary};
  font-style: italic;
  background: ${theme.colors.background.primary};
  border-radius: ${theme.borderRadius.lg};
  border: 2px dashed ${theme.colors.border.light};

  p {
    font-size: ${theme.typography.fontSize.lg};
  }
`;
