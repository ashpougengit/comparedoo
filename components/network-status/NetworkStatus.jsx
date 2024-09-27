"use client"; // Ensure this runs client-side

import { useState, useEffect } from 'react';

export default function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(true);

  // Function to update the status
  const updateNetworkStatus = () => {
    setIsOnline(navigator.onLine);
  };

  // UseEffect to set up event listeners for online/offline changes
  useEffect(() => {
    updateNetworkStatus(); // Check initial status

    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);

    return () => {
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);
    };
  }, []);

  // Render the UI based on online status
  return (
    !isOnline && (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#ff4d4d',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
        zIndex: 1000,
      }}>
        <p>No internet connection.</p>
      </div>
    )
  );
}
