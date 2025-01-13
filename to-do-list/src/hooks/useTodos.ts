import { useState, useEffect } from 'react';
import apiClient from '../utils/apiClient';
import { Todo } from '../components/TodoList'

// Create an API client with the base URL of the backend
const client = apiClient('http://localhost:3000');

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Fetch all tasks
  const fetchTodos = async () => {
    try {
      const response = await client.get('/tasks');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Add a new task
  const addTodo = async (text: string) => {
    try {
      const payload = {
        id: Date.now(),
        name: text,
        completed: false,
      }
      const response = await client.post('/tasks', payload);

      setTodos((prev) => [...prev, response.data]);

    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Toggle completion of a task
  const toggleComplete = async (id: number, completed: boolean) => {
    try {
      const response = await client.put(`/tasks/${id}`, { completed: !completed });
      const updatedTodo = response.data;
  
      // Update local state with the updated todo
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, completed: updatedTodo.completed } : todo
        )
      );
    } catch (error) {
      console.error('Error toggling task completion:', error);
    }
  };

  // Delete a task
  const deleteTodo = async (id: number) => {
    try {
      await client.delete(`/tasks/${id}`);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos();    
  }, []);

  return { todos, addTodo, toggleComplete, deleteTodo };
};
