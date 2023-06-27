import React from 'react';
import Comment from '../Comment';

type Comment = {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
};

type CommentsListProps = {
  comments: Comment[];
};

const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
  return (
    <div>
      {comments.map(comment => (
        <Comment
          key={comment.id}
          id={comment.id}
          body={comment.body}
          postId={comment.postId}
          user={comment.user}
        />
      ))}
    </div>
  );
};

export default CommentsList;