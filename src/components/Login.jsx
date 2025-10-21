import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import checkValidData from "../utils/validate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const [errorMessage ,setErrorMessage] = useState(null)
  const email = useRef('')
  const password = useRef('')
  const [isSignInForm , setIsSignInForm] = useState(true)
  const handleSubmit = () => {
      const message = checkValidData(email.current.value,password.current.value)
      setErrorMessage(message)
      if(message) return
      if(isSignInForm){
        //sign up login
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              console.log(user)
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + " " + errorMessage)
            });
      }
      else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              const user = userCredential.user;
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + " " + errorMessage)
            });
      }
      //sign inp logic 

  }
  const handleToggle = () => {
    return (setIsSignInForm(!isSignInForm))
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/024bfb98-9e9d-441d-9c5f-d2c798d8e42f/web/IN-en-20251013-TRIFECTA-perspective_b6324826-0535-47c5-be5f-4f50e9663eaf_medium.jpg"
          alt="Bakcground Image"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute bg-black p-12 my-24 left-0 right-0 mx-auto text-white rounded-lg bg-opacity-75">
          <h1 className="font-bold text-3xl p-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {isSignInForm && <input type="text"  name="Full Name" placeholder="Enter your Full Name" className="w-full my-4 p-4 bg-gray-700 rounded-lg" />}
          <input type="text" ref={email} name="email" placeholder="Enter your Email" className="w-full my-4 p-4 bg-gray-700 rounded-lg" />
          <input type="password" ref={password} name="password" placeholder="Enter your password" className="w-full my-4 p-4 bg-gray-700 rounded-lg"/>
          <p className="text-lg text-red-600">{errorMessage}</p>
          <button className="my-4 p-4 w-full bg-red-600 rounded-lg" onClick={handleSubmit}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="cursor-pointer"  onClick={handleToggle}> {isSignInForm ? "New to netflix ? Sign Up":"Already a user ? Sign In"}</p>
        </form>
    </div>
  );
};

export default Login;
