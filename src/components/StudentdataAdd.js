import axios from 'axios'
import React, { Component } from 'react'

export default class StudentdataAdd extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id:'',
         name:'',
         Address:''
      }
    }
    changeHandler=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
    }
    submitHandler=(e)=>{
        e.preventDefault();
        const {id,name,Address} =this.state
        
        axios.post('http://localhost:4001/Students',{id,name,Address})
        .then(res=>{
            document.getElementById('msg').innerHTML="data is successfully inserted..."
        })
        .catch(err=>{
            document.getElementById('msg').innerHTML="data is error..."
        })
    }
  render() {
    const {id,name,Address} =this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <input type="text" name='id' placeholder='Id' value={id} onChange={this.changeHandler}/>
            <br/>
            <input type="text" name='name' placeholder='name' value={name} onChange={this.changeHandler}/>
            <br/>
            <input type="text" name='Address' placeholder='adress' value={Address} onChange={this.changeHandler} />
            <br/>
            <button type="Submit"> Add </button>
           <div id='msg'></div>
        </form>
      </div>
    )
  }
}
