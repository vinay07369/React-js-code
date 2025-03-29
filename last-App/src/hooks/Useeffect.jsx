import React, { useEffect, useState } from 'react'

const Useeffect = () => {

    let [count, setcount] = useState(0);

    useEffect(()=>{
        console.log("mounted");
    },[setcount])
    
  return (
    <>
        <h1>This is Useeffect component</h1>

        <h2>Count is {count}</h2>

        <button onClick={()=>setcount(count+1)}>Click</button>
    </>
  )
}

export default Useeffect