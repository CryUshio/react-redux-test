import React, { Component } from 'react';
import { Button } from 'antd';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';
import action from '@/redux/home/action';
import Counter from '@/component/Counter';

@connect(
    (state) => ({
        home: state.home
    }),
    (dispatch) => ({
        setImmer: () => dispatch(action.setImmer())
    })
)
export default class Home extends Component {

    @autobind
    handleSetImmer() {
        this.props.setImmer();
    }
    
    render() {
        const name = this.props.home.name;
        return <div>
            <p>{ name && `Hello, ${name}!` }</p>
            <Button type="primary" onClick={this.handleSetImmer}>Immer Test</Button>
            <Counter></Counter>
        </div>;
        
    }
}

