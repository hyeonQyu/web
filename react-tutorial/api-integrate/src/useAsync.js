import { useReducer, useEffect, useCallback } from 'react';

export function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                users: null,
                error: null,
            };

        case 'SUCCESS':
            return {
                loading: false,
                users: action.users,
                error: null,
            };

        case 'ERROR':
            return {
                loading: false,
                users: null,
                error: action.error,
            };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function useAsync(callback, deps = [], skip = false) {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        users: null,
        error: null,
    });

    const fetchUsers = useCallback(async () => {
        dispatch({ type: 'LOADING' });
        try {
            const data = await callback();
            dispatch({ type: 'SUCCESS', users: data });
        } catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
    }, [callback]);

    useEffect(() => {
        if (skip) {
            return;
        }
        fetchUsers();
    }, deps);

    return [state, fetchUsers];
}

export default useAsync;
