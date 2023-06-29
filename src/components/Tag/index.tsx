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
      className="m-1 p-2 border border-orange-500 bg-orange-800 text-black rounded-sm hover:bg-red-300 transition-colors duration-200 cursor-pointer"
      onClick={() => logData(tag)}
    >
      {tag}
    </span>
  );
};

Tag.displayName = 'Tag';

export default Tag;