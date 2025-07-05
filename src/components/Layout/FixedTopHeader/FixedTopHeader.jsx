// src\components\Layout\FixedTopHeader\FixedTopHeader.jsx
import React from 'react';
import { FiUser, FiMenu } from 'react-icons/fi';
import { useNavigation } from '../../../utils/NavigationContext';
import './FixedTopHeader.css';

const FixedTopHeader = () => {
  const { 
    isMobile, 
    userDrawerOpen, 
    toggleUserDrawer, 
    closeUserDrawer,
    toggleOffCanvas 
  } = useNavigation();

  return (
    <header className="fixed-top-header">
      <div className="header-content">
        {/* Logo/Branding Area */}
        <div className="header-left">
          <div className="logo">
            <h1>Alpha Kingdom</h1>
            <span className="version">v01a</span>
          </div>
        </div>

        {/* Center Area - Global Search (Optional) */}
        <div className="header-center">
          {/* Global search will be added in future steps */}
        </div>

        {/* Right Area - User Controls */}
        <div className="header-right">
          <button 
            className="icon-button expand-user-drawer-button"
            onClick={toggleUserDrawer}
            aria-label="Open user menu"
          >
            <FiUser size={24} />
          </button>

          {/* Mobile hamburger - only visible on mobile */}
          {isMobile && (
            <button 
              className="icon-button hamburger-menu"
              onClick={toggleOffCanvas}
              aria-label="Open navigation menu"
            >
              <FiMenu size={24} />
            </button>
          )}
        </div>

        {/* User Drawer Menu */}
        {userDrawerOpen && (
          <div className="user-drawer-menu">
            <div className="user-info">
              <div className="user-avatar">
                <FiUser size={32} />
              </div>
              <div className="user-details">
                <h4>Developer</h4>
                <p>admin@alphakingdom.dev</p>
              </div>
            </div>
            <nav className="user-menu-nav">
              <a href="#profile">Profile Settings</a>
              <a href="#preferences">Preferences</a>
              <a href="#help">Help & Support</a>
              <hr />
              <a href="#logout" className="logout">Sign Out</a>
            </nav>
          </div>
        )}

        {/* Overlay for user drawer */}
        {userDrawerOpen && (
          <div 
            className="drawer-overlay"
            onClick={closeUserDrawer}
          />
        )}
      </div>
    </header>
  );
};

export default FixedTopHeader;