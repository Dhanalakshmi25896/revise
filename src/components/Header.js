import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
import Aboutus from '../Assignment/Header/Aboutus'
import Course from '../Assignment/Header/Course'
import Contactus from './Contactus'
const Header = () => {
  return (
    <div>
    <div className='toplayer'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
  <ul><li> <a href=""><i class="fa-solid fa-phone"></i>+91 9876543210</a>
    </li>
    <li>
        <a href=''><i class="fa-solid fa-envelope"></i>infotech@gmail.com</a></li></ul>
            </div>
            <div className='col-md-6 text-right'>
                <ul>
                    <li><a href=''><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href=''><i class="fa-brands fa-youtube"></i></a></li>
                    <li><a href=''><i class="fa-brands fa-square-instagram"></i></a></li>
                    <li><a href=''><i class="fa-brands fa-linkedin-in"></i></a></li>
                </ul>                                  
            
            </div>
        </div>
    </div>
    </div>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
            <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <NavLink className="navbar-brand " to="/" >
        <img src="https://th.bing.com/th/id/OIP.Yx9ZVVdktIkSgmq3VCn48wHaHa?pid=ImgDet&w=474&h=474&rs=1"></img>
    </NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-md-end " id="navbarSupportedContent">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/aboutus">Aboutus</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/course">Course</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contactus">contact</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header