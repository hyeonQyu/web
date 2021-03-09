import React, { createContext, useReducer, useContext } from 'react';
import * as api from './api';
import createAsyncDispatcher, { createAsyncHandler, initialAsyncState } from './asyncActionUtils';

const initialState = {
    users: initialAsyncState,
    user: initialAsyncState,
};

const usersHandler = createAsyncHandler('GET_USERS', 'users');
const userHandler = createAsyncHandler('GET_USER', 'user');

// GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR
// GET_USER, GET_USER_SUCCESS, GET_USER_ERROR
function usersReducer(state, action) {
    const type = action.type;
    if (type.includes('GET_USERS')) {
        return usersHandler(state, action);
    } else if (type.includes('GET_USER')) {
        return userHandler(state, action);
    } else {
        throw new Error('Unhandled action type', action.type);
    }
}

const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

export function UsersProvider({ children }) {
    const [state, dispatch] = useReducer(usersReducer, initialState);
    return (
        <UsersStateContext.Provider value={state}>
            <UsersDispatchContext.Provider value={dispatch}>{children}</UsersDispatchContext.Provider>
        </UsersStateContext.Provider>
    );
}

export function useUsersState() {
    const state = useContext(UsersStateContext);
    if (!state) {
        throw new Error('Cannot find UserProvider');
    }
    return state;
}

export function useUsersDispatch() {
    const dispatch = useContext(UsersDispatchContext);
    if (!dispatch) {
        throw new Error('Cannot find UserProvider');
    }
    return dispatch;
}

export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
export const getUser = createAsyncDispatcher('GET_USER', api.getUser);
