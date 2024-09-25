'use client';

import { useState } from 'react';
import Link from 'next/link';

const HamburgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <div className="hamburger-icon" onClick={handleToggle}>
        {isOpen ? (
          <>
            <Link href='/'>
              <img src='/images/close' />
            </Link>
          </>
        ) : (
          <>
            <Link href='/menu-bar'>
              <img src='/images/menu-icon' />
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default HamburgerIcon;
