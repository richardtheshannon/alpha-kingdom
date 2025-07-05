// src\components\Layout\FixedBottomFooter\FixedBottomFooter.jsx
import React, { useState } from 'react';
import { 
  FiHome, 
  FiSearch, 
  FiBell, 
  FiUser, 
  FiMenu,
  FiSettings,
  FiMail,
  FiActivity
} from 'react-icons/fi';

const FixedBottomFooter = () => {
  const [activeIcon, setActiveIcon] = useState('home');

  const IconButton = ({ id, icon: Icon, label, onClick }) => (
    <button
      onClick={() => {
        setActiveIcon(id);
        if (onClick) onClick();
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
        padding: 'var(--spacing-sm)',
        backgroundColor: activeIcon === id ? 'var(--secondary-bg)' : 'transparent',
        color: activeIcon === id ? 'var(--text-primary)' : 'var(--text-secondary)',
        border: 'none',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        transition: 'var(--transition-fast)',
        minWidth: '60px',
        fontSize: '0.75rem'
      }}
      onMouseEnter={(e) => {
        if (activeIcon !== id) {
          e.target.style.backgroundColor = 'var(--tertiary-bg)';
          e.target.style.color = 'var(--text-primary)';
        }
      }}
      onMouseLeave={(e) => {
        if (activeIcon !== id) {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = 'var(--text-secondary)';
        }
      }}
      aria-label={label}
    >
      <Icon size={20} />
      <span style={{ 
        fontSize: '0.65rem',
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        {label}
      </span>
    </button>
  );

  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: 'var(--footer-height)',
      backgroundColor: 'var(--primary-bg)',
      borderTop: '1px solid var(--border-color)',
      zIndex: 'var(--z-footer)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--spacing-lg)'
    }}>
      {/* Left Side - Main Navigation Icons */}
      <div style={{ 
        display: 'flex', 
        gap: 'var(--spacing-sm)',
        alignItems: 'center'
      }}>
        <IconButton 
          id="home" 
          icon={FiHome} 
          label="Home"
          onClick={() => console.log('Navigate to home')}
        />
        <IconButton 
          id="search" 
          icon={FiSearch} 
          label="Search"
          onClick={() => console.log('Open search')}
        />
        <IconButton 
          id="activity" 
          icon={FiActivity} 
          label="Activity"
          onClick={() => console.log('View activity')}
        />
        <IconButton 
          id="notifications" 
          icon={FiBell} 
          label="Alerts"
          onClick={() => console.log('View notifications')}
        />
      </div>

      {/* Center - Status Information */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-md)',
        color: 'var(--text-secondary)',
        fontSize: '0.75rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#00ff00', // Green status dot
            animation: 'pulse 2s infinite'
          }} />
          <span>System Online</span>
        </div>
        
        <div style={{ 
          height: '20px',
          width: '1px',
          backgroundColor: 'var(--border-color)'
        }} />
        
        <span>
          {new Date().toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
          })}
        </span>
      </div>

      {/* Right Side - User & System Icons */}
      <div style={{ 
        display: 'flex', 
        gap: 'var(--spacing-sm)',
        alignItems: 'center'
      }}>
        <IconButton 
          id="messages" 
          icon={FiMail} 
          label="Messages"
          onClick={() => console.log('Open messages')}
        />
        <IconButton 
          id="settings" 
          icon={FiSettings} 
          label="Settings"
          onClick={() => console.log('Open settings')}
        />
        <IconButton 
          id="profile" 
          icon={FiUser} 
          label="Profile"
          onClick={() => console.log('Open profile')}
        />

        {/* Copyright */}
        <div style={{ 
          marginLeft: 'var(--spacing-lg)',
          fontSize: '0.65rem',
          color: 'var(--text-secondary)',
          textAlign: 'right',
          lineHeight: '1.2'
        }}>
          <div>Alpha Kingdom v00a</div>
          <div>© 2025</div>
        </div>
      </div>

      {/* CSS Animation for the status pulse */}
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </footer>
  );
};

export default FixedBottomFooter;