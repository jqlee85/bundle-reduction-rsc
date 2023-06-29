'use client';
import React, { ReactNode, useState } from 'react';


const SubMenu: React.FC<{children:ReactNode}> =  ({children}) => {

  const [isOpen, setIsOpen] = useState(false);

  const hoverHandler = () => {
    setIsOpen(true);
  }

  const blurHandler = () => {
    setIsOpen(false);
  }

  return <div role="none" className="relative group block px-4 py-2 border border-sky-500 bg-sky-800" onMouseEnter={hoverHandler} onMouseLeave={blurHandler}>
    <span>Sub-menu</span>
    {isOpen && children}
  </div>


}

export default SubMenu;