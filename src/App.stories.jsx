// src\App.stories.jsx
import React from 'react';
import App from './App';

export default {
  title: 'Alpha Kingdom/Complete App',
  component: App,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The complete Alpha Kingdom application with all layout components integrated.',
      },
    },
  },
};

export const Desktop = {
  name: 'Desktop View',
};

export const Tablet = {
  name: 'Tablet View',
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const Mobile = {
  name: 'Mobile View',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};