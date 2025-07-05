// src\components\Layout\FixedRightNav\FixedRightNav.stories.jsx
import React from 'react';
import { NavigationProvider } from '../../../utils/NavigationContext';
import FixedRightNav from './FixedRightNav';

export default {
  title: 'Alpha Kingdom/Layout/Navigation',
  component: FixedRightNav,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Collapsible right navigation that becomes off-canvas on mobile devices.',
      },
    },
  },
  argTypes: {
    forceOffCanvas: {
      control: { type: 'boolean' },
      description: 'Force off-canvas mode (simulates mobile)',
      defaultValue: false,
    },
    showCloseButton: {
      control: { type: 'boolean' },
      description: 'Show close button in off-canvas mode',
      defaultValue: true,
    },
    initialCollapsedSections: {
      control: { type: 'object' },
      description: 'Which sections start collapsed',
      defaultValue: {},
    },
    customSections: {
      control: { type: 'object' },
      description: 'Custom navigation sections',
      defaultValue: null,
    },
  },
  decorators: [
    function NavDecorator(Story, { args }) {
      return (
        <NavigationProvider>
          <div style={{ 
            height: '100vh', 
            position: 'relative',
            backgroundColor: 'var(--primary-bg)'
          }}>
            <Story args={args} />
          </div>
        </NavigationProvider>
      );
    },
  ],
};

export const Desktop = {
  name: 'Desktop Navigation',
  args: {
    forceOffCanvas: false,
    showCloseButton: true,
    initialCollapsedSections: {},
  },
};

export const Mobile = {
  name: 'Mobile Off-Canvas',
  args: {
    forceOffCanvas: true,
    showCloseButton: true,
    initialCollapsedSections: {},
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const InteractiveDemo = {
  name: 'Interactive Demo - Expanding Sections',
  args: {
    forceOffCanvas: false,
    showCloseButton: true,
    initialCollapsedSections: { main: true, account: true, system: true },
  },
  play: async ({ canvasElement }) => {
    // Simple play function without external testing libraries
    const canvas = canvasElement;
    
    // Wait for component to render
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Find buttons by text content (simple approach)
    const buttons = canvas.querySelectorAll('button');
    
    // Find section buttons that contain "Main", "Account", "System"
    const mainButton = Array.from(buttons).find(btn => 
      btn.textContent.toLowerCase().includes('main')
    );
    const accountButton = Array.from(buttons).find(btn => 
      btn.textContent.toLowerCase().includes('account')
    );
    const systemButton = Array.from(buttons).find(btn => 
      btn.textContent.toLowerCase().includes('system')
    );
    
    // Click buttons with delays
    if (mainButton) {
      mainButton.click();
      await new Promise(resolve => setTimeout(resolve, 800));
    }
    
    if (accountButton) {
      accountButton.click();
      await new Promise(resolve => setTimeout(resolve, 800));
    }
    
    if (systemButton) {
      systemButton.click();
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  },
};

export const NavigationFlow = {
  name: 'Navigation Flow Demo',
  args: {
    forceOffCanvas: false,
    showCloseButton: true,
    initialCollapsedSections: {},
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    
    // Wait for component to render
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Find navigation links
    const links = canvas.querySelectorAll('a');
    const dashboardLink = Array.from(links).find(link => 
      link.textContent.includes('Dashboard')
    );
    
    // Simulate hover by triggering mouseover event
    if (dashboardLink) {
      dashboardLink.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
      await new Promise(resolve => setTimeout(resolve, 500));
      
      dashboardLink.dispatchEvent(new MouseEvent('mouseout', { bubbles: true }));
    }
    
    // Test section collapsing
    const buttons = canvas.querySelectorAll('button');
    const accountButton = Array.from(buttons).find(btn => 
      btn.textContent.toLowerCase().includes('account')
    );
    
    if (accountButton) {
      accountButton.click();
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Expand it again
      accountButton.click();
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  },
};

export const CollapsedSections = {
  name: 'With Collapsed Sections',
  args: {
    forceOffCanvas: false,
    showCloseButton: true,
    initialCollapsedSections: {
      main: true,
      account: false,
      system: true,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    
    // Wait for component to render
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Expand the Main section
    const buttons = canvas.querySelectorAll('button');
    const mainButton = Array.from(buttons).find(btn => 
      btn.textContent.toLowerCase().includes('main')
    );
    
    if (mainButton) {
      await new Promise(resolve => setTimeout(resolve, 500));
      mainButton.click();
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  },
};

export const CustomNavDemo = {
  name: 'Custom Navigation Demo',
  args: {
    forceOffCanvas: false,
    showCloseButton: true,
    initialCollapsedSections: {},
    customSections: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        icon: 'FiHome',
        links: [
          { icon: 'FiBarChart', text: 'Analytics', href: '#analytics' },
          { icon: 'FiTrendingUp', text: 'Reports', href: '#reports' },
        ]
      },
      {
        id: 'content',
        title: 'Content Management',
        icon: 'FiEdit',
        links: [
          { icon: 'FiFile', text: 'Pages', href: '#pages' },
          { icon: 'FiImage', text: 'Media', href: '#media' },
        ]
      }
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement;
    
    // Wait for custom navigation to render
    await new Promise(resolve => setTimeout(resolve, 400));
    
    // Find custom sections
    const buttons = canvas.querySelectorAll('button');
    const dashboardButton = Array.from(buttons).find(btn => 
      btn.textContent.toLowerCase().includes('dashboard')
    );
    const contentButton = Array.from(buttons).find(btn => 
      btn.textContent.toLowerCase().includes('content management')
    );
    
    // Interact with custom sections
    if (dashboardButton) {
      dashboardButton.click();
      await new Promise(resolve => setTimeout(resolve, 600));
    }
    
    if (contentButton) {
      contentButton.click();
      await new Promise(resolve => setTimeout(resolve, 600));
    }
  },
};