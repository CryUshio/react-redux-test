import React, { Component } from 'react';
import { Button, Progress } from 'antd';
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

    state = {
        percent: 0,
    }

    @autobind
    handleSetImmer() {
        this.props.setImmer();
    }
    
    render() {
        const name = this.props.home.name;
        return <div>
            <p>{ name && `Hello, ${name}!` }</p>
            <Progress type="circle" percent={this.state.percent} />
            <Button.Group>
                <Button onClick={this.decline} icon="minus" />
                <Button onClick={this.increase} icon="plus" />
            </Button.Group>
            <Button type="primary" onClick={this.handleSetImmer}>Immer Test</Button>
            <Counter></Counter>
        </div>;
        
    }

    @autobind
    increase() {
        let percent = this.state.percent + 10;
        if (percent > 100) {
            percent = 100;
        }
        this.setState({ percent });
    }
    
    @autobind
    decline() {
        let percent = this.state.percent - 10;
        if (percent < 0) {
            percent = 0;
        }
        this.setState({ percent });
    }
}

