import './App.css';
import useTabs from './hooks/useTabs';
import useInput from './hooks/useInput';
import useTitle from './hooks/useTitle';
import useClick from './hooks/useClick';
import useConfirm from './hooks/useConfirm';

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
    const title = useClick(() => {
        console.log('hello');
    });
    const confirmDelete = useConfirm(
        'Are you sure',
        () => {
            console.log('deleting');
        },
        () => {
            console.log('abort');
        },
    );

    return (
        <div className="App">
            <h1 ref={title}>hello</h1>
            <input placeholder={'name'} {...name} />
            <br />
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)}>{section.tab}</button>
            ))}
            <div>{currentItem.content}</div>
            <button onClick={confirmDelete}>delete the world</button>
        </div>
    );
}

export default App;
