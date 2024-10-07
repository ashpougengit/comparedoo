'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

const HamburgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/menu-bar') {
      setIsOpen(false);
    }
  }, [pathname]);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleNavigation = () => {
    if (isOpen) {
      router.back();
    } else {
      router.push('/menu-bar');
    }
  };

  return (
    <div className="hamburger-icon" onClick={() => { handleToggle(); handleNavigation(); }}>
      {isOpen ? (
        <Image

          src="/images/close.png"
          alt="Close menu bar"
          width={25}
          height={25}
        />
      ) : (
        <Image

          src="/images/menu-icon.png"
          alt="Open menu bar"
          width={25}
          height={25}
        />
      )}
    </div>
  );
};

export default HamburgerIcon;
