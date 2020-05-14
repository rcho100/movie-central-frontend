import React from 'react'

const Login = () => {
    return (
       <div>
        <h1>Login</h1>
        <form>
            <label htmlFor='email'>Email:</label>
            <input type='text' placeholder='Email' name='email' />
            <label htmlFor='password'>Password:</label>
            <input type='text' placeholder='Password' name='password' />
            <input type='submit' value='Log In' />
        </form>
       </div>
    )
}

export default Login