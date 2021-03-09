import React, { useState } from 'react';
import './scss/TodoCreate.scss';
import { MdAdd } from 'react-icons/md';
import classNames from 'classnames';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

function TodoCreate() {
    const [open, setOpen] = useState('close');
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () => setOpen(open === 'open' ? 'close' : 'open');
    const onChange = (e) => setValue(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false,
            },
        });
        setValue('');
        setOpen('close');
        nextId.current++;
    };

    return (
        <>
            {open === 'open' && (
                <form className="insert-form-positioner" onSubmit={onSubmit}>
                    <div className="insert-form">
                        <input placeholder="할 일을 입력 후 Enter를 누르세요" className="input" autoFocus onChange={onChange} value={value}></input>
                    </div>
                </form>
            )}
            <div className={classNames('circle-button', open)} onClick={onToggle}>
                <MdAdd />
            </div>
        </>
    );
}

export default React.memo(TodoCreate);
