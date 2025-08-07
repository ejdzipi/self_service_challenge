import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface Reply {
  id: number;
  content: string;
  timestamp: Date;
}

export interface Comment {
  id: number;
  content: string;
  timestamp: Date;
  replies: Reply[];
}

export interface Post {
  id: number;
  content: string;
  timestamp: Date;
  comments: Comment[];
}

interface PostStore {
  posts: Post[];
  addPost: (content: string) => void;
  removePost: (id: number) => void;
  addComment: (postId: number, content: string) => void;
  removeComment: (postId: number, commentId: number) => void;
  addReply: (postId: number, commentId: number, content: string) => void;
  removeReply: (postId: number, commentId: number, replyId: number) => void;
  clearAllPosts: () => void;
  getPostCount: () => number;
}

export const usePostStore = create<PostStore>()(
  devtools(
    persist(
      (set, get) => ({
        posts: [],

        addPost: (content: string) => {
          const newPost: Post = {
            id: Date.now(),
            content: content.trim(),
            timestamp: new Date(),
            comments: [],
          };

          set(
            state => ({
              posts: [newPost, ...state.posts],
            }),
            false,
            'addPost'
          );
        },

        removePost: (id: number) => {
          set(
            state => ({
              posts: state.posts.filter(post => post.id !== id),
            }),
            false,
            'removePost'
          );
        },

        addComment: (postId: number, content: string) => {
          const newComment: Comment = {
            id: Date.now(),
            content: content.trim(),
            timestamp: new Date(),
            replies: [],
          };

          set(
            state => ({
              posts: state.posts.map(post =>
                post.id === postId
                  ? { ...post, comments: [...post.comments, newComment] }
                  : post
              ),
            }),
            false,
            'addComment'
          );
        },

        removeComment: (postId: number, commentId: number) => {
          set(
            state => ({
              posts: state.posts.map(post =>
                post.id === postId
                  ? {
                      ...post,
                      comments: post.comments.filter(
                        comment => comment.id !== commentId
                      ),
                    }
                  : post
              ),
            }),
            false,
            'removeComment'
          );
        },

        addReply: (postId: number, commentId: number, content: string) => {
          const newReply: Reply = {
            id: Date.now(),
            content: content.trim(),
            timestamp: new Date(),
          };

          set(
            state => ({
              posts: state.posts.map(post =>
                post.id === postId
                  ? {
                      ...post,
                      comments: post.comments.map(comment =>
                        comment.id === commentId
                          ? {
                              ...comment,
                              replies: [...comment.replies, newReply],
                            }
                          : comment
                      ),
                    }
                  : post
              ),
            }),
            false,
            'addReply'
          );
        },

        removeReply: (postId: number, commentId: number, replyId: number) => {
          set(
            state => ({
              posts: state.posts.map(post =>
                post.id === postId
                  ? {
                      ...post,
                      comments: post.comments.map(comment =>
                        comment.id === commentId
                          ? {
                              ...comment,
                              replies: comment.replies.filter(
                                reply => reply.id !== replyId
                              ),
                            }
                          : comment
                      ),
                    }
                  : post
              ),
            }),
            false,
            'removeReply'
          );
        },

        clearAllPosts: () => {
          set({ posts: [] }, false, 'clearAllPosts');
        },

        getPostCount: () => get().posts.length,
      }),
      {
        name: 'post-storage', // localStorage key
        partialize: state => ({ posts: state.posts }),
        onRehydrateStorage: () => state => {
          if (state) {
            // Convert timestamp strings back to Date objects after hydration
            state.posts = state.posts.map(post => ({
              ...post,
              timestamp: new Date(post.timestamp),
            }));
          }
        },
      }
    ),
    {
      name: 'post-store', // DevTools name
    }
  )
);
