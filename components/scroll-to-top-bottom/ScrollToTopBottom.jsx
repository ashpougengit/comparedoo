"use client";

import { useEffect, useState } from 'react';

export default function ScrollToTopBottom() {
  const [isVisible, setIsVisible] = useState(false);

  // Show buttons when page is scrolled beyond 300px
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300 || window.scrollY + window.innerHeight < document.documentElement.scrollHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Scroll to bottom function
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <div style={{
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px', // Space between the buttons
      }}>
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.6)',
          }}
          aria-label="Scroll to top"
        >
          ↑
        </button>

        {/* Scroll to Bottom Button */}
        <button
          onClick={scrollToBottom}
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.6)',
          }}
          aria-label="Scroll to bottom"
        >
          ↓
        </button>
      </div>
    )
  );
}
