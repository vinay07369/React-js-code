import React, { Fragment } from 'react'

const App = () => {

  let hello = (e) =>{

    console.log(e.target);
    
    alert("Welcome")
  }

  let msg = (username) =>{
    alert(`welcome ${username}`)
  }

  return (
    <>
      <h1>Event example</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, ut pariatur tempore.</p>

      <button onClick={hello}>Click me</button>
      <button onClick={()=>hello()}>Click me</button>

      <button onClick={()=>msg("vinay")}>Click me</button>
    </>
  )
}

export default App