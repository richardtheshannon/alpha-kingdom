# Alpha Kingdom v00a - Complete Development Guide

## Project Overview

**Project Name:** Alpha Kingdom v00a  
**Type:** React Dashboard Application with Sophisticated Layout System  
**Base URL:** https://priori.dev/alpha-kingdom/  
**Last Activity:** July 4, 2025 at 17:57  
**Development Platform:** Windows laptop, VS Code, CMD  
**Current Status:** Phase 2 Development (Core Components Implementation)

## Quick Start

### Development Environment Setup
```bash
# Prerequisites
Node.js v16+ (for React 18 compatibility)
npm (latest version)
VS Code with recommended extensions

# Local Development Commands
npm install          # Install dependencies
npm start           # Start development server
npm run build       # Build for production
npm test            # Run tests
```

### Recommended VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Auto Rename Tag
- Prettier - Code formatter
- CSS Modules

## Technical Architecture

### Core Technology Stack
| Component | Technology | Purpose |
|-----------|------------|---------|
| **Framework** | React 18+ | Core application framework |
| **Build Tool** | Create React App | Development and build system |
| **Styling** | CSS Modules + Styled Components | Component styling |
| **Icons** | React Icons | Flat icon library (24px base) |
| **State Management** | Zustand + React Context API | Global and local state |
| **Responsive Design** | Custom CSS Grid/Flexbox | Layout system |
| **Animation** | Framer Motion | Smooth transitions and interactions |
| **Package Manager** | npm | Dependency management |

### Project Structure
```
alpha-kingdom/
├── build/                   # 📦 Production Build (17:57 - Most Recent)
│   └── [optimized static files]
├── node_modules/           # 📚 Dependencies (707K lock file)
├── public/                 # 🌐 Static Assets (12:40)
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/                    # 💻 Source Code (12:56)
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── FixedRightNav/
│   │   │   │   ├── FixedRightNav.jsx
│   │   │   │   ├── NavAccordion.jsx
│   │   │   │   └── OffCanvasNav.jsx
│   │   │   ├── FixedTopHeader/
│   │   │   │   ├── FixedTopHeader.jsx
│   │   │   │   ├── UserDrawerMenu.jsx
│   │   │   │   └── ExpandUserButton.jsx
│   │   │   ├── MainContent/
│   │   │   │   ├── MainContent.jsx
│   │   │   │   ├── MainContentLeft/
│   │   │   │   │   ├── MainContentLeft.jsx
│   │   │   │   │   ├── LeftHeader.jsx
│   │   │   │   │   └── LeftFooter.jsx
│   │   │   │   └── MainContentRight/
│   │   │   │       ├── MainContentRight.jsx
│   │   │   │       ├── RightHeader.jsx
│   │   │   │       └── RightFooter.jsx
│   │   │   └── FixedBottomFooter/
│   │   │       └── FixedBottomFooter.jsx
│   │   ├── UI/
│   │   │   ├── Cards/
│   │   │   │   ├── PrimaryCard.jsx
│   │   │   │   └── SecondaryCard.jsx
│   │   │   ├── Buttons/
│   │   │   │   ├── CollapseButton.jsx
│   │   │   │   └── HamburgerButton.jsx
│   │   │   └── Icons/
│   │   │       └── IconWrapper.jsx
│   │   └── App.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── mixins.css
│   ├── utils/
│   │   ├── responsive.js
│   │   └── constants.js
│   └── index.js
├── package.json            # ⚙️ 1.3K - Lightweight config
└── package-lock.json       # 🔒 707K - Dependency tree
```

## Design System

### Color Palette
```css
:root {
  /* Backgrounds */
  --primary-bg: #0e1113;      /* Dark charcoal - Main background */
  --secondary-bg: #d11616;    /* Red accent - Interactive elements */
  --tertiary-bg: #181c1f;     /* Lighter dark - Elevated surfaces */
  
  /* Text Colors */
  --text-primary: #ffffff;    /* Primary text (21:1 contrast) */
  --text-secondary: #a0a0a0;  /* Secondary text (4.5:1 contrast) */
  
  /* UI Elements */
  --border-color: #2a2e33;    /* Borders and dividers */
}
```

### Typography System
```css
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&family=Nanum+Gothic:wght@400;700&family=Source+Code+Pro:wght@400;500&display=swap');

:root {
  --font-primary: 'Ubuntu', sans-serif;         /* Headings, titles */
  --font-secondary: 'Nanum Gothic', sans-serif; /* Body text */
  --font-tertiary: 'Source Code Pro', monospace; /* Dev notes, code */
}
```

### Responsive Breakpoints
```css
:root {
  --breakpoint-mobile: 480px;
  --breakpoint-tablet-portrait: 768px;    /* Main mobile breakpoint */
  --breakpoint-tablet-landscape: 1024px;
  --breakpoint-desktop: 1280px;
  --breakpoint-wide: 1440px;
}
```

## Layout Architecture

### 1. Fixed Right Navigation (`fixed-right-nav`)

**Desktop Implementation:**
```css
.fixed-right-nav {
  position: fixed;
  right: 0;
  top: 12.5%;    /* Below header */
  bottom: 12.5%; /* Above footer */
  width: 280px;
  background-color: var(--primary-bg);
  border-left: 1px solid var(--border-color);
  z-index: 999;
}
```

**Features:**
- Vertical accordion navigation system
- Collapsible via `flex-nav-collapse-button`
- React Icons for navigation headings (24px base size)
- Transforms to off-canvas on mobile/tablet (≤768px)

**Mobile/Tablet Transformation:**
```css
@media (max-width: 768px) {
  .fixed-right-nav {
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }
  
  .fixed-right-nav.open {
    transform: translateX(0);
  }
}
```

### 2. Fixed Top Header (`fixed-top-header`)

**Specifications:**
- Dimensions: 100% width × 12.5% height (1/8th viewport)
- Position: `position: fixed; top: 0; z-index: 1000;`

**Components:**
- `expand-user-drawer-button` (top-right)
- `UserDrawerMenu` (dropdown/drawer pattern)
- Logo/branding area (left)
- Global search (center, optional)

### 3. Main Content Area (`main-content`)

**Layout Structure:**
```css
.main-content {
  width: calc(100% - var(--nav-width));
  margin-top: 12.5%;    /* Account for fixed header */
  margin-bottom: 12.5%; /* Account for fixed footer */
  display: flex;
}
```

#### 3.1 Main Content Left (`main-content-left`)
- Width: 25% of main-content
- Card-based layout system
- Collapsible functionality
- Three-section structure: header/content/footer

#### 3.2 Main Content Right (`main-content-right`)
- Width: 75% of main-content
- Primary content display area
- Collapsible functionality
- Three-section structure: header/content/footer

### 4. Fixed Bottom Footer (`fixed-bottom-footer`)

**Specifications:**
- Dimensions: 100% width × 12.5% height (1/8th viewport)
- Content: Icon navigation bar
- Position: `position: fixed; bottom: 0; z-index: 1000;`

## State Management Architecture

### Global State (Zustand Store)
```javascript
const useAppStore = create((set) => ({
  // Navigation States
  rightNavCollapsed: false,
  leftContentCollapsed: false,
  rightContentCollapsed: false,
  offCanvasOpen: false,
  
  // User Interface States
  userDrawerOpen: false,
  activeNavItem: 'dashboard',
  theme: 'dark',
  
  // Actions
  toggleRightNav: () => set((state) => ({ 
    rightNavCollapsed: !state.rightNavCollapsed 
  })),
  toggleOffCanvas: () => set((state) => ({ 
    offCanvasOpen: !state.offCanvasOpen 
  })),
  setActiveNavItem: (item) => set({ activeNavItem: item }),
  toggleUserDrawer: () => set((state) => ({ 
    userDrawerOpen: !state.userDrawerOpen 
  })),
}));
```

### Local Component State
- Card expanded/collapsed states
- Form inputs and validation
- Temporary UI states
- Animation triggers

## Animation & Interaction Framework

### Framer Motion Configuration
```javascript
// Default transition settings
const defaultTransition = {
  duration: 0.3,
  ease: "easeInOut"
};

// Slide animations for collapsible elements
const slideVariants = {
  open: { width: "auto", opacity: 1 },
  closed: { width: 0, opacity: 0 }
};

// Fade transitions for overlays
const fadeVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

// Off-canvas navigation
const offCanvasVariants = {
  open: { x: 0 },
  closed: { x: "100%" }
};
```

### Animation Specifications
- **Library:** Framer Motion
- **Default Duration:** 300ms
- **Timing Function:** ease-in-out
- **Slide Animations:** Collapsible elements
- **Fade Transitions:** Overlays and modals
- **Hover Effects:** Subtle interactive feedback

## Icon Strategy

### React Icons Implementation
```javascript
import { 
  FiMenu,          // Hamburger menu
  FiHome,          // Navigation
  FiSettings,      // Settings
  FiUser,          // User profile
  FiChevronDown,   // Accordion arrows
  FiX              // Close buttons
} from 'react-icons/fi';

// Icon wrapper component
const IconWrapper = ({ icon: Icon, size = 24, ...props }) => (
  <Icon size={size} {...props} />
);
```

**Specifications:**
- **Library:** React Icons
- **Base Size:** 24px
- **Style:** Flat, minimal design
- **Color Scheme:** Monochrome with hover effects
- **Categories:** Navigation, Action, Status, Social/Communication

## Component Development Patterns

### Example Layout Component
```jsx
// Layout/FixedRightNav/FixedRightNav.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../../../store/appStore';
import NavAccordion from './NavAccordion';
import styles from './FixedRightNav.module.css';

const FixedRightNav = () => {
  const { rightNavCollapsed, offCanvasOpen } = useAppStore();
  
  return (
    <motion.nav 
      className={`${styles.fixedRightNav} ${offCanvasOpen ? styles.open : ''}`}
      initial={false}
      animate={rightNavCollapsed ? "collapsed" : "expanded"}
      variants={slideVariants}
      transition={defaultTransition}
    >
      <NavAccordion />
    </motion.nav>
  );
};

export default FixedRightNav;
```

### CSS Module Pattern
```css
/* FixedRightNav.module.css */
.fixedRightNav {
  position: fixed;
  right: 0;
  top: 12.5%;
  bottom: 12.5%;
  width: 280px;
  background-color: var(--primary-bg);
  border-left: 1px solid var(--border-color);
  z-index: 999;
}

.collapsed {
  width: 60px;
}

@media (max-width: 768px) {
  .fixedRightNav {
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }
  
  .fixedRightNav.open {
    transform: translateX(0);
  }
}
```

## Performance Optimization

### React Optimization Strategies
```javascript
// Lazy loading for route components
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Settings = React.lazy(() => import('./pages/Settings'));

// Memoization for expensive computations
const MemoizedChart = React.memo(ChartComponent);

// useCallback for event handlers
const handleNavToggle = useCallback(() => {
  toggleRightNav();
}, [toggleRightNav]);

// useMemo for computed values
const filteredData = useMemo(() => {
  return data.filter(item => item.active);
}, [data]);
```

### Build Optimization Features
- Code splitting by route
- Tree shaking for unused code
- Asset optimization (images, fonts)
- CSS minification
- JavaScript bundling and minification

## Accessibility Requirements

### WCAG AA Compliance Implementation
```css
/* High contrast colors */
.text-primary { color: #ffffff; } /* 21:1 contrast ratio */
.text-secondary { color: #a0a0a0; } /* 4.5:1 contrast ratio */

/* Focus management */
.focusable:focus {
  outline: 2px solid var(--secondary-bg);
  outline-offset: 2px;
}

/* Screen reader support */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### Accessibility Checklist
- ✅ ARIA labels for all interactive elements
- ✅ Keyboard navigation support (Tab, Enter, Escape)
- ✅ Focus management for modals/drawers
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Color contrast compliance (WCAG AA)
- ✅ Screen reader compatibility

## Development Phases & Status

### Phase 1: Foundation ✅ **COMPLETE**
- ✅ Project setup and configuration
- ✅ Base layout components structure
- ✅ Responsive grid system planning
- ✅ Color and typography implementation
- ✅ Build system configuration

### Phase 2: Core Components 🔄 **IN PROGRESS**

**Current Priorities:**
1. **Complete Layout Components**
   - [ ] Implement FixedRightNav with accordion functionality
   - [ ] Build responsive header with user drawer
   - [ ] Create main content sections with card system

2. **State Management Integration**
   - [ ] Set up Zustand store
   - [ ] Implement navigation state management
   - [ ] Add responsive breakpoint detection

3. **Basic Interactivity**
   - [ ] Collapsible panel functionality
   - [ ] Off-canvas navigation for mobile
   - [ ] User drawer toggle system

### Phase 3: Interactivity 📋 **PLANNED**
- [ ] Animation implementation with Framer Motion
- [ ] Slide transitions for collapsible elements
- [ ] Advanced responsive behaviors
- [ ] Interactive component behaviors
- [ ] Form handling and validation
- [ ] API integration planning

### Phase 4: Polish & Testing 📋 **PLANNED**
- [ ] Cross-browser testing
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Documentation completion
- [ ] Visual regression testing

## Testing Strategy

### Testing Framework Setup
```javascript
// setupTests.js
import '@testing-library/jest-dom';

// Component testing pattern
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FixedRightNav from './FixedRightNav';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

test('renders navigation and toggles correctly', () => {
  renderWithRouter(<FixedRightNav />);
  const navElement = screen.getByRole('navigation');
  expect(navElement).toBeInTheDocument();
  
  const toggleButton = screen.getByLabelText('Toggle navigation');
  fireEvent.click(toggleButton);
  expect(navElement).toHaveClass('collapsed');
});
```

### Testing Requirements
- **Unit Tests:** Utilities and pure functions
- **Component Tests:** React Testing Library
- **Integration Tests:** Navigation flows and state changes
- **Visual Regression:** Screenshot comparisons
- **Responsive Tests:** Multiple viewport sizes
- **Accessibility Tests:** axe-core integration

## Package.json Configuration

### Inferred Dependencies
```json
{
  "name": "alpha-kingdom",
  "version": "0.0.1",
  "private": true,
  "homepage": "https://priori.dev/alpha-kingdom/",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.10.1",
    "framer-motion": "^10.16.4",
    "zustand": "^4.4.1",
    "react-router-dom": "^6.15.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "deploy": "npm run build && [deployment script]"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^14.4.3",
    "react-scripts": "5.0.1"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

## Code Examples & Implementation Patterns

### App.jsx Structure
```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FixedTopHeader from './components/Layout/FixedTopHeader/FixedTopHeader';
import FixedRightNav from './components/Layout/FixedRightNav/FixedRightNav';
import MainContent from './components/Layout/MainContent/MainContent';
import FixedBottomFooter from './components/Layout/FixedBottomFooter/FixedBottomFooter';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="app">
        <FixedTopHeader />
        <FixedRightNav />
        <MainContent>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </MainContent>
        <FixedBottomFooter />
      </div>
    </Router>
  );
}

export default App;
```

### Zustand Store Implementation
```javascript
// store/appStore.js
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

const useAppStore = create(
  subscribeWithSelector((set, get) => ({
    // Navigation State
    rightNavCollapsed: false,
    leftContentCollapsed: false,
    rightContentCollapsed: false,
    offCanvasOpen: false,
    
    // UI State
    userDrawerOpen: false,
    activeNavItem: 'dashboard',
    isMobile: window.innerWidth <= 768,
    
    // Theme State
    theme: 'dark',
    
    // Actions
    toggleRightNav: () => set((state) => ({ 
      rightNavCollapsed: !state.rightNavCollapsed 
    })),
    
    toggleLeftContent: () => set((state) => ({ 
      leftContentCollapsed: !state.leftContentCollapsed 
    })),
    
    toggleRightContent: () => set((state) => ({ 
      rightContentCollapsed: !state.rightContentCollapsed 
    })),
    
    toggleOffCanvas: () => set((state) => ({ 
      offCanvasOpen: !state.offCanvasOpen 
    })),
    
    toggleUserDrawer: () => set((state) => ({ 
      userDrawerOpen: !state.userDrawerOpen 
    })),
    
    setActiveNavItem: (item) => set({ activeNavItem: item }),
    
    setIsMobile: (isMobile) => set({ isMobile }),
    
    setTheme: (theme) => set({ theme }),
    
    // Computed values
    getNavWidth: () => {
      const state = get();
      if (state.isMobile) return 0;
      return state.rightNavCollapsed ? 60 : 280;
    },
  }))
);

// Subscribe to window resize
window.addEventListener('resize', () => {
  useAppStore.getState().setIsMobile(window.innerWidth <= 768);
});

export default useAppStore;
```

### Responsive Hook Implementation
```javascript
// utils/useResponsive.js
import { useState, useEffect } from 'react';

const breakpoints = {
  mobile: 480,
  tabletPortrait: 768,
  tabletLandscape: 1024,
  desktop: 1280,
  wide: 1440
};

export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  const [currentBreakpoint, setCurrentBreakpoint] = useState('desktop');
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize({
        width,
        height: window.innerHeight
      });
      
      // Determine current breakpoint
      if (width <= breakpoints.mobile) {
        setCurrentBreakpoint('mobile');
      } else if (width <= breakpoints.tabletPortrait) {
        setCurrentBreakpoint('tabletPortrait');
      } else if (width <= breakpoints.tabletLandscape) {
        setCurrentBreakpoint('tabletLandscape');
      } else if (width <= breakpoints.desktop) {
        setCurrentBreakpoint('desktop');
      } else {
        setCurrentBreakpoint('wide');
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Call once on mount
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return {
    screenSize,
    currentBreakpoint,
    isMobile: currentBreakpoint === 'mobile',
    isTablet: ['tabletPortrait', 'tabletLandscape'].includes(currentBreakpoint),
    isDesktop: ['desktop', 'wide'].includes(currentBreakpoint),
    breakpoints
  };
};
```

### Card Component Pattern
```jsx
// components/UI/Cards/PrimaryCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './PrimaryCard.module.css';

const PrimaryCard = ({ 
  title, 
  children, 
  collapsible = false, 
  defaultCollapsed = false,
  className = '',
  ...props 
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  
  const toggleCollapse = () => {
    if (collapsible) {
      setIsCollapsed(!isCollapsed);
    }
  };
  
  return (
    <motion.div 
      className={`${styles.primaryCard} ${className}`}
      initial={false}
      animate={isCollapsed ? "collapsed" : "expanded"}
      variants={{
        expanded: { height: "auto" },
        collapsed: { height: "60px" }
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      {...props}
    >
      <div 
        className={`${styles.cardHeader} ${collapsible ? styles.clickable : ''}`}
        onClick={toggleCollapse}
      >
        <h3 className={styles.cardTitle}>{title}</h3>
        {collapsible && (
          <motion.div
            animate={{ rotate: isCollapsed ? 0 : 180 }}
            transition={{ duration: 0.3 }}
          >
            <FiChevronDown />
          </motion.div>
        )}
      </div>
      
      <motion.div 
        className={styles.cardContent}
        initial={false}
        animate={isCollapsed ? "hidden" : "visible"}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -20 }
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default PrimaryCard;
```

## Deployment & Build Information

### Current Deployment
- **URL:** https://priori.dev/alpha-kingdom/
- **Last Build:** July 4, 2025 at 17:57
- **Build Tool:** Create React App
- **Status:** Production-ready static files

### Build Process
```bash
# Production build
npm run build

# Build outputs to /build directory
# Optimized static files ready for deployment
# Includes code splitting, minification, and asset optimization
```

### Deployment Checklist
- ✅ Static file optimization
- ✅ Asset compression
- ✅ Code splitting implemented
- ✅ Environment variables configured
- ✅ Performance metrics baseline
- [ ] CDN configuration
- [ ] Cache headers optimization
- [ ] Error monitoring setup

## Common Development Patterns

### Error Boundary Implementation
```jsx
// components/ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>Something went wrong.</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }
    
    return this.props.children;
  }
}
```

### Loading Component Pattern
```jsx
// components/UI/Loading.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Loading.module.css';

const Loading = ({ size = 'medium', text = 'Loading...' }) => {
  return (
    <div className={`${styles.loading} ${styles[size]}`}>
      <motion.div
        className={styles.spinner}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {text && <p className={styles.loadingText}>{text}</p>}
    </div>
  );
};
```

## Troubleshooting Guide

### Common Issues & Solutions

#### 1. Navigation Not Responsive
**Problem:** Off-canvas navigation not working on mobile
**Solution:** Check media query breakpoints and ensure proper state management

```javascript
// Verify breakpoint detection
const { isMobile } = useResponsive();
console.log('Is mobile:', isMobile);

// Check Zustand state
const { offCanvasOpen, toggleOffCanvas } = useAppStore();
```

#### 2. Animation Performance Issues
**Problem:** Choppy animations or poor performance
**Solution:** Optimize Framer Motion animations and use GPU acceleration

```css
/* Add to animated elements */
.animated-element {
  will-change: transform;
  transform: translateZ(0); /* Force GPU acceleration */
}
```

#### 3. State Management Issues
**Problem:** State not updating across components
**Solution:** Verify Zustand store subscription and component re-renders

```javascript
// Debug state changes
useAppStore.subscribe(
  (state) => state.rightNavCollapsed,
  (collapsed) => console.log('Nav collapsed:', collapsed)
);
```

## Next Development Priorities

### Immediate Tasks (Week 1-2)
1. **Complete FixedRightNav Component**
   - Implement accordion functionality
   - Add mobile off-canvas behavior
   - Integrate with Zustand store

2. **Build Header Components**
   - Create user drawer menu
   - Implement responsive behavior
   - Add global search functionality

3. **Set Up State Management**
   - Configure Zustand store
   - Implement navigation state
   - Add responsive breakpoint detection

### Medium Term (Week 3-4)
1. **Main Content Areas**
   - Build left and right content sections
   - Implement card-based layout
   - Add collapsible functionality

2. **Animation Integration**
   - Configure Framer Motion
   - Add smooth transitions
   - Implement hover effects

### Long Term (Month 2)
1. **Advanced Features**
   - Form handling and validation
   - API integration
   - User authentication
   - Theme switching

2. **Performance & Testing**
   - Comprehensive test suite
   - Performance optimization
   - Accessibility audit
   - Cross-browser testing

## Resources & Documentation

### External Resources
- [React Documentation](https://react.dev/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Icons Library](https://react-icons.github.io/react-icons/)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Internal Documentation
- Component API documentation (to be created)
- Style guide with live examples (planned)
- Setup and deployment guide (this document)
- Contributing guidelines (to be created)

---

**Last Updated:** July 4, 2025  
**Document Version:** 1.0  
**Next Review:** Phase 2 completion