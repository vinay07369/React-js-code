import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import UseState from './hooks/UseState'
import Useeffect from './hooks/Useeffect'
import Useref from './hooks/Useref'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/usestate' element={<UseState/>} />
            <Route path='/useeffect' element={<Useeffect/>} />
            <Route path='/useref' element={<Useref/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App