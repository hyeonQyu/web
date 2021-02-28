function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList() {
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

    return (
        <div>
            {
                users.map(
                    user => <User user={user} key={user.id}/>
                )
            }
        </div>
    );
}

export default UserList;