import './scss/TodoList.scss';
import TodoItem from './TodoItem';

function TodoList() {
    return (
        <div className="list">
            <TodoItem text="프로젝트 생성하기" done={true} />
            <TodoItem text="컴포넌트 생성하기" done={false} />
            <TodoItem text="기능구현 하기" done={false} />
        </div>
    );
}

export default TodoList;
