import App from "../App"
import Navbar, { Hello } from "./Navbar"

let Home=()=>{
    return(
        <div>
            <Navbar/>
            <h2>Home</h2>
            <Hello/>
        </div>
    )
}

export default Home