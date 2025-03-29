import Hello from "./components/Hello"
import Profilecard from "./components/ProfileCard"
import React from "react"


let App=()=>{
 
  let student={
    sname:"vinay",
    sage:"22",
    phone:7305291199
  }

  return(

    <div>
    
      <div>
        <h1>Home Page</h1>
        <hr/>
      </div>

      <div className="con">
      
      <Profilecard productname={"Mobile"} price={20000}/>
      <Profilecard productname={"TV"} price={30000}/>
      <Profilecard productname={"Laptop"} price={50000}/>
      
    </div>

    <div>
      <div>
        <h1>Hello</h1>

        <Hello stu={student}/>
      </div>
      </div>
    </div>
    
    
  )
}

export default App