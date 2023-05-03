import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Services = () => {
    const[data,setdata]=useState('')
    const {id}=useParams();
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments/'+id)
        .then(res=>{
            setdata(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    })
  return (
    <div>
        <h1>Services-{id}</h1>
         <table>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Body</th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                           {data.id}
                        </td>
                        <td>
                           {data.name}
                        </td>
                        <td>
                           {data.body}
                        </td>
                    </tr>
                </tbody>
  </table> 
                </div>
  )
}

export default Services