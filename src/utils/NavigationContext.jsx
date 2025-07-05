// src\utils\NavigationContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const [userDrawerOpen, setUserDrawerOpen] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(false); // NEW: Navigation collapse state

  // Check if we're in mobile/tablet view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Portrait tablet breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close off-canvas when switching back to desktop
  useEffect(() => {
    if (!isMobile && isOffCanvasOpen) {
      setIsOffCanvasOpen(false);
    }
  }, [isMobile, isOffCanvasOpen]);

  // Auto-expand navigation when switching to mobile (off-canvas mode)
  useEffect(() => {
    if (isMobile && isNavCollapsed) {
      setIsNavCollapsed(false);
    }
  }, [isMobile, isNavCollapsed]);

  // Prevent body scroll when off-canvas is open
  useEffect(() => {
    if (isOffCanvasOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOffCanvasOpen]);

  const toggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
  };

  const closeOffCanvas = () => {
    setIsOffCanvasOpen(false);
  };

  const toggleUserDrawer = () => {
    setUserDrawerOpen(!userDrawerOpen);
  };

  const closeUserDrawer = () => {
    setUserDrawerOpen(false);
  };

  // NEW: Navigation collapse functions
  const toggleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const expandNav = () => {
    setIsNavCollapsed(false);
  };

  const collapseNav = () => {
    setIsNavCollapsed(true);
  };

  const value = {
    isMobile,
    isOffCanvasOpen,
    userDrawerOpen,
    isNavCollapsed,        // NEW: Navigation collapsed state
    toggleOffCanvas,
    closeOffCanvas,
    toggleUserDrawer,
    closeUserDrawer,
    toggleNavCollapse,     // NEW: Toggle navigation collapse
    expandNav,             // NEW: Expand navigation
    collapseNav            // NEW: Collapse navigation
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};