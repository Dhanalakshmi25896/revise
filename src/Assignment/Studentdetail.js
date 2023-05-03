import React, { Component } from 'react'

export default class Studentdetail extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        id:100,
         name:'Suma',
               }
    }
    updatedata =()=>{
        this.setState(
            {
                id:102
            }
        )
    }
  render() {
    return (
      <div><h1>Studentdetail {this.state.id}</h1>
      <button onClick={this.updatedata}>Update</button>

      </div>
    )
  }
}
