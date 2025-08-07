import { useState } from 'react';
import { usePostStore } from '../store/postStore';
import Comment from './Comment';
import type { Post as PostType } from '../store/postStore';
import { theme } from '../theme';
import {
  postWithHoverStyles,
  deleteButtonStyles,
  contentStyles,
  timestampStyles,
  commentSectionStyles,
  commentsHeaderStyles,
  toggleCommentsButtonStyles,
  commentInputStyles,
  commentButtonStyles,
} from './Post.styles';

interface PostProps {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  const { removePost, addComment } = usePostStore();
  const [showComments, setShowComments] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentContent, setCommentContent] = useState('');

  const formatTimestamp = (timestamp: Date) => {
    return timestamp.toLocaleString();
  };

  const handleDelete = () => {
    if (
      window.confirm(
        'Are you sure you want to delete this post and all its comments?'
      )
    ) {
      removePost(post.id);
    }
  };

  const handleAddComment = () => {
    if (commentContent.trim() === '') return;

    addComment(post.id, commentContent);
    setCommentContent('');
    setShowCommentInput(false);
    setShowComments(true); // Auto-show comments when adding one
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleAddComment();
    }
  };

  return (
    <article css={postWithHoverStyles}>
      <button
        css={deleteButtonStyles}
        onClick={handleDelete}
        title="Delete post"
      >
        🗑️
      </button>
      <div
        css={contentStyles}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div css={timestampStyles}>{formatTimestamp(post.timestamp)}</div>

      <div css={commentSectionStyles}>
        <div css={commentsHeaderStyles}>
          <button
            css={toggleCommentsButtonStyles}
            onClick={() => setShowComments(!showComments)}
          >
            💬 {post.comments.length} comment
            {post.comments.length !== 1 ? 's' : ''}
          </button>
          <button
            css={toggleCommentsButtonStyles}
            onClick={() => setShowCommentInput(!showCommentInput)}
          >
            {showCommentInput ? 'Cancel' : 'Add Comment'}
          </button>
        </div>

        {showCommentInput && (
          <div style={{ marginBottom: theme.spacing.md }}>
            <textarea
              css={commentInputStyles}
              placeholder="Write a comment... (Ctrl+Enter to submit)"
              value={commentContent}
              onChange={e => setCommentContent(e.target.value)}
              onKeyDown={handleKeyPress}
              rows={3}
            />
            <button
              css={commentButtonStyles}
              onClick={handleAddComment}
              disabled={commentContent.trim() === ''}
            >
              Add Comment
            </button>
          </div>
        )}

        {showComments && post.comments.length > 0 && (
          <div>
            {post.comments.map(comment => (
              <Comment key={comment.id} comment={comment} postId={post.id} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
export default Post;
