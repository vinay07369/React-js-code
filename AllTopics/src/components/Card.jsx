import React from 'react'

const Card = (props) => {

  let {image,Name,Brand,Price} = props;

  return (
    <div className='card'>

      <img src={props.image} alt="Laptop"/>
      <h2>Productname:{Name}</h2>
      <h3>Price:{Price}</h3>

    </div>
  )
}

export default Card