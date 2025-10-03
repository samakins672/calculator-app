import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Platform } from 'react-native';

const shared = {
  borderRadius: 20,
  blurIntensity: 65,
  glassBorder: 'rgba(255, 255, 255, 0.25)',
  glassBackgroundLight: 'rgba(255, 255, 255, 0.2)',
  glassBackgroundDark: 'rgba(20, 20, 35, 0.35)',
  shadow: Platform.select({
    web: {
      boxShadow: '0 20px 50px rgba(15, 18, 37, 0.25)',
    },
    default: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.2,
      shadowRadius: 20,
      elevation: 10,
    },
  }),
};

export const lightTheme = {
  mode: 'light',
  colors: {
    background: '#E3E9FF',
    card: 'rgba(255, 255, 255, 0.45)',
    cardSecondary: 'rgba(255, 255, 255, 0.3)',
    textPrimary: '#101225',
    textSecondary: 'rgba(16, 18, 37, 0.7)',
    accent: '#6C63FF',
    danger: '#FF6B6B',
    success: '#4ADE80',
  },
  navigation: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#E3E9FF',
      card: 'rgba(255, 255, 255, 0.35)',
      text: '#101225',
      border: 'rgba(255, 255, 255, 0.2)',
      primary: '#6C63FF',
    },
  },
  ...shared,
};

export const darkTheme = {
  mode: 'dark',
  colors: {
    background: '#05070F',
    card: 'rgba(25, 27, 45, 0.6)',
    cardSecondary: 'rgba(39, 42, 65, 0.45)',
    textPrimary: '#F5F7FF',
    textSecondary: 'rgba(245, 247, 255, 0.7)',
    accent: '#A78BFA',
    danger: '#F87171',
    success: '#34D399',
  },
  navigation: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: '#05070F',
      card: 'rgba(25, 27, 45, 0.7)',
      border: 'rgba(255, 255, 255, 0.1)',
      text: '#F5F7FF',
      primary: '#A78BFA',
    },
  },
  ...shared,
};
