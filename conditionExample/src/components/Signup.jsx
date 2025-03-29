import React from 'react'

const Signup = () => {
  return (
    <>
        <form action="signup">
            <label htmlFor="">Enter your name</label>
            <input type="text" />
            <br></br>

            <label htmlFor="">Enter gender</label>
            <input type="text" />
            <br />
            <label htmlFor="">Enter your email</label>
            <input type="text" />
            <br></br>

            <label htmlFor="">Enter password</label>
            <input type="text" />

            <button>Submit</button>
        </form>
    </>
  )
}

export default Signup