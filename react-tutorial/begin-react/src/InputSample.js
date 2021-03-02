import {useState} from 'react';

function InputSample(){
    const[inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const {name, nickname} = inputs;
    // const name = inputs.name;
    // const nickname = inputs.nickname;

    const style = {
        marginTop: 20
    }

    function onChange(e){
        const {name, value} = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    }

    function onReset(e){
        setInputs({
            name: '',
            nickname: ''
        });
    }

    return(
        <div style={style}>
            <input name="name" placeholder="이름" onChange={onChange} value={name}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;