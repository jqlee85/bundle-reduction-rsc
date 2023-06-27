'use client';
import {useState} from 'react';

export default function Navigation({children}: {children: React.ReactNode}) {

  const [isNavOpen, setIsNavOpen] = useState(false);
  
  const toggleOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navClass = isNavOpen ? 'flex' : 'hidden';

  return (
    <nav className="flex justify-center items-center flex-col">
      <h3>Navigation</h3>
      <button className={`border border-white rounded my-1`} onClick={toggleOpen}>{isNavOpen ? 'Close' : 'Open'}</button>
      <ul className={`flex justify-center items-center flex-col border-bottom border-white ${navClass}`}>
        {children}
      </ul>
      
    </nav>
  );
}
