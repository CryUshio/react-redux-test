import React, { Component } from 'react';
import Counter from '@/component/Counter';

export default class Home extends Component {
    render() {
        return (
            <div>
                This is Home...<br/>
                <Counter></Counter>
            </div>
        )
    }
}

