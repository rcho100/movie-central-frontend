import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser'

const Login = ({ loginFormData, updateLoginForm, login, history }) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        const newLoginInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(newLoginInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData, history)
    }

    return (
       <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email:</label>
            <input type='text' placeholder='Email' name='email' value={loginFormData.email} onChange={handleInputChange} />
            <label htmlFor='password'>Password:</label>
            <input type='text' placeholder='Password' name='password' value={loginFormData.password} onChange={handleInputChange} />
            <input type='submit' value='Log In' />
        </form>
       </div>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)