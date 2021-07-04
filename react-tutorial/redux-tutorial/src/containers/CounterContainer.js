import React from 'react';
import Counter from '../components/Counter';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer() {
    // useSelector는 상태를 조회하는 hook
    const { number, diff } = useSelector(
        (state) => ({
            number: state.counter.number,
            diff: state.counter.diff,
        }),
        // 객체 안에 있는 값 얕은 비교
        shallowEqual,
    );

    // action을 dispatch하는 hook
    const dispatch = useDispatch();
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = (diff) => dispatch(setDiff(diff));

    return <Counter number={number} diff={diff} onIncrease={onIncrease} onDecrease={onDecrease} onSetDiff={onSetDiff} />;
}

export default CounterContainer;
