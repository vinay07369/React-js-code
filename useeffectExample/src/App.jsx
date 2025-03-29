import React, { useEffect, useState } from 'react'

const App = () => {

  let [count, setcount] = useState(0)

  let increment=()=>{
    setcount(count+1)
  }

  let num=20;

  let increase=()=>{
    //num+=1
    //  console.log(num);
  }

  let [decrease,setdecrease] = useState(100);

  let decreasenum=()=>{
    setdecrease(decrease-1)
  }

  useEffect(()=>{
    console.log("Iam normal useeffect");
  })

  useEffect(()=>{
    console.log("I will give output only one time");
  },[])

  useEffect(()=>{
    console.log("hello i am useeffect with dependency");
  },[decrease])

  return (
    <>
      <h1>HELLO, THIS IS USEEFFECT EXAMPLE</h1>

      <h2>Count is {count}</h2>

      <button onClick={increment}>Increment</button>

      <h2>Num count is {num}</h2>

      <button onClick={increase}>Increase</button>

      <h2>Count is {decrease}</h2>

      <button onClick={decreasenum}>decreasenum</button>
    </>
  )
}

export default App