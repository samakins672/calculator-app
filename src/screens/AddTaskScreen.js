import React, { useState } from 'react';
import { Button, KeyboardAvoidingView, Platform, View } from 'react-native';
import useTaskStore from '../store/taskStore';
import styled, { useTheme } from 'styled-components/native';
import Card from '../components/Card';

const AddTaskScreen = ({ navigation }) => {
  const theme = useTheme();
  const [title, setTitle] = useState('');
  const addTask = useTaskStore((state) => state.addTask);

  const handleAddTask = () => {
    if (title.trim().length > 0) {
      addTask(title.trim());
      navigation.goBack();
    }
  };

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Card style={{ width: '85%' }}>
        <ModalContent>
          <ModalText>New Task</ModalText>
          <Input
            placeholder="Enter task title..."
            placeholderTextColor={theme.subtleText}
            value={title}
            onChangeText={setTitle}
            autoFocus
          />
          <ButtonContainer>
            <Button title="Cancel" onPress={() => navigation.goBack()} color="#ff3b30" />
            <Button title="Add Task" onPress={handleAddTask} color={theme.button} />
          </ButtonContainer>
        </ModalContent>
      </Card>
    </Container>
  );
};

const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.background};
`;

const ModalContent = styled.View`
  padding: 25px;
  align-items: center;
`;

const ModalText = styled.Text`
  margin-bottom: 15px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.text};
`;

const Input = styled.TextInput`
  height: 50px;
  width: 100%;
  border-color: ${props => props.theme.seperator};
  border-width: 1px;
  border-radius: 10px;
  margin-bottom: 20px;
  padding-horizontal: 15px;
  font-size: 16px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.card};
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export default AddTaskScreen;