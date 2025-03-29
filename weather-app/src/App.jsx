import React from 'react'
import Home from './components/Weather'
import Weather from './components/Weather'

const App = () => {
  return (
    <>

        <Weather/>

        {/* https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} */}

        {/* 614064e7f987e55440c35f1ff8235c54 */}

        {/* https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=614064e7f987e55440c35f1ff8235c54 */}

    </>
  )
}

export default App