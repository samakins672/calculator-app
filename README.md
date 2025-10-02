# GlassTasks

GlassTasks is a lightweight, mobile-first task management app designed with a **modern glassmorphism UI**. It allows users to create, track, and manage tasks in a clean, aesthetic interface.

## Features

*   **Task CRUD:** Create, Read, Update, and Delete tasks.
*   **Glassmorphism UI:** A modern, frosted-glass look and feel.
*   **Light/Dark Mode:** Switch between light and dark themes.
*   **Local Storage:** Tasks are persisted on your device using AsyncStorage.

## Tech Stack

*   **Framework:** React Native (with Expo)
*   **State Management:** Zustand
*   **Styling:** styled-components
*   **Navigation:** React Navigation

## Prerequisites

*   Node.js (LTS version recommended)
*   npm or yarn
*   Expo Go app on your iOS or Android device

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd glass-tasks
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Running the App

1.  **Start the Expo development server:**
    ```bash
    npm start
    ```
    Alternatively, you can use `npx expo start`.

2.  **Open the app on your device:**
    *   Scan the QR code displayed in the terminal with the **Expo Go** app (available on the App Store and Google Play).
    *   This will bundle the app and run it on your phone.

## How to Use

*   **Add a task:** Tap the "Add New Task" button.
*   **Edit a task:** Tap on the task's title.
*   **Complete a task:** Tap the circle icon next to the task.
*   **Delete a task:** Tap the '✕' icon.
*   **Change theme:** Go to the "Settings" screen to toggle between light and dark mode.