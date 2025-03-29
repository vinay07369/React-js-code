import React from 'react'
import Home from './Home'
import Card from './Card'

const Props = () => {
  return (
    <div className='props'>

        <h1>Props component</h1>

        <div className="propsContainer">

            <Card image="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600" Name="Laptop" Brand="Hp" Price={45000.0} />
            <Card image="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600" Name="Mobile" Brand="Redmi" Price={20000.0}/>
            <Card image="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" Name="Iphone" Brand="Apple" Price={50000.0}/>
            <Card image="https://images.pexels.com/photos/2929411/pexels-photo-2929411.jpeg?auto=compress&cs=tinysrgb&w=600" Name="Camera" Brand="Sony" Price={120000.0}/>
            <Card image="https://images.pexels.com/photos/987586/pexels-photo-987586.jpeg?auto=compress&cs=tinysrgb&w=600" Name="TV" Brand="Samsung" Price={30000.0}/>
            <Card image="https://images.pexels.com/photos/31198914/pexels-photo-31198914/free-photo-of-modern-workspace-with-laptop-and-monitor-setup.jpeg?auto=compress&cs=tinysrgb&w=600" Name="Computer" Brand="Dell" Price={45000.0}/>
            <Card image="https://images.pexels.com/photos/191877/pexels-photo-191877.jpeg?auto=compress&cs=tinysrgb&w=600" Name="Speaker" Brand="JBL" Price={45000.0}/>

        </div>


    
        
    
    </div>
  )
}

export default Props