import React from 'react';
import Quote from '../Quote';

const Sidebar: React.FC<{quotes:any}> = ( { quotes }) => {
  
  return (
    <aside className="md:max-w-xs lg:max-w-1/3 p-4 overflow-y-auto">
      <h2>Misc Quotes</h2>
      {quotes.map((quote:any) => (
        <Quote  
          quoteObj={quote}
          key={`quote_${quote.id}`}
        />
      ))}
    </aside>
  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;