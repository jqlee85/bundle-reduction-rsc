'use client';
import React from 'react';

interface TagProps {
  tag: string;
}

const logData = (tag: string) => {
  console.log(tag);
}

const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <span
      className="m-1 p-2 bg-gray-500 text-black rounded-sm hover:bg-red-300 transition-colors duration-200 cursor-pointer"
      onClick={() => logData(tag)}
    >
      {tag}
    </span>
  );
};

export default Tag;