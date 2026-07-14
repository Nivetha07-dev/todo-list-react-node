import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
    id: string; // Unique identifier from OAuth provider
    name: string; // Display name
    email: string; // User email (if provided by OAuth)
    avatar?: string; // Profile picture URL (optional)
}

const Auth: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch authenticated user info when the component loads
    axios
      .get('/auth/user', { withCredentials: true })
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  const login = () => {
    // Redirect to the OAuth login route
    window.location.href = "http://localhost:3000/auth/google";
  };

  const logout = async () => {
    setLoading(true);
    try {
      await axios.get('/logout', { withCredentials: true });
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      { 
    //   user !== null ? (
    //     <>
    //       <h2>Welcome, {user.name}!</h2>
    //       {user.avatar && (
    //         <img
    //           src={user.avatar}
    //           alt="User Avatar"
    //           style={{ borderRadius: '50%', width: '100px', height: '100px' }}
    //         />
    //       )}
    //       <p>{user.email}</p>
    //       <button onClick={logout} disabled={loading}>
    //         {loading ? 'Logging out...' : 'Logout'}
    //       </button>
    //     </>
    //   ) : (
        <>
          <h2>Welcome to the To-Do App</h2>
          <button onClick={login}>Login with Google</button>
        </>
    //  )
      }
    </div>
  );
};

export default Auth;
