"use client"; 

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentPath, setCurrentPath] = useState(''); // Track current pathname
  const pathname = usePathname(); // Get the current pathname

  // Function to update scroll progress based on scroll position
  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  // Update scroll progress on scroll
  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  // Detect path change and reset the progress bar
  useEffect(() => {
    // When pathname changes, reset scroll progress
    if (currentPath !== pathname) {
      setScrollProgress(0); // Reset progress to 0
      setCurrentPath(pathname); // Update the current path state
    }
  }, [pathname, currentPath]);

  return (
    <div
      style={{
        position: 'fixed',
        top: '0px', 
        left: 0,
        width: `${scrollProgress}%`,
        height: '3px', 
        backgroundColor: '#0070f3',
        zIndex: 9999,  
        transition: 'width 0.25s ease-out',  
      }}
    />
  );
}
