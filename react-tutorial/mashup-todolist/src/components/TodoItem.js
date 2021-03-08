import React from 'react';
import './scss/TodoItem.scss';
import classNames from 'classnames';
import { MdDelete, MdDone } from 'react-icons/all';
import { useTodoDispatch } from '../TodoContext';

function TodoItem({ id, done, text }) {
    const dispatch = useTodoDispatch();
    const onToggle = () =>
        dispatch({
            type: 'TOGGLE',
            id,
        });
    const onRemove = () => {
        dispatch({
            type: 'REMOVE',
            id,
        });
    };
    const checkDone = done ? 'done' : '';

    return (
        <div className="item">
            <div className={`check-circle ${checkDone}`} onClick={onToggle}>
                {done && <MdDone />}
            </div>
            <div className="text">{text}</div>
            <div className="remove" onClick={onRemove}>
                <MdDelete />
            </div>
        </div>
    );
}

TodoItem.defaultProps = {
    done: false,
};

export default React.memo(TodoItem);
