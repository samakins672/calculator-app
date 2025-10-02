import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import useThemeStore from './src/store/themeStore';
import { lightTheme, darkTheme } from './src/utils/themes';
import { StatusBar } from 'react-native';

export default function App() {
  const { theme } = useThemeStore();
  const isDarkMode = theme === 'dark';
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={currentTheme}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}