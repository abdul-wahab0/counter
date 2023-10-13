import React, { Component } from 'react'

export default class Counter extends Component {
    state={
        counter:0,
    }
    inc = () =>{
        this.setState({counter:this.state.counter + 1})
    }
    dec = () =>{
        this.setState({counter:this.state.counter - 1})
    }
    res = () =>{
        this.setState({counter:this.state.counter = 0})
    }
  render() {

    return (
      <div className='main'>
        <h1 className='h1'>Counter</h1>
        <h1 className='count'>{this.state.counter}</h1>
      <button className='btn'style={{backgroundColor:'red',color:'white'}} onClick={this.inc}>Inc</button>
      <button className='btn' onClick={this.res}>Res</button>
      <button className='btn'style={{backgroundColor:'blue',color:'white'}} onClick={this.dec}>Dec</button>


      </div>
    )
  }
}
