import { createStore } from 'redux';
import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit';

// const ADD = 'ADD';
// const DELETE = 'DELETE';

// const addTodo = (text) => {
//     return {
//         type: ADD,
//         text,
//     };
// };
// const addTodo = createAction('ADD');

// const deleteTodo = (id) => {
//     return {
//         type: DELETE,
//         id: parseInt(id),
//     };
// };
// const deleteTodo = createAction('DELETE');

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         // case ADD:
//         case addTodo.type:
//             // return [{ text: action.text, id: Date.now() }, ...state];
//             return [{ text: action.payload, id: Date.now() }, ...state];
//         // case DELETE:
//         case deleteTodo.type:
//             // return state.filter((todo) => todo.id !== action.id);
//             return state.filter((todo) => todo.id !== action.payload);
//         default:
//             return state;
//     }
// };
// const reducer = createReducer([], {
//     [addTodo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() });
//     },
//     [deleteTodo]: (state, action) => {
//         return state.filter((todo) => todo.id !== action.payload);
//     },
// });
const todos = createSlice({
    name: 'todoReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
    },
});

// const store = createStore(reducer);
const store = configureStore({ reducer: todos.reducer });

// export const actionCreators = {
//     addTodo,
//     deleteTodo,
// };
export const { add, remove } = todos.actions;

export default store;
