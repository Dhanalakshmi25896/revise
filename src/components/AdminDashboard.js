import React from 'react'
import Latestnews from '../Lnews/Latestnews'
import { NavLink, Outlet } from 'react-router-dom'
import './style.css'
import Login from './Login'
const AdminDashboard = (item) => {
  return (
    <div className='container admin'>
        <div className='my-3'>
              <h3>Login with {item.uname} </h3>
        </div>
        <div className='row'>
            <div className="col-md-4">
             <ul>
                <li><NavLink to="/admindashboard">Latest News</NavLink></li>
                <li><NavLink to="latestnewsoper">Latest Edit and Delete</NavLink></li>
                <li><NavLink to="userfetch">userfetching</NavLink></li>
             </ul>
            </div>
            <div className="col-md-8">
                <Outlet />
                </div>
        </div>
    </div>
  )
}

export default AdminDashboard