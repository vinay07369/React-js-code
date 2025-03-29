//! useref example

// 1. useref is used to persist the value.
// 2.And it is also used to communicate or access with DOM.

import React, { useRef, useState } from 'react'

const App = () => {

  let [count,setCount] = useState(0)

  let num1=0

  let num2=useRef(0)

  let increase=()=>{

    num2.current=num2.current+1;
    console.log(num2.current);

    num1=num1+100
    console.log(num1);

    setCount(count + 1)
    
  }

  let headingRef=useRef()

  let changecolor=()=>{

    console.log(headingRef.current)

    headingRef.current.style.color="red"
       
  }

  let videoref=useRef()

  let playvideo =()=>{

    console.log(videoref)

    videoref.current.play()
  }

  let stopvideo =()=>{

    videoref.current.pause()
  }
  return (
    <>

      <h2>number 1 is {num1}</h2>

      <h2>number 2 is {num2.current}</h2>

      <h3>count is {count}</h3>

      <button onClick={increase}>Increment</button>

      <h1 ref={headingRef}>I will change the color</h1>

      <button onClick={changecolor}>changecolor</button>

      <video src="https://www.w3schools.com/html/mov_bbb.mp4" ref={videoref}>My video</video>

      <button onClick={playvideo}>play</button>

      <button onClick={stopvideo}>pause</button>
      
    
    </>
  )
}

export default App