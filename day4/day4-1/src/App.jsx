import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    }

    this.increase = this.increase.bind(this)
    this.decrease=this.decrease.bind(this)
  }

  increase() {
  this.setState({count:this.state.count+1})
  }
  decrease() {
    this.setState({ count: this.state.count-1})
  }

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <button onClick={this.decrease}>-</button>
        <p>
          {this.state.count}
        </p>
        <button onClick={this.increase}>+</button>
      </div>
    )
  }
}
