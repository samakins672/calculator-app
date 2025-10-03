import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './navigation/AppNavigator';
import { useThemeStore } from './store/useThemeStore';
import { darkTheme, lightTheme } from './utils/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const RootApp = () => {
  const theme = useThemeStore((state) => state.theme);

  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={currentTheme}>
        <NavigationContainer theme={currentTheme.navigation}>
          <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
          <AppNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default RootApp;
