import { useState } from 'react';
import { css } from '@emotion/react';
import PostCreator from './components/PostCreator';
import Post from './components/Post';
import { theme } from './theme';
import { usePostStore } from './store/postStore';

const appStyles = (isDark: boolean) => css`
  max-width: 800px;
  margin: 0 auto;
  padding: ${theme.spacing.xl};
  min-height: 100vh;
  background-color: ${isDark
    ? theme.colors.background.dark
    : theme.colors.background.secondary};
  transition: background-color ${theme.transitions.normal};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.md};
  }
`;

const headerStyles = (isDark: boolean) => css`
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
    color: ${isDark ? theme.colors.text.muted : theme.colors.text.secondary};
    font-size: ${theme.typography.fontSize.lg};
  }
`;

const themeToggleStyles = css`
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

const statsStyles = css`
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

const statsTextStyles = css`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const clearButtonStyles = css`
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

const mainStyles = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

const postsListStyles = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const noPostsStyles = css`
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

function App() {
  const { posts, addPost, clearAllPosts } = usePostStore();
  const [newPostContent, setNewPostContent] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleCreatePost = () => {
    if (newPostContent.trim() === '') return;

    addPost(newPostContent);
    setNewPostContent('');
  };

  const handleClearAllPosts = () => {
    if (posts.length === 0) return;

    if (
      window.confirm(
        `Are you sure you want to delete all ${posts.length} posts? This action cannot be undone.`
      )
    ) {
      clearAllPosts();
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div css={appStyles(isDarkMode)}>
      <header css={headerStyles(isDarkMode)}>
        <button css={themeToggleStyles} onClick={toggleDarkMode}>
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
        <h1>ESET Self Service</h1>
        <p>Share your thoughts and updates</p>
      </header>

      <main css={mainStyles}>
        {/* Post Creation Section */}
        <PostCreator
          value={newPostContent}
          onChange={setNewPostContent}
          onSubmit={handleCreatePost}
        />

        {/* Statistics Section */}
        {posts.length > 0 && (
          <div css={statsStyles}>
            <span css={statsTextStyles}>
              📝 {posts.length} post{posts.length !== 1 ? 's' : ''} total
            </span>
            <button
              css={clearButtonStyles}
              onClick={handleClearAllPosts}
              disabled={posts.length === 0}
            >
              🗑️ Clear All
            </button>
          </div>
        )}

        {/* Posts Display Section */}
        <section>
          {posts.length === 0 ? (
            <div css={noPostsStyles}>
              <p>No posts yet. Create your first post above!</p>
            </div>
          ) : (
            <div css={postsListStyles}>
              {posts.map(post => (
                <Post key={post.id} post={post} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
