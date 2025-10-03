import React from 'react';
import { BlurView } from 'expo-blur';
import styled, { useTheme } from 'styled-components/native';
import { Platform } from 'react-native';

const StyledBlurView = styled(BlurView).attrs(({ theme }) => ({
  intensity: theme.blurIntensity,
  tint: theme.mode === 'dark' ? 'dark' : 'light',
}))
  .withConfig({ componentId: 'glass-card' })`
  padding: 20px;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  border: 1px solid ${({ theme }) => theme.glassBorder};
  background-color: ${({ theme }) => theme.colors.card};
  margin-bottom: 16px;
  overflow: hidden;
`;

const CardContainer = styled.View`
  width: 100%;
`;

export const GlassCard = ({ children, style, ...props }) => {
  const theme = useTheme();
  const platformStyle = Platform.select({ web: { backdropFilter: 'blur(10px)' } });
  return (
    <CardContainer style={platformStyle}>
      <StyledBlurView style={[theme.shadow, style]} {...props}>
        {children}
      </StyledBlurView>
    </CardContainer>
  );
};

export default GlassCard;
