import { useState } from 'react';
import { usePostStore } from '../store/postStore';
import { theme } from '../theme';
import type {
  Comment as CommentType,
  Reply as ReplyType,
} from '../store/postStore';
import {
  commentWithHoverStyles,
  deleteCommentButtonStyles,
  commentContentStyles,
  commentTimestampStyles,
  commentActionsStyles,
  actionButtonStyles,
  replyInputStyles,
  replyButtonStyles,
  repliesContainerStyles,
  replyStyles,
  replyContentStyles,
  replyTimestampStyles,
  deleteReplyButtonStyles,
} from './Comment.styles';

interface CommentProps {
  comment: CommentType;
  postId: number;
}

const Comment = ({ comment, postId }: CommentProps) => {
  const { removeComment, addReply, removeReply } = usePostStore();
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyContent, setReplyContent] = useState('');

  const formatTimestamp = (timestamp: Date) => {
    return timestamp.toLocaleString();
  };

  const handleDeleteComment = () => {
    if (
      window.confirm(
        'Are you sure you want to delete this comment and all its replies?'
      )
    ) {
      removeComment(postId, comment.id);
    }
  };

  const handleAddReply = () => {
    if (replyContent.trim() === '') return;

    addReply(postId, comment.id, replyContent);
    setReplyContent('');
    setShowReplyInput(false);
  };

  const handleDeleteReply = (replyId: number) => {
    if (window.confirm('Are you sure you want to delete this reply?')) {
      removeReply(postId, comment.id, replyId);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleAddReply();
    }
  };

  return (
    <div css={commentWithHoverStyles}>
      <button
        css={deleteCommentButtonStyles}
        onClick={handleDeleteComment}
        title="Delete comment"
      >
        🗑️
      </button>

      <div css={commentContentStyles}>{comment.content}</div>
      <div css={commentTimestampStyles}>
        {formatTimestamp(comment.timestamp)}
      </div>

      <div css={commentActionsStyles}>
        <button
          css={actionButtonStyles}
          onClick={() => setShowReplyInput(!showReplyInput)}
        >
          {showReplyInput ? 'Cancel Reply' : 'Reply'}
        </button>
        {comment.replies.length > 0 && (
          <span
            css={{
              fontSize: theme.typography.fontSize.xs,
              color: theme.colors.text.muted,
            }}
          >
            {comment.replies.length} repl
            {comment.replies.length === 1 ? 'y' : 'ies'}
          </span>
        )}
      </div>

      {showReplyInput && (
        <div>
          <textarea
            css={replyInputStyles}
            placeholder="Write a reply... (Ctrl+Enter to submit)"
            value={replyContent}
            onChange={e => setReplyContent(e.target.value)}
            onKeyDown={handleKeyPress}
            rows={3}
          />
          <button
            css={replyButtonStyles}
            onClick={handleAddReply}
            disabled={replyContent.trim() === ''}
          >
            Add Reply
          </button>
        </div>
      )}

      {comment.replies.length > 0 && (
        <div css={repliesContainerStyles}>
          {comment.replies.map((reply: ReplyType) => (
            <div key={reply.id} css={replyStyles}>
              <button
                css={deleteReplyButtonStyles}
                onClick={() => handleDeleteReply(reply.id)}
                title="Delete reply"
              >
                ×
              </button>
              <div css={replyContentStyles}>{reply.content}</div>
              <div css={replyTimestampStyles}>
                {formatTimestamp(reply.timestamp)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
