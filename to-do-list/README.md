## **Project Title**
**React Todo List App**

A simple React application for managing a to-do list with features to add, mark as completed, and delete tasks. It integrates with a backend Express API for persistent data management.

---

## **Table of Contents**
1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Integration](#api-integration)
6. [File Descriptions](#file-descriptions)
7. [Technologies Used](#technologies-used)

---

## **Features**
- **Add Tasks**: Users can add tasks with custom descriptions.
- **Mark as Completed**: Tasks can be marked as completed with a checkbox.
- **Delete Tasks**: Users can delete individual tasks.
- **Persistent State**: Tasks are managed through an Express API, ensuring state persistence across sessions.

---

## **Project Structure**
```
/src
│
├── components
│   ├── AddTodo.tsx        # Component to add a new task
│   ├── Header.tsx         # App header
│   ├── Footer.tsx         # App footer
│   ├── TodoItem.tsx       # Component for individual task item
│   └── TodoList.tsx       # Component to list all tasks
│
├── hooks
│   └── useTodos.tsx       # Custom hook to manage tasks and API calls
│
├── utils
│   └── apiClient.ts       # Factory function for HTTP requests
│
├── App.tsx                # Main app component
├── main.tsx               # Entry point for the React app
└── index.css              # Global CSS styles
```

---

## **Installation**

### **Prerequisites**
- Node.js (version 16 or higher)
- npm or yarn

### **Steps**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Nivetha07-dev/TodoListApp
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd todo-list
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```

---

## **Usage**
1. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).
2. Add, complete, or delete tasks using the user interface.
3. The app interacts with the Express backend to persist changes.

---

## **API Integration**
This project interacts with an Express backend using the following endpoints:

- **GET `/tasks`**: Fetch all tasks.
- **POST `/tasks`**: Add a new task (requires `text` in the request body).
- **DELETE `/tasks/:id`**: Delete a task by its `id`.

All API calls are managed through the `apiClient` factory function in `src/utils/apiClient.ts`.

---

## **File Descriptions**

### **Main Components**
- **`App.tsx`**: The root component that ties everything together.
- **`AddTodo.tsx`**: Contains a form for adding new tasks.
- **`TodoList.tsx`**: Displays the list of tasks.
- **`TodoItem.tsx`**: Represents an individual task item with options to toggle completion and delete.

### **Hooks**
- **`useTodos.tsx`**: Custom React hook for managing tasks and interacting with the API.

### **Utilities**
- **`apiClient.ts`**: Factory function for making HTTP requests to the backend.

---

## **Technologies Used**
- **Frontend**: React, TypeScript, Vite
- **State Management**: React Hooks
- **Styling**: CSS
- **Backend**: Express (Node.js)
- **HTTP Client**: Axios

---

## **Author**
[Nivetha Sekar]

