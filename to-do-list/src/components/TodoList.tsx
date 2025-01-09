import TodoItem from './ToDoItem';
import styles from '../styles/TodoList.module.css';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
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
