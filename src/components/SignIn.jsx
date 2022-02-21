import React from 'react';
import { auth } from '../app/firebase';
import { useRef } from 'react';
import "./signin.css"
import { current } from '@reduxjs/toolkit';

function SignIn() {
  const  emailRef = useRef(null);
  const  passwordRef = useRef(null);

  const register = (e) =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then( (authUser) => {     
    })
    .catch( err => {
      alert(err.message)
    })
  }

  const signin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
  }
  return(
    <div className='signin'>
      <form action="">    
      <h1>Sign In</h1>
      <input type="email" ref={emailRef} placeholder='Email'/>
      <input type="password" ref={passwordRef} placeholder='Password' />
      <button type='submit' onClick={signin}>sign In</button>
      <h4> 
           <span className='gray_span'>New to Netflix?</span>
           <span className='signUp_link' onClick={register}> Sign Up now.</span>
      </h4>
      </form>
    </div>
  );
}

export default SignIn;
