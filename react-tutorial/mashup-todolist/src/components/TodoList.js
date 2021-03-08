import './scss/TodoList.scss';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

function TodoList() {
    const todos = useTodoState();
    return (
        <div className="list">
            {todos.map((todo) => (
                <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
            ))}
        </div>
    );
}

export default TodoList;
