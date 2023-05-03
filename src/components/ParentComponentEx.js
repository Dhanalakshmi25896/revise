import React, { Component } from 'react'
import NormalcomponentEx from './NormalcomponentEx'
import PurecomponentEx from './PurecomponentEx'

export default class ParentComponentEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Dhana'
      }
    }
    componentDidMount(){
        setInterval(()=>{
    this.setState({
        name:'vidya'
    })
        },2000)
    }
  render() {
    console.log("parentcomponent");
    return (
      <div>
        <h1>The changes {this.state.name}</h1>
        <NormalcomponentEx />
        <PurecomponentEx />
      </div>
    )
  }
}
