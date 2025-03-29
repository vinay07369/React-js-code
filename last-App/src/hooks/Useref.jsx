import React, { useRef } from 'react'
import { useState } from 'react';

const Useref = () => {

    let btn = useRef();

    let changecolor=()=>{

        btn.current.style.color="red"
        console.log(btn.current);
    }

  return (
    <>
        <h1>This is useref component</h1>

        <h2 ref={btn}>I will change color</h2>

        <button onClick={changecolor}>Change color</button>
    </>
  )
}

export default Useref