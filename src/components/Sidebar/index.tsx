import React from 'react';
import Quote from '../Quote';

async function getQuotes() {
  const response = await fetch(`https://dummyjson.com/quotes?limit=50`);
  const {quotes} = await response.json();
  return quotes;
}


const Sidebar: React.FC = async () => {
  
  const quotes:[any] = await getQuotes();
  
  return (
    <aside className="md:max-w-xs lg:max-w-1/3 p-4 overflow-y-auto">
      <h2>Misc Quotes</h2>
      {quotes.map(quote => (
        <Quote  
          quoteObj={quote}
          key={`quote_${quote.id}`}
        />
      ))}
    </aside>
  );
};

export default Sidebar;