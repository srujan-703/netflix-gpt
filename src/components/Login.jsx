import React from "react";
import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignInForm , setIsSignInForm] = useState(true)
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
      <form className="w-3/12 absolute bg-black p-12 my-24 left-0 right-0 mx-auto text-white rounded-lg bg-opacity-75">
          <h1 className="font-bold text-3xl p-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {isSignInForm && <input type="text"  name="Full Name" placeholder="Enter your Full Name" className="w-full my-4 p-4 bg-gray-700 rounded-lg" />}
          <input type="text"  name="email" placeholder="Enter your Email" className="w-full my-4 p-4 bg-gray-700 rounded-lg" />
          <input type="password" name="password" placeholder="Enter your password" className="w-full my-4 p-4 bg-gray-700 rounded-lg"/>
          <button className="my-4 p-4 w-full bg-red-600 rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="cursor-pointer"  onClick={handleToggle}> {isSignInForm ? "New to netflix ? Sign Up":"Already a user ? Sign In"}</p>
        </form>
    </div>
  );
};

export default Login;
