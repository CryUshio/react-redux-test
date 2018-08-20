import React, { PureComponent } from 'react';
import { Button } from 'antd';
import './index.less';
export default class Page1 extends PureComponent {
    state = {
        drag: null
    }

    handleClick = (function() {
        const step = gener();
        console.log('handle');
        return function(){
            console.log('click');
            step.next();
        }
        function *gener() {
            yield document.querySelectorAll('.box.box-blue').forEach((ele) => {
                ele.className = 'box box-pink'
            });
            yield document.querySelectorAll('.box.box-normal').forEach((ele) => { 
                ele.className = 'box box-special';
            });
            yield document.querySelectorAll('.box.box-special').forEach((ele) => {
                ele.className += ' box-high'
            });
            return;
        }
    })()

    render() {
        return (
            <div ref={(r) => this.$root = r}>
                <div>There is Page1</div>
                <Button onClick={() => this.handleClick()}>Run!</Button>
                <div className="box box-normal"></div>
                <div className="box box-blue"></div>
            </div>
        )
    }

    setBg(color) {
        this.state.drag.className = `box box-${color}`;
    }
}