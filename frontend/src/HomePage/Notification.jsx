import React, { useEffect } from 'react';
import './notification.css';

const Notification = ({ message, show, type = 'success', onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div className={`notification-container ${show ? 'show' : ''} ${type}`}>
       {type === 'success' && (
        <svg className={`notification-icon success`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 16.172l-4.95-4.95 1.414-1.414L9 13.343l9.536-9.536 1.414 1.414z" />
        </svg>
      )}
      {type === 'error' && (
        <svg className={`notification-icon error`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
        </svg>
      )}
      <div className = 'messg'>
      {message}
      </div>
    </div>
  );
};

export default Notification;
