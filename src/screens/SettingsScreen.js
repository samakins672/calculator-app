import React from 'react';
import { Switch, SafeAreaView } from 'react-native';
import useThemeStore from '../store/themeStore';
import useTaskStore from '../store/taskStore';
import styled, { useTheme } from 'styled-components/native';

const SettingsScreen = () => {
  const theme = useTheme();
  const { toggleTheme } = useThemeStore();
  const tasks = useTaskStore((state) => state.tasks);
  const isDarkMode = theme.background === '#000';

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <Container>
      <Title>Settings</Title>

      <SettingItem>
        <SettingText>Dark Mode</SettingText>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isDarkMode}
        />
      </SettingItem>

      <StatsContainer>
          <StatsTitle>Task Stats</StatsTitle>
          <StatsText>Total tasks: {totalTasks}</StatsText>
          <StatsText>Completed tasks: {completedTasks}</StatsText>
      </StatsContainer>

    </Container>
  );
};

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.background};
  padding-top: 20px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  padding-horizontal: 20px;
  margin-bottom: 20px;
  color: ${props => props.theme.text};
`;

const SettingItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: ${props => props.theme.card};
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.seperator};
`;

const SettingText = styled.Text`
  font-size: 17px;
  color: ${props => props.theme.text};
`;

const StatsContainer = styled.View`
  margin-top: 30px;
  padding-horizontal: 20px;
`;

const StatsTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${props => props.theme.text};
`;

const StatsText = styled.Text`
  font-size: 17px;
  margin-bottom: 5px;
  color: ${props => props.theme.text};
`;

export default SettingsScreen;