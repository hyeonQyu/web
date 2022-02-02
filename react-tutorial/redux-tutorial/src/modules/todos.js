const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextId = 1;
export const addTodo = (text) => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text,
    },
});
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id,
});

const initialState = [];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.todo];

        case TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, done: !todo.done };
                }
                return todo;
            });

        default:
            return state;
    }
}
