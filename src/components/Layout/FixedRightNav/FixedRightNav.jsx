// src\components\Layout\FixedRightNav\FixedRightNav.jsx
import React, { useState } from 'react';
import { 
  FiHome, 
  FiUser, 
  FiSettings, 
  FiFolder, 
  FiMail, 
  FiBell,
  FiChevronDown,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
  FiX,
  FiBarChart,
  FiTrendingUp,
  FiEdit,
  FiFile,
  FiImage
} from 'react-icons/fi';
import { useNavigation } from '../../../utils/NavigationContext';

// Icon mapping for custom sections
const iconMap = {
  FiHome, FiUser, FiSettings, FiFolder, FiMail, FiBell,
  FiBarChart, FiTrendingUp, FiEdit, FiFile, FiImage
};

const FixedRightNav = ({ 
  forceOffCanvas = false,
  showCloseButton = true,
  initialCollapsedSections = {
    main: false,    // Main section expanded by default
    account: true,  // Account section collapsed by default
    system: true    // System section collapsed by default
  },
  customSections = null,
  initiallyCollapsed = false  // For Storybook testing
}) => {
  const { 
    isMobile, 
    isOffCanvasOpen, 
    closeOffCanvas, 
    isNavCollapsed,      // Get collapse state from context
    toggleNavCollapse    // Get toggle function from context
  } = useNavigation();
  
  const [collapsedSections, setCollapsedSections] = useState(initialCollapsedSections);

  // Use forceOffCanvas for Storybook testing, otherwise use actual mobile state
  const shouldShowOffCanvas = forceOffCanvas || isMobile;
  
  // For Storybook: use local state if initiallyCollapsed is set
  const navIsCollapsed = forceOffCanvas ? initiallyCollapsed : isNavCollapsed;
  const handleToggleCollapse = forceOffCanvas ? 
    () => {} : // No-op for Storybook 
    toggleNavCollapse;

  const toggleSection = (sectionId) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const NavSection = ({ id, title, children, icon: Icon }) => {
    const isCollapsed = collapsedSections[id];
    
    // Don't render section content if nav is horizontally collapsed
    if (navIsCollapsed) {
      return (
        <div style={{ 
          marginBottom: 'var(--spacing-sm)',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <button
            onClick={() => toggleSection(id)}
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--primary-bg)',
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
              e.target.style.backgroundColor = 'var(--primary-bg)';
              e.target.style.color = 'var(--text-secondary)';
            }}
            title={title}
          >
            <Icon size={16} />
          </button>
        </div>
      );
    }
    
    return (
      <div style={{ marginBottom: 'var(--spacing-md)' }}>
        <button
          onClick={() => toggleSection(id)}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'var(--spacing-sm)',
            backgroundColor: 'var(--primary-bg)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: '500',
            transition: 'var(--transition-fast)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--secondary-bg)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'var(--primary-bg)';
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <Icon size={16} />
            <span>{title}</span>
          </div>
          {isCollapsed ? <FiChevronRight size={14} /> : <FiChevronDown size={14} />}
        </button>
        
        {!isCollapsed && (
          <div style={{ 
            marginTop: 'var(--spacing-sm)',
            paddingLeft: 'var(--spacing-md)',
            borderLeft: '2px solid var(--border-color)'
          }}>
            {children}
          </div>
        )}
      </div>
    );
  };

  const NavLink = ({ icon: Icon, children, href = "#" }) => (
    <a
      href={href}
      onClick={shouldShowOffCanvas ? closeOffCanvas : undefined}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-sm)',
        padding: 'var(--spacing-sm)',
        color: 'var(--text-secondary)',
        textDecoration: 'none',
        borderRadius: 'var(--radius-sm)',
        fontSize: '0.875rem',
        transition: 'var(--transition-fast)',
        marginBottom: 'var(--spacing-xs)'
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = 'var(--primary-bg)';
        e.target.style.color = 'var(--text-primary)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.color = 'var(--text-secondary)';
      }}
    >
      <Icon size={16} />
      <span>{children}</span>
    </a>
  );

  // Default sections
  const defaultSections = [
    {
      id: 'main',
      title: 'Main',
      icon: FiHome,
      links: [
        { icon: FiHome, text: 'Dashboard', href: '#dashboard' },
        { icon: FiFolder, text: 'Projects', href: '#projects' },
        { icon: FiBell, text: 'Notifications', href: '#notifications' },
      ]
    },
    {
      id: 'account',
      title: 'Account',
      icon: FiUser,
      links: [
        { icon: FiUser, text: 'Profile', href: '#profile' },
        { icon: FiMail, text: 'Messages', href: '#messages' },
        { icon: FiSettings, text: 'Preferences', href: '#preferences' },
      ]
    },
    {
      id: 'system',
      title: 'System',
      icon: FiSettings,
      links: [
        { icon: FiSettings, text: 'Settings', href: '#settings' },
        { icon: FiFolder, text: 'System Logs', href: '#logs' },
        { icon: FiUser, text: 'Admin Panel', href: '#admin' },
      ]
    }
  ];

  const sections = customSections || defaultSections;

  const renderSections = () => {
    return sections.map((section) => {
      const IconComponent = typeof section.icon === 'string' ? iconMap[section.icon] : section.icon;
      
      return (
        <NavSection key={section.id} id={section.id} title={section.title} icon={IconComponent}>
          {section.links.map((link, index) => {
            const LinkIcon = typeof link.icon === 'string' ? iconMap[link.icon] : link.icon;
            return (
              <NavLink key={index} icon={LinkIcon} href={link.href}>
                {link.text}
              </NavLink>
            );
          })}
        </NavSection>
      );
    });
  };

  // Mobile/Tablet Off-Canvas Navigation
  if (shouldShowOffCanvas) {
    return (
      <>
        {/* Overlay Backdrop */}
        {(isOffCanvasOpen || forceOffCanvas) && (
          <div 
            className="overlay active"
            onClick={closeOffCanvas}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 'var(--z-overlay)',
              opacity: 1,
              visibility: 'visible',
              transition: 'opacity var(--transition-default), visibility var(--transition-default)'
            }}
          />
        )}

        {/* Off-Canvas Navigation */}
        <nav 
          className={`off-canvas ${(isOffCanvasOpen || forceOffCanvas) ? 'open' : ''}`}
          style={{
            position: 'fixed',
            top: 0,
            right: (isOffCanvasOpen || forceOffCanvas) ? 0 : '-100%',
            width: '300px',
            height: '100vh',
            backgroundColor: 'var(--tertiary-bg)',
            zIndex: 'var(--z-modal)',
            transition: 'right var(--transition-default)',
            overflowY: 'auto',
            padding: 'var(--spacing-md)',
            borderLeft: '1px solid var(--border-color)'
          }}
        >
          {/* Mobile Nav Header */}
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--spacing-lg)',
            paddingBottom: 'var(--spacing-md)',
            borderBottom: '1px solid var(--border-color)'
          }}>
            <h4 style={{ 
              color: 'var(--text-primary)', 
              margin: 0,
              fontSize: '1rem',
              fontFamily: 'var(--font-primary)'
            }}>
              Navigation
            </h4>
            {showCloseButton && (
              <button
                onClick={closeOffCanvas}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  padding: 'var(--spacing-sm)',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--primary-bg)';
                  e.target.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'var(--text-secondary)';
                }}
                aria-label="Close navigation"
              >
                <FiX size={20} />
              </button>
            )}
          </div>

          {/* Navigation Sections */}
          {renderSections()}
        </nav>
      </>
    );
  }

  // Desktop Navigation (Fixed Right) - Collapsible with FIXED PADDING
  return (
    <nav style={{
      position: 'fixed',
      top: 'var(--header-height)',
      right: 0,
      bottom: 'var(--footer-height)',
      width: navIsCollapsed ? '60px' : 'var(--nav-width)',
      backgroundColor: 'var(--tertiary-bg)',
      borderLeft: '1px solid var(--border-color)',
      zIndex: 'var(--z-nav)',
      overflowY: 'auto',
      // FIXED: Reduced horizontal padding when collapsed
      padding: navIsCollapsed ? 
        'var(--spacing-md) var(--spacing-xs)' :  // collapsed: 16px top/bottom, 4px left/right
        'var(--spacing-md)',                     // expanded: 16px all around
      transition: 'width var(--transition-default), padding var(--transition-default)'
    }}>
      {/* Navigation Header with Collapse Button */}
      <div style={{ 
        display: 'flex',
        justifyContent: navIsCollapsed ? 'center' : 'space-between',
        alignItems: 'center',
        marginBottom: 'var(--spacing-lg)',
        paddingBottom: 'var(--spacing-md)',
        borderBottom: '1px solid var(--border-color)'
      }}>
        {!navIsCollapsed && (
          <h4 style={{ 
            color: 'var(--text-primary)', 
            margin: 0,
            fontSize: '1rem',
            fontFamily: 'var(--font-primary)'
          }}>
            Navigation
          </h4>
        )}
        
        <button
          className="flex-nav-collapse-button"
          onClick={handleToggleCollapse}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            backgroundColor: 'var(--primary-bg)',
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
            e.target.style.backgroundColor = 'var(--primary-bg)';
            e.target.style.color = 'var(--text-secondary)';
          }}
          aria-label={navIsCollapsed ? 'Expand navigation' : 'Collapse navigation'}
          title={navIsCollapsed ? 'Expand navigation' : 'Collapse navigation'}
        >
          {navIsCollapsed ? <FiChevronsLeft size={16} /> : <FiChevronsRight size={16} />}
        </button>
      </div>

      {/* Navigation Sections */}
      {renderSections()}
    </nav>
  );
};

export default FixedRightNav;