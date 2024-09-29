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
              <Image
                // layout="fill"
                objectFit="contain"
                src="/images/close.png"
                alt='Close menu bar'
                width='25'
                height='25'
              />
            </Link>
          </>
        ) : (
          <>
            <Link href="/menu-bar">
              <Image
                // layout="fill"
                objectFit="contain"
                src="/images/menu-icon.png"
                alt='Open menu bar'
                width='25'
                height='25'
              />
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default HamburgerIcon;
