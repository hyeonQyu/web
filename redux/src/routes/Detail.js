import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Detail() {
    const { id } = useParams();
    const todo = useSelector((todos) => todos.find((todo) => todo.id === parseInt(id)));
    return <h1>{todo?.text}</h1>;
}

export default Detail;
