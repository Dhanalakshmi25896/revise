import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Dhana",
         Address:"Hyd"
         
      }
      console.log("this is Constructor");
    }
    static getDerivedStateFromProps(){
        console.log("this is getDrivedState method");
        return null;
    }
  /*  componentDidMount(){
        console.log('This is Didmount');
        
    } */
    shouldComponentUpdate(){
        console.log("this is Should component method");
        return true;
    }
    changedata =()=>{
        this.setState({
            name:'Arivu'
        })
    }
    getSnapshotBeforeUpdate(PresProps,preState){
        document.getElementById('oldvalue').innerHTML='This is old value is' + preState.name;
        return null;
    }
    componentDidUpdate(){
        document.getElementById('Newvalue').innerHTML='This is new value is' + this.state.name;
    }
  render() {
console.log("this is render");
    return (
      <div><h1>LifeCycle by {this.state.name}</h1>
      <button onClick={this.changedata}>Click</button>
      <div id="oldvalue"></div>
      <br/>
      <div id="Newvalue"></div>
      </div>
    )
  }
}
