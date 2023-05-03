import axios from 'axios'
import React, { Component } from 'react'

export default class StudentData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Student:[]
      }
    }
    componentDidMount(){
        axios.get('http://localhost:4000/Students')
        .then(res => {
            this.setState({
                Student:res.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
  render() {
    return (
        <div><table>
          <thead>
              <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Address</th>
              </tr>
              </thead>
              <tbody>
                  
                      {
                          this.state.post.map((data)=>{
                             return( 
                              <tr>
                              <td>{data.id}</td>
                              <td>{data.name}</td>
                              <td>{data.Address}</td>
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
