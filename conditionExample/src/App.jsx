
import React from 'react'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import List_Component from './components/List_Component';

const App = () => {

  // ! 1. Conditional Rendering using if else:
  // let a=10;

  // if(a<20){
  //   return(

  //     <Login/>

  //   )
  // }else{
  //   return(

  //     <Signup/>

  //   )
  // }


  // ! 2. Conditional Rendering using ternary operator:
    // let isLoggedIn=true;

    // let a=10;

    // let b=5;

    // return(
    //     //inside return statement 
    //   <>
    //       {
    //         isLoggedIn ?<Home/>:<Login/>

    //       } 

    //       {
    //         a>20 ? <h1>sorry</h1>: <h1>Hello</h1>
    //       }

    //       {
    //         (b%2==0) ? <h1>Even</h1> : <h1>Odd</h1>

    //       }

    //       {
    //         (b%2!=0) ? <h1>Odd</h1> : ""
    //       }

    //       {
    //         (b%2!=0) && <h1>Even</h1>

    //       }
    //   </>
    // )


    // ! List and key in React

    let subjects = ["HTML","CSS","js","Java","python"]

    let products =[
      {
        id:1,
        productName:"Mobile",
        productPrice:20000
      },
      {
        id:2,
        productName:"Tv",
        productPrice:30000
      },
      {
        id:3,
        productName:"Laptop",
        productPrice:40000
      }  
    ]

    return(
      <>
        <List_Component/>
          <h1>List and key in React</h1>
          <ul>
            {
              subjects.map((ele,index)=>{
                return(
                  <li key={index}>{ele}</li>
                )
              })
            }

            <div className='product'>
              
              {
                products.map((ele)=>{
                  return(
                    <div className="box" key={ele.id}>
                      <h3>Product name:{ele.productName}</h3>
                      <h4>Product price:{ele.productPrice}</h4>
                    </div>
                  )
                })
              }

            </div>  
          </ul>
      </> 
    )
}

export default App