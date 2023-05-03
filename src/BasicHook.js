import React, { useEffect, useState } from 'react'

const BasicHook = () => {
    const[name,setname] =useState('Dhanam')
    let initialcounter=0
    const[counter,setcounter]=useState(initialcounter)
    useEffect(()=>{
        document.title=`you clicked ${counter} times`
    })
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={()=>setname('Vidya')}>click me</button>
        <h1>Count is:{counter}</h1>
        <button onClick={()=>setcounter(counter+1)}>+</button>
        <button onClick={()=>setcounter(counter-1)}>-
        </button>
        <button onClick={()=>setcounter(initialcounter)}>Reset</button>
        </div>

  )
}

export default BasicHook