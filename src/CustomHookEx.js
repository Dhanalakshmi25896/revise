import React from 'react'

const CustomHookEx = (url) => {
    const[data,setdata]=useState([])
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setdata(data))
    })
  return data
}

export default CustomHookEx