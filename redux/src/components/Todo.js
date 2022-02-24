import { connect, useDispatch } from 'react-redux';
import { actionCreators } from '../store';
import { useCallback } from 'react';

function Todo({ text, id /*, deleteTodo*/ }) {
    const dispatch = useDispatch();
    const deleteTodo = useCallback(() => dispatch(actionCreators.deleteTodo(id)), [dispatch, id]);

    return (
        <li>
            {text} <button onClick={deleteTodo}>DEL</button>
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
