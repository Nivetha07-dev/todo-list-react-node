import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useTodos } from './hooks/useTodos';
import { manageUser } from './hooks/manageUser';

import './styles/index.css';

const App: React.FC = () => {
  const { user, handleLogin, handleLogout } = manageUser();
  const { todos, addTodo, toggleComplete, deleteTodo } = useTodos(user);

  return (
    <GoogleOAuthProvider clientId="265227537562-cm9m20ohvf1ci9atpknn4q2b8hmk2qdv.apps.googleusercontent.com">
    <div className="app">
      <Header />
      
      { !user ? (
          <nav>
            <GoogleLogin onSuccess={handleLogin} onError={() => console.log("Login Failed")} />
          </nav>
        ) : 
        (
          <div>
            <nav>
              <h4>Hi, {user.name}</h4>
              <button onClick={handleLogout}>Logout</button>
            </nav>
            <main>
            <section>
              <AddTodo addTodo={addTodo} />
              <TodoList
                todos={todos}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            </section>
            </main>
          </div>
         )
      }
    </div>
    </GoogleOAuthProvider>
  );
};

export default App;

