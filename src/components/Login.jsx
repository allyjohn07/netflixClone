import React from 'react';
import { useState } from 'react';
import "./login.css"
import SignIn from './SignIn';
function Login() {
 const [ signIn, setSignIn] = useState(false);
 
  return (
  <div className='login'>
      <div className="login_background">
        <img className='logo' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />
        <button className='login_btn'>Sign In</button>
        <div className="loginScreen_gradient"></div>
      </div>
      <div className="login_body">
          { signIn? (<SignIn/>) : (
              <>
              <h1>Unlimited films, TV programs and more.</h1>
              <h2>Watch anywhere, cancel anytime</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership</h3>
              <div className="login_emailInput">
                  <form>
                      <input type="email"  placeholder='Email address'/>
                      <div className="getStarted_btn" onClick={() => setSignIn(true)}>Get started</div>
                  </form>
              </div>
              </>
          )}
      </div>
  </div>);
}

export default Login;
