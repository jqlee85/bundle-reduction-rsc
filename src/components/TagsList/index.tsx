import React from 'react';
import Tag from '../Tag';

interface TagProps {
  tags: string[];
}

const TagsList: React.FC<TagProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap mb-6">
      {tags.map((tag, index) => (
         <Tag key={index} tag={tag} />
      ))}
    </div>
  );
};

export default TagsList;
