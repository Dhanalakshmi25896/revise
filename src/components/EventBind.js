import React, { Component } from 'react'

export default class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'Dhana'
    }
  }
  Changedata (name1){
    this.adddata({
      name:name1
    }

    )
  }
  render() {
    const styles ={
      color: 'black'
    }
    return (
      <div>
        <h1 className='text-primary'>{this.state.name}</h1>
    {/* <button onClick={this.Changedata}>clickme</button> */}
   {/*<button onClick={this.Changedata.bind(this)}>Change me</button> */}
   {/* <button onClick={()=>{this.Changedata()}}>Change me</button> */}
   <button onClick={()=>{this.Changedata("Arivu")}}>Change me</button>
   
      </div>
    )
  }
}

