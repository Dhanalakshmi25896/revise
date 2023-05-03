import React, { useEffect, useMemo, useState } from 'react'
const UseMemoEx = () => {
    const[counter,setcounter]=useState(0);
    const[number,setnumber]=useState(5);
    const factorial=useMemo(()=>{
        return fact(number)
    },[number])
  return (
    <div>
        <h1>the count is{counter}</h1>
        <button onClick={()=>setcounter(counter+1)}>Click me +</button>
        <button onClick={()=>setcounter((counter<=0)? 0: counter-1)}>Click me -</button>
        <h2>factorial is {factorial}</h2>
        <button onClick={()=>setnumber(number+1)}>Click fact</button>
    </div>
  )
}

export default UseMemoEx

function fact(num){
    let res=1;
    for(let i=num;i>=num;i--)
    {
    res=res*i
    }
    return res;
}