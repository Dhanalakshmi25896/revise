import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, NavLink } from 'react-router-dom'
import $ from 'jquery'
const Parentcomp = () => {
    const[data,setdata]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res=>{
            setdata(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    })
      return (
    <div>
      
        {
            data.map((data)=>{
                return(
                <h3><NavLink to={`services/${data.id}`}>{data.name}</NavLink></h3>
                )
            })
        }
    </div>
  )
}

export default Parentcomp