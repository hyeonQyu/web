import './App.css';
import useInput from './hooks/useInput';

function App() {
    const maxLength = (value) => value.length <= 10;
    const name = useInput('Mr.', maxLength);

    return (
        <div className="App">
            <h1>hello</h1>
            <input placeholder={'name'} {...name} />
        </div>
    );
}

export default App;
