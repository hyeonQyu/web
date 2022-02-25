import { connect, useDispatch } from 'react-redux';
import { actionCreators } from '../store';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';

function Todo({ text, id /*, deleteTodo*/ }) {
    const dispatch = useDispatch();
    const deleteTodo = useCallback(() => dispatch(actionCreators.deleteTodo(id)), [dispatch, id]);

    return (
        <li>
            <Link to={`/${id}`}>{text}</Link>
            <button onClick={deleteTodo}>DEL</button>
        </li>
    );
}

// function mapDispatchToProps(dispatch, ownProps) {
//     return {
//         deleteTodo: () => dispatch(actionCreators.deleteTodo(ownProps.id)),
//     };
// }

// export default connect(null, mapDispatchToProps)(Todo);
export default Todo;
