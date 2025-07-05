import React from 'react';
import '../src/styles/variables.css';
import '../src/styles/globals.css';
import '../src/styles/mixins.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'alpha-kingdom-dark',
      values: [
        {
          name: 'alpha-kingdom-dark',
          value: '#0e1113', // Your primary-bg
        },
        {
          name: 'alpha-kingdom-secondary', 
          value: '#181c1f', // Your tertiary-bg
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
    // Apply dark theme to Storybook UI
    docs: {
      theme: 'dark',
    },
  },
  decorators: [
    function AlphaKingdomDecorator(Story) {
      return (
        <div style={{ 
          fontFamily: "'Nanum Gothic', sans-serif",
          color: '#ffffff',
          backgroundColor: '#0e1113',
          minHeight: '100vh',
          padding: '20px'
        }}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;