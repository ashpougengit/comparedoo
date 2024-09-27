'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
            <Link href="/">
              <Image layout="fill" objectFit="contain" src="/images/close" />
            </Link>
          </>
        ) : (
          <>
            <Link href="/menu-bar">
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/menu-icon"
              />
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default HamburgerIcon;
