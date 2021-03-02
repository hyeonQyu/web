//import {useState, useCallback} from 'react';
import {useReducer, useCallback} from 'react';

function reducer(state, action){
    switch(action.type){
        case 'CHANGE_INPUTS':
            return {
                ...state,
                [action.name]: action.value,
            };
        case 'RESET_INPUTS':
            // return Object.keys(state).reduce((acc, current) => {
            //     acc[current] = '';
            //     return acc;
            // }, {});
            const obj = {};
            const arr = Object.keys(state);
            for(const name of arr){
                obj[name] = '';
            }
            return obj;
        default:
            return state;
    }
}

function useInputs(initialForm){
    // const [form, setForm] = useState(initialForm);
    const [form, dispatch] = useReducer(reducer, initialForm);
    
    const onChange = useCallback(e => {
        const {name, value} = e.target;
        dispatch({
            type: 'CHANGE_INPUTS',
            name,
            value,
        });
    }, []);

    const reset = useCallback(() => {
        dispatch({
            type: 'RESET_INPUTS',
        });
    });

    return [form, onChange, reset];
}

export default useInputs;