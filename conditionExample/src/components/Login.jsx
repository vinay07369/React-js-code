
import React from 'react'

const Login = () => {
  return (
    <>
        <form action="login">
            <label htmlFor="">Enter your username</label>
            <input type="text" /><br></br>

            <label htmlFor="">Enter your password</label>
            <input type="text" />

        </form>
    </>
  )
}

export default Login