'use client';

import { useState } from 'react';
import Image from 'next/image';
import HamburgerMenu from '../hamburger-menu/HamburgerMenu';

const HamburgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <div className="hamburger-icon" onClick={() => { handleToggle() }}>
          <Image
            src="/images/menu-icon.png"
            alt="Open menu bar"
            width={25}
            height={25}
          />
      </div>
      <HamburgerMenu isOpen={isOpen} handleToggle={handleToggle} />
    </>
  );
};

export default HamburgerIcon;
