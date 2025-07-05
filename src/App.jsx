// src\App.jsx
import React from 'react';
import { NavigationProvider } from './utils/NavigationContext';
import FixedTopHeader from './components/Layout/FixedTopHeader/FixedTopHeader';
import FixedBottomFooter from './components/Layout/FixedBottomFooter/FixedBottomFooter';
import FixedRightNav from './components/Layout/FixedRightNav/FixedRightNav';
import MainContent from './components/Layout/MainContent/MainContent';
import MobileHamburgerButton from './components/UI/Buttons/MobileHamburgerButton';

// Import styles
import './styles/variables.css';
import './styles/globals.css';
import './styles/mixins.css';

function App() {
  return (
    <NavigationProvider>
      <div className="App">
        <FixedTopHeader />
        <MainContent />
        <FixedRightNav />
        <FixedBottomFooter />
        <MobileHamburgerButton />
      </div>
    </NavigationProvider>
  );
}

export default App;