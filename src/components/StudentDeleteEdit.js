import axios from 'axios'
import React, { Component } from 'react'

export default class StudentDelete extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         stu:[],
         id:'',
         name:'',
         Address:''
      }
    }
    componentDidMount(){
        axios.get('http://localhost:4001/Students')
        .then(res =>{
            this.setState({
                stu:res.data
            })
        })
        .catch(err => console.log(err))
    }
    deletedata(userid){
// console.log(userid)
axios.delete('http://localhost:4001/Students/' + userid)
.then(res=>{
    alert('successfully deleted')
})
.catch(err =>{
    alert('while deleting something error')
})
    }
    Editdata(userid){
       axios.get('http://localhost:4001/Students/'+ userid)
       .then(res=>{
        this.setState({
            id:res.data.id,
            name:res.data.name,
            Address:res.data.Address
        })
       })
       .catch(err=>console.log(err))
    }
    changeHandler =(e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
       
    }
submitHandler=(e)=>{
    e.preventDefault();
    const {id,name,Address} =this.state
    axios.put('http://localhost:4001/Students/'+id, {id,name,Address})
    .then(res=>
        alert('successfull'))
    .catch(err=>console.log(err))
}
  render() {
    const {id,name,Address} =this.state
    return (
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

<div className="modal fade bd-example-modal-lg"  role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      ...
    </div>
  </div>
</div>
        <form onSubmit={this.submitHandler}>
            <input type="text" name='id' placeholder='Id' value={id} onChange={this.changeHandler}/>
            <br/>
            <input type="text" name='name' placeholder='name' value={name} onChange={this.changeHandler}/>
            <br/>
            <input type="text" name='Address' placeholder='adress' value={Address} onChange={this.changeHandler} />
            <br/>
            <button type="Submit"> Submit </button>
            </form>
<table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
        </tr>
    </thead>
    <tbody>
        {
            this.state.stu.map((data)=>{
              return(
                <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.Address}</td>
                    <td><button className='btn btn-danger' 
                    onClick={()=>{
                        this.deletedata(data.id)
                    }}>Delete</button></td>
                    <td><button className='btn btn-danger' 
                    onClick={()=>{
                        this.Editdata(data.id)
                    }}>Edit</button></td>
                </tr>
              )
            })
        }
    </tbody>
</table>
      </div>
    )
  }
}
