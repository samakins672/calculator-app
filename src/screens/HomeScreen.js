import React, { useMemo } from 'react';
import { FlatList } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { GlassCard, GlassButton } from '../components';
import { useTaskStore } from '../store/useTaskStore';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 120px 24px 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const HeaderText = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 8px;
`;

const SubHeader = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 24px;
`;

const TaskTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme, completed }) =>
    completed ? theme.colors.success : theme.colors.textPrimary};
`;

const TaskDescription = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 8px;
  line-height: 20px;
`;

const TaskMeta = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

const IconButton = styled.TouchableOpacity`
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(16,18,37,0.08)'};
  flex-direction: row;
  align-items: center;
`;

const EmptyState = styled.View`
  padding: 48px 16px;
  align-items: center;
`;

const EmptyTitle = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 20px;
  font-weight: 600;
  margin-top: 16px;
`;

const EmptySubtitle = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  margin-top: 8px;
`;

const TaskItem = ({ item, onToggle, onDelete }) => {
  const theme = useTheme();
  return (
    <GlassCard>
      <TaskTitle completed={item.completed}>{item.title}</TaskTitle>
      {!!item.description && <TaskDescription>{item.description}</TaskDescription>}
      <TaskMeta>
        <IconButton onPress={() => onToggle(item.id)}>
          <Ionicons
            name={item.completed ? 'checkmark-circle' : 'ellipse-outline'}
            size={20}
            color={item.completed ? theme.colors.success : theme.colors.textPrimary}
          />
        </IconButton>
        <IconButton onPress={() => onDelete(item.id)}>
          <Ionicons name="trash-outline" size={20} color={theme.colors.danger} />
        </IconButton>
      </TaskMeta>
    </GlassCard>
  );
};

const HomeScreen = ({ navigation }) => {
  const tasks = useTaskStore((state) => state.tasks);
  const toggleTaskCompletion = useTaskStore((state) => state.toggleTaskCompletion);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const sortedTasks = useMemo(
    () =>
      tasks.slice().sort((a, b) => {
        if (a.completed === b.completed) {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
        return a.completed ? 1 : -1;
      }),
    [tasks]
  );

  return (
    <ScreenContainer edges={['left', 'right']}>
      <HeaderText>Today</HeaderText>
      <SubHeader>Organize your day with clarity.</SubHeader>
      {sortedTasks.length === 0 ? (
        <EmptyState>
          <Ionicons name="planet-outline" size={48} color={theme.colors.textSecondary} />
          <EmptyTitle>No tasks yet</EmptyTitle>
          <EmptySubtitle>Tap the + icon to add a new task.</EmptySubtitle>
        </EmptyState>
      ) : (
        <FlatList
          data={sortedTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem item={item} onToggle={toggleTaskCompletion} onDelete={deleteTask} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: Math.max(160, insets.bottom + 140),
          }}
        />
      )}
      <GlassButton
        label="Add Task"
        onPress={() => navigation.navigate('AddTask')}
        style={{
          position: 'absolute',
          bottom: Math.max(32, insets.bottom + 16),
          left: 24,
          right: 24,
        }}
      />
    </ScreenContainer>
  );
};

export default HomeScreen;
