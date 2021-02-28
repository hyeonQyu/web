import {useRef} from 'react';
import './App.css';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'one',
      email: 'one@test.com',
    },
    {
      id: 2,
      username: 'two',
      email: 'two@test.com',
    },
    {
      id: 3,
      username: 'three',
      email: 'three@test.com',
    }
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    nextId.current++;
  }

  return (
    <UserList users={users}/>
  );
}

export default App;
