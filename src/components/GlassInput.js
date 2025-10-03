import React from 'react';
import { BlurView } from 'expo-blur';
import styled, { useTheme } from 'styled-components/native';
import { TextInput } from 'react-native';

const InputWrapper = styled(BlurView).attrs(({ theme }) => ({
  intensity: theme.blurIntensity,
  tint: theme.mode === 'dark' ? 'dark' : 'light',
}))`
  border-radius: ${({ theme }) => theme.borderRadius}px;
  border: 1px solid ${({ theme }) => theme.glassBorder};
  margin-bottom: 16px;
  overflow: hidden;
`;

const StyledTextInput = styled(TextInput)`
  padding: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 16px;
`;

export const GlassInput = React.forwardRef(({ style, ...props }, ref) => {
  const theme = useTheme();
  const placeholderColor =
    theme.mode === 'dark' ? 'rgba(245,247,255,0.5)' : 'rgba(16,18,37,0.35)';
  return (
    <InputWrapper>
      <StyledTextInput
        ref={ref}
        placeholderTextColor={placeholderColor}
        style={style}
        {...props}
      />
    </InputWrapper>
  );
});

GlassInput.displayName = 'GlassInput';

export default GlassInput;
