import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { useTheme } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const Stack = createStackNavigator();

const HeaderIconButton = ({ icon, onPress }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
      style={{
        marginLeft: icon === 'settings-outline' ? 12 : 0,
        marginRight: icon === 'add' ? 12 : 0,
        padding: 6,
        borderRadius: theme.borderRadius,
        backgroundColor:
          theme.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.08)'
            : 'rgba(16, 18, 37, 0.08)',
      }}
    >
      <Ionicons name={icon} size={22} color={theme.colors.textPrimary} />
    </TouchableOpacity>
  );
};

const AppNavigator = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitleAlign: 'center',
        headerTintColor: theme.colors.textPrimary,
        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 20,
          color: theme.colors.textPrimary,
        },
        headerBackground: () => (
          <BlurView
            intensity={theme.blurIntensity}
            tint={theme.mode === 'dark' ? 'dark' : 'light'}
            style={{ flex: 1 }}
          />
        ),
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'GlassTasks',
          headerRight: () => (
            <HeaderIconButton icon="add" onPress={() => navigation.navigate('AddTask')} />
          ),
          headerLeft: () => (
            <HeaderIconButton
              icon="settings-outline"
              onPress={() => navigation.navigate('Settings')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="AddTask"
        component={AddTaskScreen}
        options={{
          title: 'Add Task',
          presentation: 'modal',
          headerTintColor: theme.colors.textPrimary,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
