'use client';
import React from 'react';

type CommentProps = {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
};

const Comment: React.FC<CommentProps> = ({ id, body, postId, user }) => {
  
  const handleUserClick = () => {
    console.log(user);
  }
  
  return (
    <div className="border border-sky-500 p-4 mb-4 bg-sky-800">
      <p>{body}</p>
      <div className="text-gray-500 mt-2">
        <span className="hover:cursor-pointer" onClick={handleUserClick}>Posted by: {user.username}</span>
      </div>
    </div>
  );
};

export default Comment;