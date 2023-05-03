import React from 'react'
import path1 from './images/sudi2.jpg';
import path2 from './images/Sudi1.jfif';
import path4 from './images/sudi4.jfif';
import path5 from './images/sudi5.jfif';
import 'bootstrap/dist/css/bootstrap.css';

import '../../Assignment/Assignmentstyle.css' 
const Gallery = () => {
  return (
    <div className='container gallery'>
        <h2 className='text-primary'>Gallery</h2>
       <div className='row'>
        <div className='col-md-3'>
<img src={path1} alt=''/>
     </div>
     <div className='col-md-3'>
     <img src={path5} alt=''/>
     </div>
     <div className='col-md-3'>
     <img src={path2} alt=''/> 
     </div>
     <div className='col-md-3'>
     <img src={path1} alt=''/>
     </div>
    </div>
    <div className='row'>
        <div className='col-md-3'>
<img src={path1} alt=''/>
     </div>
     <div className='col-md-3'>
     <img src={path5} alt=''/>
     </div>
     <div className='col-md-3'>
     <img src={path2} alt=''/> 
     </div>
     <div className='col-md-3'>
     <img src={path1} alt=''/>
     </div>
    </div>
    </div>
  )
}

export default Gallery