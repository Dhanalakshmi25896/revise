import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Aboutus from '../Assignment/Header/Aboutus'
import Course from '../Assignment/Header/Course'
import Gallery from '../Assignment/Header/Gallery'
import banner from './images/Digital Marketing Training.webp'
import './style.css'
const Home = () => {
  const[data,setdata]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:4005/Lnews')
    .then(res=>{
        setdata(res.data)
    })
    .catch(err=>console.log(err))
})
  return (
    <main>
      <section>      
 <div className='container-fluid mt-5 p-0'>
<marquee className="bg-warning">
    {
        data.map((user)=>{
            return(
                <span>{user.lnews}</span>
            )
                    
        })
    }
</marquee>
</div> </section>
            <section className='banner'>
        <img src={banner} />
        </section> 
        <section>
         <div className='container'>
            <h2 className='pt-4'>Welcome to the Dhana page</h2>
            <p>ELearn Infotech is a Realtime Training Company offering Courses on varied IT 
                Technologies like Web Design & PHP with MySQL, Digital Marketing, Fullstack Development, Python, React JS, Node JS, UI/UX Designing & Development, Oracle Modules, Angularjs, SAP Modules, Cloud Computing, Graphic Designing etc. Established in 2016 ELearn Infotech has successfully Trained upwards of 25,000+ Students. ELearn Infotech offers Excellent Software courses with end to end support to the candidates. ELearn Infotech is a one stop shop for IT services & Training in Hyderabad, India.
             ELearn Infotech takes all the efforts to provide flexible and friendly software training 
             programs to all right from beginners to professionals who wish to learn new techniques and 
             current trends. We offer software courses training with Real Time Projects by Industry Experts.
             </p>
             
         </div>
         <div>
            <Aboutus />
         </div>
        </section>
        <section>
            <Gallery />
        </section>
        <section>
           <Course />
        </section>
    </main>
  )
}

export default Home