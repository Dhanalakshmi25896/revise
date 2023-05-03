import axios from 'axios'
import React, { useState } from 'react'

const Latestnews = () => {
    const[lnews,setlnews]=useState('');
    const[id,setid] = useState('')
const submitHandler =(e) =>{
    e.preventDefault();
    axios.post('http://localhost:4005/Lnews/',{id,lnews})
    .then(res=>{
        alert('successfully added')
        
    })
    
    .catch(err=>{
        console.log(err)
    })
    
}
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <form onSubmit={submitHandler}>
                        <div className='form-group'>
                          <input type="text" className='form-control' value={id} onChange={(e)=> setid(e.target.value) }/>
                        </div>
                        <div className='form-group'>
                           <textarea name='news' className='form-control' value={lnews} onChange={(e)=> setlnews(e.target.value)
                        } />
                        </div>
                        <div className='form-group'>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Latestnews