import React from 'react'

const SignupRight = () => {
  return (
    <>
    
        <div className="right">

          <h2>Sign up</h2>

          <form action="">

            <input type="text" placeholder='Enter username' />
            <input type="text" placeholder='Enter password' />
            <input type="text" placeholder='Enter email-id ' />
            <input type="text" placeholder='Enter Phonenumber' />
   
            <button type='submit'>Signup</button>

          </form>

          <p>Already have an account?</p>

          <button type='submit'>Login</button>

        </div>
    
    </>
  )
}

export default SignupRight