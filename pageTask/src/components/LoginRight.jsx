import React from 'react'

const LoginRight = () => {
  return (
    <>
    
        <div className="right">

            <h2>Login</h2>

            <form action="">
                <input type="text" placeholder='Enter username or phonenumber' />
                <input type="text" placeholder='Password' />

                <button type='submit'>Login</button>

            </form>

            <p>Don't have an account?</p>

            <button type='submit'>Create new account</button>
            
        </div>
    
    </>
  )
}

export default LoginRight