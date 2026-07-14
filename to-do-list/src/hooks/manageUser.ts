import { useState } from 'react';
import apiClient from '../utils/apiClient';
const client = apiClient('http://localhost:3000');
 
export interface User {
    _id: string;
    name: string; 
    email: string;
    role: string | "user";
}

export const manageUser = () => {
    
  const [user, setUser] = useState<User | null>(() => {
    // Load user from localStorage if available
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

    const handleLogin = async (credentialResponse: any) => {
        const { credential } = credentialResponse;
        try {
          // Send the token to the backend for validation and fetching tasks
          const response = await client.post('/auth/google', {
            idToken: credential,
          });
          console.log(` -- user data: ${JSON.stringify(response.data)}`)
          
          setUser(response.data.user);
          localStorage.setItem('user', JSON.stringify(response.data.user)); // Persist in localStorage

        //  setTasks(response.data.tasks); // Backend fetches tasks for the user
        } catch (error) {
          console.error("Authentication failed:", error);
        }
      };
    
      const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user'); // Remove user from localStorage
        
        // setTasks([]);
      };

    return { user, handleLogin, handleLogout };
}