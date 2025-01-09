import styles from '../styles/TodoItem.module.css';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, toggleComplete, deleteTodo }) => (
  <li className={`${styles.todoItem} ${completed ? styles.completed : ''}`}>
    <input className={styles.checkbox} type='checkbox'  checked={completed} onChange={() => toggleComplete(id)}/>
    <span>{text}</span>
    <button onClick={() => deleteTodo(id)}>Delete</button>
  </li>
);

export default TodoItem;
