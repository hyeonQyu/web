import { useState } from 'react';

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
        let willUpdate = true;
        if (typeof validator === 'function') {
            willUpdate = validator(e.target.value);
        }
        willUpdate && setValue(e.target.value);
    };
    return { value, onChange };
};

export default useInput;
