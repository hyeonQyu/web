import {useState} from 'react';

function InputSample(){
    const[text, setText] = useState('');

    const style = {
        marginTop: 20
    }

    function onChange(e){
        setText(e.target.value);
    }

    function onReset(e){
        setText('');
    }

    return(
        <div style={style}>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    );
}

export default InputSample;