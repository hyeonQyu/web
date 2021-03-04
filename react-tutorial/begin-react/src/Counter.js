//import {useState} from 'react';
import {Component} from 'react';

class Counter extends Component{

    constructor(props){
        super(props);

        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);

        this.state = {
            counter: 0,
            fixed: 1,
            updateMe: {
                toggleMe: false,
                dontChangeMe: 1
            }
        };
    }

    handleIncrease(){
        this.setState({
            counter: this.state.counter + 1
        });
    }

    handleDecrease(){
        this.setState({
            counter: this.state.counter - 1
        })
    }

    handleToggle(){
        this.setState({
            updateMe: {
                ...this.state.updateMe,
                toggleMe: !this.state.updateMe.toggleMe

            }
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값 {this.state.fixed}</p>
            </div>
        );
    }
}

// function reducer(state, action){
//     switch(action.type){
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             throw new Error('Unhandled action');
//     }
// }

// function Counter(){
//     const [number, dispatch] = useReducer(reducer, 0);
//     // const [number, setNumber] = useState(0);
//     // const numbers = useState(0);
//     // const number = numbers[0];
//     // const setNumber = numbers[1];

//     function onIncrease(){
//         // setNumber(prevNumber => prevNumber + 1);
//         dispatch({
//             type: 'INCREMENT'
//         });
//     }

//     function onDecrease(){
//         // setNumber(number - 1);
//         dispatch({
//             type: 'DECREMENT'
//         });
//     }

//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     )
// }

export default Counter;