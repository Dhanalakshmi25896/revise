import React, { Component } from 'react'

export default class Basicstate extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Dhana',
         address: 'hyd'
      }
    }
    changeData=()=>{
        this.setState({
            name:'Arivu'
        })
    }
  render() {
    return (
      <div>Welcome to {this.state.name} and {this.state.address}
      <button onClick={this.changeData}> clickme
        </button></div>
    )
  }
}
