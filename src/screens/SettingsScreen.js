import React from 'react';
import styled from 'styled-components/native';
import { useThemeStore } from '../store/useThemeStore';
import { Switch } from 'react-native';
import { GlassCard } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 120px 24px 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 18px;
  font-weight: 600;
`;

const Description = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 12px;
`;

const SettingsScreen = () => {
  const { theme, toggleTheme } = useThemeStore((state) => ({
    theme: state.theme,
    toggleTheme: state.toggleTheme,
  }));
  const isDark = theme === 'dark';

  return (
    <Container edges={['left', 'right']}>
      <Title>Preferences</Title>
      <GlassCard>
        <Row>
          <Label>Dark mode</Label>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: 'rgba(255,255,255,0.3)', true: 'rgba(167,139,250,0.5)' }}
            thumbColor={isDark ? '#A78BFA' : '#6C63FF'}
          />
        </Row>
        <Description>Switch between light and dark glass surfaces.</Description>
      </GlassCard>
    </Container>
  );
};

export default SettingsScreen;
