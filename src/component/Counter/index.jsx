import React, { Component, PureComponent } from 'react';
import action from '@/redux/counter/action';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

@connect(
    (state) => ({
        counter: state.counter
    }),
    (dispatch) => ({
        onIncrement: () => dispatch(action.increment()),
        onDecrement: () => dispatch(action.decrement()),
        onReset: () => dispatch(action.reset()),
    }) 
)
export default class Counter extends PureComponent {
    state = {
        value: ''
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    
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
                <input type="text" onChange={this.handleOnChange}/>
            </div>
        )
    }

    @autobind
    handleOnChange(e) {
        console.log(e.target.value);
        this.setState({ value: e.target.value });
    } 
}