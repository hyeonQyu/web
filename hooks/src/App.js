import './App.css';
import useTabs from './hooks/useTabs';

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
    const { currentItem, changeItem } = useTabs(0, content);

    return (
        <div className="App">
            <h1>hello</h1>
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)}>{section.tab}</button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    );
}

export default App;
