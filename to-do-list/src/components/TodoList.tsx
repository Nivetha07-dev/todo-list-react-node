import TodoItem from './TodoItem';
import styles from '../styles/TodoList.module.css';

export interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number, completed: boolean) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo }) => (
  <ul className={styles.todoList}>
    {todos.map((todo) => (
      <TodoItem key={todo.id} {...todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    ))}
  </ul>
);

export default TodoList;
