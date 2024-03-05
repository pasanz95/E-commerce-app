import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Logging here</span></p>
        <div className="loggingsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By contiuning, i agree to the terms of use privacy and policy.  </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
