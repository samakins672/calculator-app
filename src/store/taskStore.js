import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [
        { id: '1', title: 'First sample task', completed: false },
        { id: '2', title: 'Second sample task', completed: true },
      ],
      addTask: (title) =>
        set((state) => ({
          tasks: [...state.tasks, { id: nanoid(), title, completed: false }],
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),
      updateTask: (id, title) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, title } : task
          ),
        })),
    }),
    {
      name: 'task-storage', // unique name
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useTaskStore;