import { useState } from 'react'
import Hello from './Hello'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
   
      <h1>{count}</h1>

      <button onClick={()=>setCount(count+1)}>click me</button>

      <hr />

      <Hello/>

    </>
  )
}

export default App
