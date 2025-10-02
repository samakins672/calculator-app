# Implementation Guide

## 1. Tech Stack

* **Framework**: React Native (Expo for simplicity).
* **UI**: React Native Paper / Styled Components + custom glassmorphism styles.
* **Navigation**: React Navigation (Stack + Modal).
* **Storage**: AsyncStorage (local device storage).
* **State Management**: Zustand (lightweight alternative to Redux).

## 2. Architecture

```
src/
├── assets/           # Images, fonts
├── components/       # Reusable UI (GlassCard, Button, Input)
├── navigation/       # App navigation setup
├── screens/          
│   ├── HomeScreen.js # Task list view
│   ├── AddTask.js    # Modal to add new task
│   └── Settings.js   # Dark/Light theme toggle
├── store/            # Zustand store for tasks
├── utils/            # Helpers (date formatting, colors)
└── App.js            # Root component
```

## 3. Dependencies

```bash
expo init glass-tasks
cd glass-tasks
npm install @react-navigation/native @react-navigation/stack
npm install react-native-safe-area-context react-native-screens
npm install @react-native-async-storage/async-storage
npm install zustand styled-components
```

## 4. Glassmorphism UI Implementation

Glassmorphism style = **blur + transparency + frosted look**.
Example style:

```js
const styles = StyleSheet.create({
  glassCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    backdropFilter: 'blur(10px)', // iOS (for Android use react-native-blur)
  },
});
```

Use `expo-blur`:

```bash
expo install expo-blur
```

## 5. Workflow with Copilot/Codex

1. Write TODOs in code comments (`// TODO: Add Zustand store for tasks`).
2. Let Copilot suggest boilerplate.
3. Use Codex to scaffold UI (e.g., “Create a GlassCard component with title and delete button”).
4. Debug errors with AI suggestions.

## 6. Milestones

* **Week 1**: Setup project, navigation, dummy UI.
* **Week 2**: Implement task CRUD with Zustand + AsyncStorage.
* **Week 3**: Apply glassmorphism styles, add animations.
* **Week 4**: Final polish (dark mode, bug fixes, deploy to Expo).

## 7. Deployment

* Android: `expo build:android` → `.apk` or `.aab`.
* iOS: `expo build:ios` → TestFlight release.

---
