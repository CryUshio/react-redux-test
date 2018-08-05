import React, {Component} from 'react';


export default class Clock extends Component {
    constructor (props){
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
          <div>
            <span>{this.state.date.toTimeString().slice(0,8)}</span>
          </div>
        );
    }
}