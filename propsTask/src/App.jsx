import Box from "./components/Box"
import Navbar from "./components/Navbar"
import Section from "./components/Section"

let App=()=>{
  return(
    <div>
      <Navbar/>
      <div className="section">
          <h1>Welcome to my react application</h1>
          <p>This is my first webpage i have created to enhance my practical experience with React application.I hope this webpage looks more good, thank you for giving me this opportunity.</p>
      </div>

      <div className="boxcontainer">
          <Box name = {"MSD"} about={"Thala for a reason"} image={"https://i.pinimg.com/474x/fc/bb/32/fcbb3212a03e9b6965340b311e53913f.jpg"}/>

          <Box name = {"VK"} about={"Run mission"} image={"https://i.pinimg.com/474x/64/85/7c/64857c1bbf3f46959956b506027c5cb5.jpg"}/>

          <Box name = {"ROHIT"} about={"Game changer"} image={"https://i.pinimg.com/474x/6d/e3/7f/6de37f77fc7561d94e376fed9ad7b19d.jpg"}/>

      </div>
    </div>
  )
}

export default App