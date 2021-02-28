import {useRef, useState} from 'react';
import './App.css';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);
    // setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
    })
    nextId.current++;
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;
