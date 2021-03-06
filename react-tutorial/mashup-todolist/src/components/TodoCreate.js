import { useState } from 'react';
import './scss/TodoCreate.scss';
import { MdAdd } from 'react-icons/md';
import classNames from 'classnames';

function TodoCreate() {
    const [open, setOpen] = useState('close');
    const onToggle = () => setOpen(open === 'open' ? 'close' : 'open');

    return (
        <>
            {open === 'open' && (
                <div className="insert-form-positioner">
                    <div className="insert-form">
                        <input
                            placeholder="할 일을 입력 후 Enter를 누르세요"
                            className="input"
                            autoFocus
                        ></input>
                    </div>
                </div>
            )}
            <div
                className={classNames('circle-button', open)}
                onClick={onToggle}
            >
                <MdAdd />
            </div>
        </>
    );
}

export default TodoCreate;
