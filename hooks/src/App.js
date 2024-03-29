import './App.css';
import useTabs from './hooks/useTabs';
import useInput from './hooks/useInput';
import useTitle from './hooks/useTitle';
import useClick from './hooks/useClick';
import useConfirm from './hooks/useConfirm';
import usePreventLeave from './hooks/usePreventLeave';
import useFadeIn from './hooks/useFadeIn';
import useNetwork from './hooks/useNetwork';
import useScroll from './hooks/useScroll';
import useNotification from './hooks/useNotification';

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
    const { enablePrevent, disablePrevent } = usePreventLeave();
    const fadeIn = useFadeIn(4, 2);
    const online = useNetwork((online) => {
        console.log(online ? 'online' : 'offline');
    });
    const { y } = useScroll();
    const triggerNotification = useNotification('hi hih i', { body: 'hello hello!' });

    return (
        <div className="App" style={{ height: '1000vh' }}>
            <h1 ref={title}>hello</h1>
            <h2 {...fadeIn}>fade in</h2>
            <h2>{online ? 'online' : 'offline'}</h2>
            <h2 style={{ position: 'fixed', color: y > 500 ? 'red' : 'blue' }}>scroll</h2>
            <input placeholder={'name'} {...name} />
            <br />
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)}>{section.tab}</button>
            ))}
            <div>{currentItem.content}</div>
            <button onClick={confirmDelete}>delete the world</button>
            <button onClick={enablePrevent}>protect</button>
            <button onClick={disablePrevent}>unprotect</button>
            <button onClick={triggerNotification}>notification</button>
        </div>
    );
}

export default App;
