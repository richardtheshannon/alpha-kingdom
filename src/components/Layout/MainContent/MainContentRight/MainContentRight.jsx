// src\components\Layout\MainContent\MainContentRight\MainContentRight.jsx
import React from 'react';
import { FiMaximize2 } from 'react-icons/fi';

const MainContentRight = ({ onMaximize, isInModal = false }) => {
  // Removed: isCollapsed state and setIsCollapsed - no longer needed

  // Handle maximize button click
  const handleMaximize = () => {
    if (onMaximize) {
      onMaximize(); // Trigger parent modal
    }
  };

  return (
    <section 
      className="main-content-right" // Removed: collapse-related classes
      style={{
        flex: 1,
        backgroundColor: 'var(--primary-bg)',
        padding: isInModal ? 0 : 'var(--spacing-md)', // No padding in modal
        display: 'flex',
        flexDirection: 'column',
        transition: 'var(--transition-default)'
      }}
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 'var(--spacing-md)',
        minHeight: '40px'
      }}>
        <h3 style={{ 
          margin: 0, 
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-primary)',
          fontSize: isInModal ? '1.75rem' : '1.25rem' // Larger title in modal
        }}>
          {isInModal ? 'Full Screen Content' : 'Main Content'}
        </h3>
        
        {/* Only show maximize button if not in modal */}
        {!isInModal && (
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
            {/* ONLY maximize button - chevron button removed */}
            <button 
              className="icon-button"
              onClick={handleMaximize}
              aria-label="Maximize view"
              title="Open in full screen"
            >
              <FiMaximize2 size={20} />
            </button>
            
            {/* REMOVED: Chevron collapse button completely removed */}
          </div>
        )}
      </div>
      
      {/* REMOVED: {!isCollapsed && wrapper - content is always visible now */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div className="card-base card-primary" style={{ marginBottom: 'var(--spacing-md)' }}>
          <h4 style={{ 
            color: 'var(--text-primary)', 
            margin: '0 0 var(--spacing-sm) 0',
            fontFamily: 'var(--font-primary)'
          }}>
            {isInModal ? 'Enhanced Content Workspace' : 'Primary Content Area'}
          </h4>
          <p style={{ 
            color: 'var(--text-secondary)', 
            margin: '0 0 var(--spacing-md) 0',
            lineHeight: '1.5'
          }}>
            {isInModal 
              ? 'This is the full-screen view of your main content area. You now have the entire browser window to work with your content, allowing for a more immersive and focused experience without any layout constraints.'
              : 'This is the main content area where your primary application content will be displayed. It\'s designed to be flexible and accommodate various types of content.'
            }
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isInModal 
              ? 'repeat(auto-fit, minmax(300px, 1fr))' // Wider columns in modal
              : 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--spacing-md)',
            marginTop: 'var(--spacing-md)'
          }}>
            <div style={{
              padding: 'var(--spacing-md)',
              backgroundColor: 'var(--primary-bg)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)'
            }}>
              <h5 style={{ color: 'var(--secondary-bg)', margin: '0 0 var(--spacing-sm) 0' }}>
                Responsive Design
              </h5>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.875rem' }}>
                Flexible layouts that adapt to any screen size and content requirements
              </p>
            </div>
            
            <div style={{
              padding: 'var(--spacing-md)',
              backgroundColor: 'var(--primary-bg)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)'
            }}>
              <h5 style={{ color: 'var(--secondary-bg)', margin: '0 0 var(--spacing-sm) 0' }}>
                Always Visible
              </h5>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.875rem' }}>
                Content is always visible with no collapse functionality for consistent access
              </p>
            </div>

            {/* Show additional content in modal */}
            {isInModal && (
              <>
                <div style={{
                  padding: 'var(--spacing-md)',
                  backgroundColor: 'var(--primary-bg)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)'
                }}>
                  <h5 style={{ color: 'var(--secondary-bg)', margin: '0 0 var(--spacing-sm) 0' }}>
                    Full Screen Experience
                  </h5>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.875rem' }}>
                    Immersive modal view that utilizes the entire browser window
                  </p>
                </div>

                <div style={{
                  padding: 'var(--spacing-md)',
                  backgroundColor: 'var(--primary-bg)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)'
                }}>
                  <h5 style={{ color: 'var(--secondary-bg)', margin: '0 0 var(--spacing-sm) 0' }}>
                    Enhanced Workspace
                  </h5>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.875rem' }}>
                    More space for detailed content, analysis, and productivity features
                  </p>
                </div>

                <div style={{
                  padding: 'var(--spacing-md)',
                  backgroundColor: 'var(--primary-bg)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)'
                }}>
                  <h5 style={{ color: 'var(--secondary-bg)', margin: '0 0 var(--spacing-sm) 0' }}>
                    Focus Mode
                  </h5>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.875rem' }}>
                    Distraction-free environment for concentrated work sessions
                  </p>
                </div>

                <div style={{
                  padding: 'var(--spacing-md)',
                  backgroundColor: 'var(--primary-bg)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)'
                }}>
                  <h5 style={{ color: 'var(--secondary-bg)', margin: '0 0 var(--spacing-sm) 0' }}>
                    Advanced Features
                  </h5>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.875rem' }}>
                    Additional functionality available in the expanded modal view
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="card-base" style={{ marginBottom: 'var(--spacing-md)' }}>
          <h4 style={{ 
            color: 'var(--text-primary)', 
            margin: '0 0 var(--spacing-sm) 0',
            fontFamily: 'var(--font-primary)'
          }}>
            {isInModal ? 'Extended Content Section' : 'Secondary Content'}
          </h4>
          <p style={{ 
            color: 'var(--text-secondary)', 
            margin: 0,
            lineHeight: '1.5'
          }}>
            {isInModal
              ? 'In full-screen mode, you have access to additional content sections and enhanced functionality. This expanded view is perfect for detailed work, comprehensive analysis, or when you need to focus entirely on your main content without any sidebar distractions.'
              : 'Additional content sections can be added here. The layout is flexible and will adapt to your content needs. Content is always visible for consistent user experience.'
            }
          </p>
        </div>

        <div style={{
          marginTop: 'auto',
          paddingTop: 'var(--spacing-lg)',
          borderTop: '1px solid var(--border-color)',
          fontSize: '0.75rem',
          color: 'var(--text-secondary)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>{isInModal ? 'Full Screen Mode Active' : 'Content Area Footer'}</span>
          <span>{isInModal ? 'Press ESC to close 🔲' : 'Ready for Step 2 🚀'}</span>
        </div>
      </div>
      {/* REMOVED: Closing brace for the isCollapsed conditional */}
    </section>
  );
};

export default MainContentRight;