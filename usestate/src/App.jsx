import React, { useState } from 'react'

const App = () => {
    let [num, setNum] = useState(0)

    let [player, setPlayer] = useState("")

    let [isKing, setIsKing] = useState(100)

    let [count, setCount] = useState(100)

    let increase=()=>{
        setNum(num+1)
    }

    let decrease=()=>{
        setNum(num-1)

        setNum((pre)=>{
            console.log(pre);
            return pre-1
        })
    }

    let changeName=()=>{
        setIsKing(!isKing)
        setPlayer(
            isKing ? "virat" : "rohit"
        )
    }

  return (
    <>

        <h2>{num}</h2>

        <button onClick={increase}>Increase</button>

        <button onClick={decrease}>Decrease</button>


        <button onClick={()=>setNum(num+1)}>Increment</button>

        <button onClick={()=>setNum(num-1)}>Decrement</button>

        <h2>Player name is {player}</h2>

        <button onClick={changeName}>Change name</button>

        <h2>{count}</h2>

        <button onClick={()=>setCount((pre)=> pre+1)}>Click</button>
    </>
  )
}

export default App