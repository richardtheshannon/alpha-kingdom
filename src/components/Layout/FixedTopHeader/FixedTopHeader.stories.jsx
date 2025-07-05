// src\components\Layout\FixedTopHeader\FixedTopHeader.stories.jsx
import React from 'react';
import { NavigationProvider } from '../../../utils/NavigationContext';
import FixedTopHeader from './FixedTopHeader';

export default {
  title: 'Alpha Kingdom/Layout/Header',
  component: FixedTopHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The main header component with Alpha Kingdom branding, user menu, and mobile navigation trigger.',
      },
    },
  },
  decorators: [
    function HeaderDecorator(Story) {
      return (
        <NavigationProvider>
          <div style={{ 
            height: '200px', 
            position: 'relative',
            backgroundColor: 'var(--primary-bg)'
          }}>
            <Story />
          </div>
        </NavigationProvider>
      );
    },
  ],
};

export const Default = {
  name: 'Desktop View',
};

export const Mobile = {
  name: 'Mobile View',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const WithUserMenu = {
  name: 'With User Menu Open',
  // You can add interactions here later to show the menu open
};