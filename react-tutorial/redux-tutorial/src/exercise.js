import { createStore } from 'redux';

const initialState = {
    counter: 0,
    text: '',
    list: [],
};

/** 액션 타입 **/
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

/** 액션 함수 **/
const increase = () => ({
    type: INCREASE,
});

const decrease = () => ({
    type: DECREASE,
});

const changeText = (text) => ({
    type: CHANGE_TEXT,
    text,
});

const addToList = (item) => ({
    type: ADD_TO_LIST,
    item,
});

function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1,
            };

        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1,
            };

        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text,
            };

        case ADD_TO_LIST:
            return {
                ...state,
                list: [...state.list, action.item],
            };

        default:
            return state;
    }
}

const store = createStore(reducer);
console.log(store.getState());

// Action이 dispatch 될때마다 호출(subscribe에 의해)
const listener = () => {
    const state = store.getState();
    console.log(state);
};

// 구독 시작
const unsubscribe = store.subscribe(listener);
// 구독 해제
// unsubscribe();

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '와우' }));

window.store = store;
