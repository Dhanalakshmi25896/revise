import React, { useEffect, useState } from 'react'

const Userfetch = () => {
    const[data,setdata]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4005/Lnews')
        .then(res=>res.json())
        .then(data=>setdata(data))
    })
  return (
    <div className='container mt-3'>
        <table className='table table-bordered table-hover'>
        <thead>
            <th>ID</th>
            <th>LATEST NEWS</th>
        </thead>
        <tbody>
           {       
           data.map((user)=>{
                    return(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.lnews}</td>
                        
                    </tr>
                    )
                })
            }
        </tbody>
        </table></div>
  )
}

export default Userfetch