import React from 'react';
import { BlurView } from 'expo-blur';
import styled, { useTheme } from 'styled-components/native';
import { Pressable } from 'react-native';

const ButtonWrapper = styled(BlurView).attrs(({ theme }) => ({
  intensity: theme.blurIntensity,
  tint: theme.mode === 'dark' ? 'dark' : 'light',
}))`
  border-radius: ${({ theme }) => theme.borderRadius}px;
  border: 1px solid ${({ theme }) => theme.glassBorder};
  overflow: hidden;
`;

const PressableArea = styled(Pressable)`
  padding: 14px 18px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Label = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;
  font-size: 16px;
`;

export const GlassButton = ({ label, children, disabled, style, ...props }) => {
  const theme = useTheme();
  return (
    <ButtonWrapper style={[theme.shadow, { opacity: disabled ? 0.6 : 1 }, style]}>
      <PressableArea
        android_ripple={{ color: 'rgba(255,255,255,0.2)' }}
        disabled={disabled}
        {...props}
      >
        {label ? <Label>{label}</Label> : children}
      </PressableArea>
    </ButtonWrapper>
  );
};

export default GlassButton;
