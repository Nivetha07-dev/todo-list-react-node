import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useTodos } from './hooks/useTodos';

import './styles/index.css';

const App: React.FC = () => {
  const { todos, addTodo, toggleComplete, deleteTodo } = useTodos();
  
  return (
    <div className="app">
      <Header />
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      /> 
    </div>
  );
};

export default App;

