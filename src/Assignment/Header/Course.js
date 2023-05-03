import React from 'react'
import path1 from '../../Imagess/adwords.webp'
import path2 from '../../Imagess/dg.webp'
import path3 from '../../Imagess/Angularjs.webp'
import path4 from '../../Imagess/django course.webp'
import path5 from '../../Imagess/full-stack-dev.webp'
import path6 from '../../Imagess/graphics-design.webp'
import '../../Assignment/Assignmentstyle.css' 
import path7 from '../../Imagess/nodejs.webp'
import path8 from '../../Imagess/seo.webp'
import styles from '../../Commonstyle.module.css'
const Course = () => {
  return (
    <div className='container course'>
        <h1 className={styles.h1}>Course</h1>
        <div className='row'>
            <div className='col-md-4'>
                <div className='card shadow mb-2'>
                <img src={path1}/>
                <div className='body text-center'>
                <h3>Google Adwords</h3>
                </div>
                </div>
            </div>
            <div className='col-md-4'>
            <div className='card shadow mb-2'>
                <img src={path2}/>
                <div className='body text-center'>
                <h3>Digital Marketing</h3>
                </div>
                </div>
            </div>
            <div className='col-md-4'>
            <div className='card shadow'>

                <img src={path3}/>
                <div className='body text-center'>
                <h3>Angularjs</h3>
                </div>
            </div> 
            </div> </div>
            <div className='row'>
            <div className='col-md-4'>
            <div className='card shadow mb-2'>
                <img src={path4}/>
                <div className='body text-center'>
                <h3>django</h3>
            </div> </div> </div>
            <div className='col-md-4'>
            <div className='card shadow mb-2'>
                <img src={path5}/>
                <div className='body text-center'>
                <h3>Fullstack Development</h3>
            </div> </div> </div>
            <div className='col-md-4'>
            <div className='card shadow'>
                <img src={path6}/>
                <div className='body text-center'>
                <h3>Graphic Design</h3>
            </div> </div> </div> </div>
            <div className='row'>
            <div className='col-md-4'>
            <div className='card shadow'>
                <img src={path7}/>
                <div className='body text-center'>
                <h3>Node Js</h3>
            </div></div></div>
            <div className='col-md-4'>
            <div className='card shadow'>
                <img src={path8}/>
                <div className='body text-center'>
                <h3>SEO</h3>
            </div>
            </div>
            </div>
            </div>
               </div>
  )
}

export default Course