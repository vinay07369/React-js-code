
let Box =(props)=>{
    return(
        <div className="box">
            <img src={props.image} alt="" />

            <div className="data">
                <h1>{props.name}</h1>
                <p>{props.about}</p>
            </div>
        </div>
    )
}    
export default Box