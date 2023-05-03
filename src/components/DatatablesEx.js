import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'jquery/dist/jquery'
import $ from 'jquery'
const DatatablesEx = () => {
    const[data,setdata]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res=>{
            setdata(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
        setTimeout(()=>{
             $(function(){
                $('#table1').DataTable()
             })
        },1000)
    })
  return (
    <div className='container mt-4'>
        <table className='table table-bordered' id="table1">
            <thead>
                <tr>
               <th>ID</th>
               <th>NAME</th>
               <th>EMAIl</th>
               <th>Description</th>
               </tr>
            </thead>
            <tbody>
                {
                    data.map((data)=>{
                        return(
                            <tr key={data.id}>
                                <td>
                                    {data.id}
                                </td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.body}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default DatatablesEx