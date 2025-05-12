import React, { useState } from 'react'

const Login = () => {
    let [email, setemail] = useState('');
    let [password, setpassword] = useState('');

    let handleLogin=(e)=>{
        e.preventDefault();

        console.log('Email:',email);
        console.log('Password',password);
        
    }
  return (
    <>
        <div className="outer">
            <div className="inner">
                <h2>Login</h2>
                <form action="" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" value={email} onChange={(e)=> setemail(e.target.value)} required />
                    </div>

                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" value={password} onChange={(e)=> setpassword(e.target.value)} required />
                    </div>

                    <button type='submit' >Login</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login