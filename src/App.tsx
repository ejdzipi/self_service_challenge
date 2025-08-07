import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import PostCreator from './components/PostCreator';
import Post from './components/Post';
import { usePostStore } from './store/postStore';
import { lightTheme, darkTheme } from './theme';
import {
  appStyles,
  headerStyles,
  themeToggleStyles,
  statsStyles,
  statsTextStyles,
  clearButtonStyles,
  mainStyles,
  postsListStyles,
  noPostsStyles,
} from './App.styles';

function AppContent() {
  const { posts, addPost, clearAllPosts } = usePostStore();
  const [newPostContent, setNewPostContent] = useState('');

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

  return (
    <div css={appStyles}>
      <header css={headerStyles}>
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

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AppWrapper isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </ThemeProvider>
  );
}

function AppWrapper({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) {
  return (
    <div css={appStyles}>
      <button
        css={themeToggleStyles}
        onClick={toggleDarkMode}
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          zIndex: 1000,
        }}
      >
        {isDarkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
      <AppContent />
    </div>
  );
}

export default App;
