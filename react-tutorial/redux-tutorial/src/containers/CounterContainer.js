import React from 'react';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer({ number, diff, onIncrease, onDecrease, onSetDiff }) {
    return <Counter number={number} diff={diff} onIncrease={onIncrease} onDecrease={onDecrease} onSetDiff={onSetDiff} />;
}

const mapStateToProps = (state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
});

/** bindActionCreators 사용 **/
// const mapDispatchToProps = (dispatch) =>
//     bindActionCreators(
//         {
//             onIncrease: increase,
//             onDecrease: decrease,
//             onSetDiff: setDiff,
//         },
//         dispatch,
//     );

/** mapDispatchToProps가 함수가 아니라 객체라면
    bindActionCreators가 자동으로 이루어짐 **/
const mapDispatchToProps = {
    onIncrease: increase,
    onDecrease: decrease,
    onSetDiff: setDiff,
};

/** 기본 사용법 **/
// const mapDispatchToProps = (dispatch) => ({
//     onIncrease: () => dispatch(increase()),
//     onDecrease: () => dispatch(decrease()),
//     onSetDiff: (diff) => dispatch(setDiff(diff)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
