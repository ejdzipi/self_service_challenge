import RichTextEditor from 'react-simple-wysiwyg';
import {
  containerStyles,
  editorStyles,
  buttonStyles,
} from './PostCreator.styles';

interface PostCreatorProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
}

const PostCreator = ({
  value,
  onChange,
  onSubmit,
  disabled,
}: PostCreatorProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      onSubmit();
    }
  };

  // Function to get plain text content from HTML for validation
  const getPlainTextContent = (html: string) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  const isContentEmpty = getPlainTextContent(value).trim() === '';

  const handleEditorChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <section css={containerStyles}>
      <div css={editorStyles}>
        <RichTextEditor
          value={value}
          onChange={handleEditorChange}
          placeholder="What's on your mind? Share your thoughts..."
          onKeyDown={handleKeyPress}
        />
      </div>
      <button
        css={buttonStyles}
        onClick={onSubmit}
        disabled={disabled || isContentEmpty}
      >
        Create Post
      </button>
    </section>
  );
};

export default PostCreator;
