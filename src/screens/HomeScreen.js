import React from 'react';
import { FlatList, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import useTaskStore from '../store/taskStore';
import GlassCard from '../components/GlassCard';
import styled, { useTheme } from 'styled-components/native';

const HomeScreen = ({ navigation }) => {
  const theme = useTheme();
  const { tasks, toggleTask, deleteTask } = useTaskStore();

  const renderItem = ({ item }) => (
    <GlassCard style={{ marginBottom: 10 }}>
        <TaskContent>
            <TaskTouchable onPress={() => navigation.navigate('EditTask', { taskId: item.id, currentTitle: item.title })}>
                <TaskTitle completed={item.completed}>{item.title}</TaskTitle>
            </TaskTouchable>
            <CheckButton onPress={() => toggleTask(item.id)}>
                <CheckButtonText>{item.completed ? '✓' : '○'}</CheckButtonText>
            </CheckButton>
            <DeleteButton onPress={() => deleteTask(item.id)}>
                <DeleteButtonText>✕</DeleteButtonText>
            </DeleteButton>
        </TaskContent>
    </GlassCard>
  );

  return (
    <Background source={{ uri: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=2512&auto=format&fit=crop' }}>
      <Container>
        <Header>
          <HeaderTitle>Today's Tasks</HeaderTitle>
          <Button
            title="Settings"
            onPress={() => navigation.navigate('Settings')}
            color={theme.buttonText}
          />
        </Header>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10 }}
        />
        <AddButtonContainer>
          <Button
            title="Add New Task"
            onPress={() => navigation.navigate('AddTask')}
            color={theme.buttonText}
          />
        </AddButtonContainer>
      </Container>
    </Background>
  );
};

const Background = styled.ImageBackground`
  flex: 1;
`;

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.overlay};
`;

const Header = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${props => props.theme.text};
`;

const TaskContent = styled.View`
  padding: 15px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TaskTouchable = styled.TouchableOpacity`
  flex: 1;
  margin-right: 10px;
`;

const TaskTitle = styled.Text`
  font-size: 18px;
  text-decoration-line: ${props => props.completed ? 'line-through' : 'none'};
  color: ${props => props.completed ? props.theme.completed : props.theme.text};
`;

const CheckButton = styled.TouchableOpacity`
    padding: 5px;
`;

const CheckButtonText = styled.Text`
    color: ${props => props.theme.text};
    font-size: 20px;
`;

const DeleteButton = styled.TouchableOpacity`
  padding: 5px;
  margin-left: 10px;
`;

const DeleteButtonText = styled.Text`
  color: #ff3b30;
  font-size: 20px;
  font-weight: bold;
`;

const AddButtonContainer = styled.View`
  padding: 20px;
  background-color: ${props => props.theme.overlay};
`;

export default HomeScreen;