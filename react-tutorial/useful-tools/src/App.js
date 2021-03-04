import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState(0);
    useEffect(() => {
        console.log(value);
    }, [value]);
    return (
        <div>
            <div>adsfklj</div>
        </div>
    );
}

export default App;
