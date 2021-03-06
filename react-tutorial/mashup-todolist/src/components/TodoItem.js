import './scss/TodoItem.scss';
import classNames from 'classnames';
import { MdDelete, MdDone } from 'react-icons/all';

function TodoItem({ done, text }) {
    const checkDone = done ? 'done' : '';

    return (
        <div className="item">
            <div className={`check-circle ${checkDone}`}>
                {done && <MdDone />}
            </div>
            <div className="text">{text}</div>
            <div className="remove">
                <MdDelete />
            </div>
        </div>
    );
}

TodoItem.defaultProps = {
    done: false,
};

export default TodoItem;
