import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Userdatahook = () => {
    const[data,setdata]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:4002/Embloyee')
        .then(res=>{
            setdata(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })
  return (
    <div>
       <table>
          <thead>
              <tr>
              <th>Id</th>
              <th>Name</th>
              <th>position</th>
              </tr>
              </thead>
              <tbody>                  
                      {
                          data.map((emb)=>
                          {
                             return( 
                              <tr>
                              <td>{emb.id}</td>
                              <td>{emb.name}</td>
                              <td>{emb.position}</td>
                              </tr>
                             )
                          })
                      }
                  
              </tbody>
              </table>
    </div>
  )
}

export default Userdatahook