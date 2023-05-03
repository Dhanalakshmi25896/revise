import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Aboutus from '../Assignment/Header/Aboutus'
import Gallery from '../Assignment/Header/Gallery'
import Contactus from './Contactus'
import Course from '../Assignment/Header/Course'
import Home from './Home'
import Login from './Login'
import Latestnewoper from '../Lnews/Latestnewoper'
import Latestnews from '../Lnews/Latestnews'
import AdminDashboard from './AdminDashboard'
import Nopage from '../Nopage'
import Userfetch from '../Lnews/Userfetch'
import Parentcomp from '../Parentcomp'
import Services from './Services'
import ContextHook from './ContextHook'
const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Parentcomp />}></Route>
            <Route path="/aboutus" element={<Aboutus />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/contactus" element={<Contactus />}></Route>
            <Route path="/course" element={<Course />}></Route>
            <Route path='/login' element={<Login />}></Route>
           <Route path="/services" element={<Services/>}> </Route>     
           <Route path="/services/:id" element={<Services/>}> </Route>        
            <Route path='/admindashboard' element={<AdminDashboard />} >
                 <Route path="" element={<Latestnews />} />
                <Route path="latestnewsoper" element={<Latestnewoper />} />
                <Route path="userfetch" element={<Userfetch />} />
            </Route>
            <Route path="*" element={<Nopage />} />
            <Route path='/contexthook' element={<ContextHook />} />
        </Routes>
    </div>
  )
}

export default Routing