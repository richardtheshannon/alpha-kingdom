// src\components\Layout\MainContent\MainContent.jsx
import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { useNavigation } from '../../../utils/NavigationContext';
import MainContentLeft from './MainContentLeft/MainContentLeft';
import MainContentRight from './MainContentRight/MainContentRight';
import './MainContent.css';

const MainContent = () => {
  const { isMobile, isNavCollapsed } = useNavigation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate margin based on navigation state
  const getMarginRight = () => {
    if (isMobile) {
      return 0; // No margin on mobile (off-canvas navigation)
    }
    return isNavCollapsed ? '60px' : 'var(--nav-width)';
  };

  // Handle modal open/close
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Normal MainContent */}
      <main 
        className="main-content"
        style={{
          marginRight: getMarginRight(),
          transition: 'margin-right var(--transition-default)'
        }}
      >
        <div className="main-content-container">
          <MainContentLeft />
          <MainContentRight onMaximize={openModal} />
        </div>
      </main>

      {/* Full Browser Modal - ONLY MainContentRight */}
      {isModalOpen && (
        <div 
          className="main-content-modal"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 'var(--z-modal)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--spacing-lg)',
            backdropFilter: 'blur(4px)'
          }}
          onClick={closeModal} // Close on backdrop click
        >
          {/* Modal Content - Only MainContentRight */}
          <div 
            className="modal-content"
            style={{
              position: 'relative',
              width: '95vw',
              height: '90vh',
              backgroundColor: 'var(--primary-bg)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()} // Prevent close on content click
          >
            {/* Modal Header with Close Button */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 'var(--spacing-lg)',
              borderBottom: '1px solid var(--border-color)',
              backgroundColor: 'var(--tertiary-bg)'
            }}>
              <h2 style={{
                margin: 0,
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-primary)',
                fontSize: '1.5rem'
              }}>
                Main Content - Full View
              </h2>
              
              {/* Close Button (X) in Upper Right */}
              <button
                onClick={closeModal}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  backgroundColor: 'transparent',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--secondary-bg)';
                  e.target.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'var(--text-secondary)';
                }}
                aria-label="Close modal"
                title="Close (ESC)"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Modal Body - ONLY MainContentRight */}
            <div style={{
              flex: 1,
              padding: 'var(--spacing-lg)',
              backgroundColor: 'var(--primary-bg)',
              overflow: 'auto'
            }}>
              {/* Render ONLY MainContentRight in modal */}
              <MainContentRight 
                isInModal={true} 
                onMaximize={null} // Disable maximize in modal
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainContent;