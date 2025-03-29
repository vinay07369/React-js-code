import React from "react"

let Profilecard=(props)=>{

    console.log(props)

    let {productname,price} = props;

    return(
        <div className="card">
            <h1>
                This is Profile Card
            </h1>
            <h2>
                Product name is {productname}
            </h2>
            <h3>
                Product price is {price}
            </h3>
        </div>
    )
}

export default Profilecard