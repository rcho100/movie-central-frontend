import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm'
import { signup } from '../actions/currentUser'


const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const newSignupInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(newSignupInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData)
        history.push('/')
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Username:</label>
                <input type='text' placeholder='Username' name='name' value={signupFormData.name} onChange={handleInputChange} />
                <label htmlFor='email'>Email:</label>
                <input type='text' placeholder='Email' name='email' value={signupFormData.email} onChange={handleInputChange} />
                <label htmlFor='password'>Password:</label>
                <input type='text' placeholder='Password' name='password' value={signupFormData.password} onChange={handleInputChange} />
                <input type='submit' value='Sign Up' />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)