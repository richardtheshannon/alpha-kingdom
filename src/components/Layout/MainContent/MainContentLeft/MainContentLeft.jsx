// src\components\Layout\MainContent\MainContentLeft\MainContentLeft.jsx
import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const MainContentLeft = ({ 
  initialCollapsed = false,
  title = 'Left Panel',
  showFooter = true,
  cardCount = 2
}) => {
  const [isCollapsed, setIsCollapsed] = useState(initialCollapsed);

  // Generate cards based on cardCount prop
  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < cardCount; i++) {
      cards.push(
        <div key={i} className="card-base" style={{ marginBottom: 'var(--spacing-md)' }}>
          <h4 style={{ 
            color: 'var(--text-primary)', 
            margin: '0 0 var(--spacing-sm) 0',
            fontFamily: 'var(--font-primary)'
          }}>
            {i === 0 ? 'Primary Card' : `Card ${i + 1}`}
          </h4>
          <p style={{ 
            color: 'var(--text-secondary)', 
            margin: 0,
            lineHeight: '1.5'
          }}>
            {i === 0 
              ? 'This is a primary card component in the left content area.' 
              : `Content for card ${i + 1}. This card can contain various types of information.`
            }
          </p>
        </div>
      );
    }
    return cards;
  };

  return (
    <section 
      className={`main-content-left ${isCollapsed ? 'collapsed' : ''}`} 
      style={{
        width: isCollapsed ? '60px' : 'var(--content-left-width)',
        backgroundColor: 'var(--primary-bg)',
        borderRight: '1px solid var(--border-color)',
        padding: 'var(--spacing-md)',
        transition: 'var(--transition-default)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 'var(--spacing-md)',
        minHeight: '40px'
      }}>
        {!isCollapsed && (
          <h3 style={{ 
            margin: 0, 
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-primary)',
            fontSize: '1.25rem'
          }}>
            {title}
          </h3>
        )}
        <button 
          className="icon-button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{ 
            // CHANGED: Reduced button size from 40px to 25px (15px smaller)
            width: '25px',
            height: '25px',
            minWidth: '25px',
            marginLeft: isCollapsed ? '0' : 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            color: 'var(--text-secondary)',
            transition: 'var(--transition-fast)',
            cursor: 'pointer',
            border: '1px solid transparent',
            borderRadius: 'var(--radius-sm)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--tertiary-bg)';
            e.target.style.color = 'var(--text-primary)';
            e.target.style.borderColor = 'var(--border-color)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'var(--text-secondary)';
            e.target.style.borderColor = 'transparent';
          }}
          aria-label={isCollapsed ? 'Expand left panel' : 'Collapse left panel'}
        >
          {/* CHANGED: Reduced icon size from 20px to 16px (proportional) */}
          {isCollapsed ? <FiChevronRight size={16} /> : <FiChevronLeft size={16} />}
        </button>
      </div>
      
      {!isCollapsed && (
        <div style={{ flex: 1 }}>
          {renderCards()}

          {showFooter && (
            <div style={{
              marginTop: 'auto',
              paddingTop: 'var(--spacing-lg)',
              borderTop: '1px solid var(--border-color)',
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
              textAlign: 'center'
            }}>
              Left Panel Footer
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default MainContentLeft;