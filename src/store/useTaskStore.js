import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { nanoid } from '../utils/id';

const defaultTasks = [];

export const useTaskStore = create(
  persist(
    (set, get) => ({
      tasks: defaultTasks,
      addTask: (task) => {
        const title = task?.title?.trim();
        if (!title) {
          return;
        }
        const newTask = {
          id: nanoid(),
          title,
          description: task?.description?.trim() || '',
          completed: false,
          createdAt: new Date().toISOString(),
        };
        set((state) => ({ tasks: [newTask, ...state.tasks] }));
      },
      toggleTaskCompletion: (id) => {
        set((state) => ({
          tasks: state.tasks.map((taskItem) =>
            taskItem.id === id
              ? { ...taskItem, completed: !taskItem.completed }
              : taskItem
          ),
        }));
      },
      updateTask: (id, values) => {
        set((state) => ({
          tasks: state.tasks.map((taskItem) =>
            taskItem.id === id ? { ...taskItem, ...values } : taskItem
          ),
        }));
      },
      deleteTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((taskItem) => taskItem.id !== id),
        }));
      },
      clearTasks: () => set({ tasks: [] }),
    }),
    {
      name: 'glass-tasks',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
