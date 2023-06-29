'use client';
import React, { ReactNode, useState, useRef, useEffect } from 'react';

const Navigation: React.FC<{children:ReactNode}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      menuRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className="fixed w-full height-auto overflow-hidden bg-sky-800 border border-sky-500 ">
      {/* Hamburger button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="hamburger p-2 text-white top-0 right-0 z-10"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        )}
      </button>
      <div className={`${isOpen ? 'h-auto' : 'h-0'}`}>
        {children}
      </div>
    </div>
  );
}

Navigation.displayName = 'Navigation';

export default Navigation;
