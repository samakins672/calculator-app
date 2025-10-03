import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useTaskStore } from '../store/useTaskStore';
import { GlassInput, GlassButton } from '../components';
import { KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 120px 24px 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 16px;
`;

const Helper = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 24px;
`;

const AddTaskScreen = ({ navigation }) => {
  const addTask = useTaskStore((state) => state.addTask);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSave = () => {
    addTask({ title, description });
    setTitle('');
    setDescription('');
    Keyboard.dismiss();
    navigation.goBack();
  };

  const isDisabled = title.trim().length === 0;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.select({ ios: 80, default: 0 })}
    >
      <Container edges={['left', 'right', 'bottom']}>
        <Title>Create task</Title>
        <Helper>Add a title and optional details to stay organized.</Helper>
        <GlassInput
          value={title}
          onChangeText={setTitle}
          placeholder="Task title"
          autoFocus
          returnKeyType="done"
          onSubmitEditing={() => {
            if (!isDisabled) {
              onSave();
            }
          }}
        />
        <GlassInput
          value={description}
          onChangeText={setDescription}
          placeholder="Description (optional)"
          multiline
          style={{ height: 120, textAlignVertical: 'top' }}
        />
        <GlassButton
          label={isDisabled ? 'Add a title to continue' : 'Save task'}
          disabled={isDisabled}
          onPress={onSave}
        />
      </Container>
    </KeyboardAvoidingView>
  );
};

export default AddTaskScreen;
