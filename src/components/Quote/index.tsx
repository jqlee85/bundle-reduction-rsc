import React from 'react';

interface QuoteProps {
  quoteObj: {
    id: number;
    quote: string;
    author: string;
  };
}

const Quote: React.FC<QuoteProps> = ({ quoteObj }) => {
  return (
    <div className="p-4 rounded-lg shadow-md">
      <p className="text-lg italic text-gray-300">{`"${quoteObj.quote}"`}</p>
      <p className="text-sm text-gray-300 mt-2">- {quoteObj.author}</p>
    </div>
  );
};

Quote.displayName = 'Quote';

export default Quote;