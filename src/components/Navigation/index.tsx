'use client';

import React, { useState, useRef, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      menuRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Hamburger button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="hamburger p-2 text-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {/* Hamburger menu */}
      {isOpen && (
        <nav 
          ref={menuRef}
          tabIndex={-1}
          role="menu"
          className="fixed top-0 w-full h-auto bg-gray-800 text-white py-2 overflow-auto"
          onBlur={() => setIsOpen(false)}
        >
          <div className="w-11/12 md:w-96 mx-auto">
            <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Link 1</a>
            <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Link 2</a>
            <div role="none" className="relative group block hover:bg-gray-700 px-4 py-2">
              <span>Sub-menu 1</span>
              <div role="menu" className="ml-4 mt-2 bg-gray-900 text-white rounded-lg shadow-md group-hover:block hidden">
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 1</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 2</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 3</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 4</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 5</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 6</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 7</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 8</a>
              </div>
            </div>
            <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Link 3</a>
            <div role="none" className="relative group block hover:bg-gray-700 px-4 py-2">
              <span>Sub-menu 2</span>
              <div role="menu" className="ml-4 mt-2 bg-gray-900 text-white rounded-lg shadow-md group-hover:block hidden">
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 1</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 2</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 3</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 4</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 5</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 6</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 7</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 8</a>
              </div>
            </div>
            <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Link 4</a>
            <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Link 5</a>
            <div role="none" className="relative group block hover:bg-gray-700 px-4 py-2">
              <span>Sub-menu 3</span>
              <div role="menu" className="ml-4 mt-2 bg-gray-900 text-white rounded-lg shadow-md group-hover:block hidden">
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 1</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 2</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 3</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 4</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 5</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 6</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 7</a>
                <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Sub-link 8</a>
              </div>
            </div>
            <a href="#" role="menuitem" className="block px-4 py-2 hover:bg-gray-700">Link 6</a>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Navigation;
