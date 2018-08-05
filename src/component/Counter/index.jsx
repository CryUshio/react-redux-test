import React, { Component } from 'react';
import { actionTypes } from '@/redux/actions/counter';
import { connect } from 'react-redux';

@connect(
    (state) => ({
        counter: state.counter
    }),
    (dispatch) => ({
        onIncrement: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrement: () => dispatch({ type: actionTypes.DECREMENT }),
        onReset: () => dispatch({ type: actionTypes.RESET }),
    }) 
)
export default class Counter extends Component {
    render() {
        const { counter, onIncrement, onDecrement, onReset } = this.props;
        return (
            <div>
                <div>当前计数为{counter.count}</div>
                <button onClick={onIncrement}>自增
                </button>
                <button onClick={onDecrement}>自减
                </button>
                <button onClick={onReset}>重置
                </button>
            </div>
        )
    }    
}