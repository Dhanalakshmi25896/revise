import React, { useRef } from 'react'

const UseRefEx = () => {
   const counter=useRef();
const changedata =()=>{
    counter.current.value++;
    counter.current.focus()
}
/*  const videoRef=useRef();
const playbutton =()=>{
    videoRef.current.play();
}
const pausebutton =()=>{
    videoRef.current.pause();
} */
  return (
    <div>
       <input type="text" name="counter" ref={counter}/>
       <button onClick={changedata}>+</button>
     {/* <div  height="50%" width="300px" value={videoRef}>
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" 
 ></iframe>
 </div>
 <button onClick={playbutton}>play</button>
  <button onClick={pausebutton}>pause</button> */}
    </div>
  )
}

export default UseRefEx