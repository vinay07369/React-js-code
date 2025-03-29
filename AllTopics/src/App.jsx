import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar'
import Props from './components/Props'
import Conditions from './components/Conditions'
import List from './components/List'
import Home from './components/Home'

const App = () => {
  return (
    <>
    
      <BrowserRouter>

        <NavBar/>

          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/props' element={<Props/>}></Route>
            <Route path='/conditions' element={<Conditions/>}></Route>
            <Route path='/list' element={<List/>}></Route>
            <Route path='/useeffect' element={<useeffect/>}></Route>
          </Routes>

      </BrowserRouter>
    
    </>
  )
}

export default App