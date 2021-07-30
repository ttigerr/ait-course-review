import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import React, { useState } from 'react'

const Log = (props) => {

    const [signUpModal, setSignUpModal] = useState(props.signup)
    const [signInModal, setSignInModal] = useState(props.signin)

    const handleModals = (e) => {
        if (e.target.id === 'register') {
            setSignUpModal(true)
            setSignInModal(false)
        } else if (e.target.id === 'login') {
            setSignUpModal(false)
            setSignInModal(true)
        }
    }

    return (
        <div className="connection-form">
            <div className="form-container">
                <ul>
                    <li onClick={handleModals} id='register' className={signUpModal ? 'active-btn' : null}>Sign Up</li>
                    <li onClick={handleModals} id='login' className={signInModal ? 'active-btn' : null}>Sign In</li>
                </ul>
                {signUpModal && <SignUpForm />}
                {signInModal && <SignInForm />}
            </div>
        </div>
    )
}

export default Log