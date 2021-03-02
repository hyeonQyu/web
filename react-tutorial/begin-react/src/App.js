import {useRef, useState, useMemo, useCallback} from 'react';
import './App.css';
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const {username, email} = inputs;
  const onChange = useCallback(e => {
    console.log('onChange');

    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'one',
      email: 'one@test.com',
      active: true,
    },
    {
      id: 2,
      username: 'two',
      email: 'two@test.com',
      active: false,
    },
    {
      id: 3,
      username: 'three',
      email: 'three@test.com',
      active: false,
    }
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    console.log('onCreate');

    const user = {
      id: nextId.current,
      username,
      email,
    };
    //setUsers(users => [...users, user]);
     setUsers(users => users.concat(user));

    setInputs({
      username: '',
      email: '',
    })
    nextId.current++;
  }, [username, email]);

  const onRemove = useCallback(id => {
    console.log('onRemove');

    setUsers(users => users.filter(user => user.id !== id));
  }, []);

  const onToggle = useCallback(id => {
    console.log('onToggle');

    setUsers(users => users.map(user => {
      return user.id === id ? {...user, active: !user.active} : user;
    }));
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
