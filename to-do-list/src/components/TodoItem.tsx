import styles from '../styles/TodoItem.module.css';

interface TodoItemProps {
  id: number;
  name: string;
  completed: boolean;
  toggleComplete: (id: number, completed: boolean) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, name, completed, toggleComplete, deleteTodo }) => (
  <li className={`${styles.todoItem} ${completed ? styles.completed : ''}`}>
    <input className={styles.checkbox} type='checkbox'  checked={completed} onChange={() => toggleComplete(id, completed)}/>
    <span>{name}</span>
    <button onClick={() => deleteTodo(id)}>Delete</button>
  </li>
);

export default TodoItem;
