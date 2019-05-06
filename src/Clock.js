import React, { Component } from "react";

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};  //  new Date() : JavaScript Date instance
      console.log('constructor ')
    }
  
    componentDidMount() {
      this.timerID = setInterval(   // setInterval() method :  repeatedly executes a code snippet, with a fixed time delay between each call
        () => this.tick(),          // this.tick() -> setState
        1000
      );
      console.log('componentDidMount')
    }
    
    componentDidUpdate() {
        console.log("componentDidUpdate : ","New Change", this.state.date.toLocaleTimeString())
    }
    
    componentWillUnmount() {
      clearInterval(this.timerID);
      console.log('componentWillUnmount : ', "kill it!!!!!!!!!!!!!!!!!")
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          {/* toLocaleTimeString() method ('en-US') */}
        </div>
      );
    }
  }

  export default Clock;