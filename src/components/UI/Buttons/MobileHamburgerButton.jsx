// src\components\UI\Buttons\MobileHamburgerButton.jsx
import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useNavigation } from '../../../utils/NavigationContext';

const MobileHamburgerButton = () => {
  const { isMobile, isOffCanvasOpen, toggleOffCanvas } = useNavigation();

  // Only show on mobile/tablet
  if (!isMobile) return null;

  return (
    <button
      onClick={toggleOffCanvas}
      style={{
        position: 'fixed',
        bottom: 'calc(var(--footer-height) + var(--spacing-lg))',
        right: 'var(--spacing-lg)',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: 'var(--secondary-bg)',
        color: 'var(--text-primary)',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
        zIndex: 'var(--z-modal)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'var(--transition-default)',
        transform: isOffCanvasOpen ? 'rotate(90deg)' : 'rotate(0deg)'
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#b91414';
        e.target.style.transform = isOffCanvasOpen ? 'rotate(90deg) scale(1.1)' : 'rotate(0deg) scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'var(--secondary-bg)';
        e.target.style.transform = isOffCanvasOpen ? 'rotate(90deg) scale(1)' : 'rotate(0deg) scale(1)';
      }}
      aria-label={isOffCanvasOpen ? 'Close navigation menu' : 'Open navigation menu'}
    >
      {isOffCanvasOpen ? <FiX size={24} /> : <FiMenu size={24} />}
    </button>
  );
};

export default MobileHamburgerButton;