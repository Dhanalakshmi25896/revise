import React, { createContext, useState, useContext } from 'react'
const UserContext=createContext();
const ContextHook = () => {
    const[name,setname]=useState('Dhana')
  return (
    <div>
        
     <UserContext.Provider value={name}>
         {name}
        <Component1/>
        ContextHook 
        </UserContext.Provider>  
    </div>
  )
}

export default ContextHook
const Component1 = () => {
     return (
    <div>Component1
        <Component2  />
    </div>
  )
}
const Component2 = () => {
    return (
   <div>Component2
    <Component3/>
   </div>
 )
}
const Component3 = () => {
    const name= useContext(UserContext)
    return (
   <div>Component3 {name}</div>
 )
}