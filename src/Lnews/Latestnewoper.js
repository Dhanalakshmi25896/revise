import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Login from '../components/Login'

const Latestnewoper = () => {
    const[data,setdata]=useState([])
    const[id,setid]=useState('')
    const[lnews,setlnews]=useState('')
    useEffect(()=>{
        axios.get('http://localhost:4005/Lnews')
        .then(res=>{
            setdata(res.data)
        })
        .catch(err=>console.log(err))
    })
    const deletedata = (userid)=>{
        axios.delete('http://localhost:4005/Lnews/'+userid)
        .then(res=>{
            alert('deleted the data')
        })
        .catch(err=>console.log(err))
    }
    const Editdata =(userid)=>{
        axios.get('http://localhost:4005/Lnews/'+userid)
        .then(res=>{ 
           setid(res.data.id)
           setlnews(res.data.lnews)
        }
            
        )
           
        .catch(err=>console.log(err))
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:4005/Lnews/'+id,{id,lnews})
        .then(res=>{
            alert("successfully updated")
        })
        .catch(err=>{
            alert(err)
        })
    }
    
  return (
    <div className='container'>
        <div>
          <button className='btn btn-success'><NavLink to='/login' element={<Login/>}>Login</NavLink></button> 
        </div>
        <div className='container mt-2'>
 <form onSubmit={submitHandler}>
    <div className='row'>
        <div className='col-md-12'>
            <div className='form-group'>
           <input type="text" className='form-control' name='id' placeholder='Enter ID' value={id} 
           onChange={(e)=>setid(e.target.value) }/>
            </div>
            <div className='form-group'>
           <textarea type="text" name='lnews' className='form-control' placeholder='Enter Latest news' 
           value={lnews} onChange={(e)=>setlnews(e.target.value) } />
            </div>
            <div className='form-group'>
           <button type='btn btn-primary'>Submit</button>
            </div>
        </div>
    </div>
 </form>
        </div>
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
                        <td><button className='btn btn-primary' onClick={()=>deletedata(user.id)}>Delete</button></td>
                        <td>
                            <button className='btn btn-primary'onClick={()=>Editdata(user.id)}>Edit</button>
                            </td>
                    </tr>
                    )
                })
            }
        </tbody>
        </table></div>
        </div>
  )
}

export default Latestnewoper