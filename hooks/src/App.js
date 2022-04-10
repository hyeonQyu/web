import './App.css';
import useTabs from './hooks/useTabs';
import useInput from './hooks/useInput';
import useTitle from './hooks/useTitle';

const content = [
    {
        tab: 'section 1',
        content: 'section 1 content',
    },
    {
        tab: 'section 2',
        content: 'section 2 content',
    },
];

function App() {
    const maxLength = (value) => value.length <= 10;
    const name = useInput('Mr.', maxLength);
    const { currentItem, changeItem } = useTabs(0, content);
    const setTitle = useTitle('Loading..');
    setTimeout(() => setTitle('Home'), 5000);

    return (
        <div className="App">
            <h1>hello</h1>
            <input placeholder={'name'} {...name} />
            <br />
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)}>{section.tab}</button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    );
}

export default App;
