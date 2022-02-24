import { useCallback, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../store';
import Todo from '../components/Todo';

function Home(/*{ todos, addTodo }*/) {
    const todos = useSelector((state) => state);
    const dispatch = useDispatch();
    const addTodo = useCallback((text) => dispatch(actionCreators.addTodo(text)), [dispatch]);

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText('');
    };

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type={'text'} value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </ul>
        </>
    );
}

// function mapStateToProps(state, ownProps) {
//     return { todos: state };
// }
//
// function mapDispatchToProps(dispatch, ownProps) {
//     return {
//         addTodo: (text) => dispatch(actionCreators.addTodo(text)),
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
