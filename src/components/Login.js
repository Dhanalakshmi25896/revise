import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import Latestnewoper from '../Lnews/Latestnewoper';
import AdminDashboard from './AdminDashboard';
const Login = () => {
    const[uname,setname]=useState('');
    const[pwd,setpwd]=useState('');
    const Navigate = useNavigate();
    const SubmitHandler =(e)=>{
   e.preventDefault();
   if((uname=="Admin") && (pwd=="123456")){
      Navigate('/admindashboard')
   }

   else{
    alert('Ivalid Username/password')
   }
    }
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 bg-warning'>
<ul>
    <li><a href='/'>Home</a></li>
<li>/Login</li></ul>
            </div>
        </div>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
        <form onSubmit={SubmitHandler}>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='form-group'>
                            <input type="text" name='umane' className='form-control' placeholder='Username'
                            value={uname} onChange={(e)=>setname(e.target.value)} />
                            <div id='nameid' className='errmsg'></div>
                                                      </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='form-group'>
                            <input type="password" name='pwd' className='form-control'  value={pwd} onChange={(e)=>setpwd(e.target.value)}
                            placeholder='....' />
                             
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='form-group'>
                            <input type="submit" className='btn btn-primary'></input>
                            </div>
                        </div>
                    </div>
                </form> </div>
                </div>
    </div>
    </div>
  )
}

export default Login