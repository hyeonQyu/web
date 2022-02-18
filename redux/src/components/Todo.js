import { connect } from 'react-redux';
import { actionCreators } from '../store';

function Todo({ text, deleteTodo }) {
    return (
        <li>
            {text} <button onClick={deleteTodo}>DEL</button>
        </li>
    );
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        deleteTodo: () => dispatch(actionCreators.deleteTodo(ownProps.id)),
    };
}

export default connect(null, mapDispatchToProps)(Todo);
