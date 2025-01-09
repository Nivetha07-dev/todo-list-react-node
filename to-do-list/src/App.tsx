import Header from './components/Header';
import TodoList from './components/ToDoList';
import AddTodo from './components/AddToDo';
import { useTodos } from './hooks/useToDos';

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

