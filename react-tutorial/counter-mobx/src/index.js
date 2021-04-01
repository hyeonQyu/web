import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react';
import CounterStore from './store/CounterStore';

ReactDOM.render(
    // App에 있는 모든 컴포넌트들이 CounterStore를 전역적으로 사용할 수 있음
    <Provider counterStore={CounterStore}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

reportWebVitals();
