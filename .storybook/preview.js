import { themes } from '@storybook/theming';

// Version 7 exports as default; Version 6 exports as named export
export default parameters;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    showPanel: false
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: {
    current: 'light',
    darkClass: 'midnight',
    dark: { ...themes.dark, appBg: '#000104', brandImage: '' },
    light: { ...themes.normal, appBg: '#E7EDFA', brandImage: '' },
    classTarget: 'html',
    stylePreview: true
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#E7EDFA'
      },
      {
        name: 'dark',
        value: '#1C181E'
      }
    ]
  }
};

