import React, { Component } from 'react'
import axios from 'axios'
export default class BasicApi extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post: []
      }
    }
    componentDidMount(){
        axios.get('http://localhost:4000/Students')
        .then(res=>{
            this.setState({
                post:res.data
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
