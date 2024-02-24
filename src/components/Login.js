import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />

      <form className="w-3/12 p-10 bg-gray-600 my-22 mx-auto right-0 left-0 text-black rounded-lg bg-opacity-50">
        <h1 className="font-bold text-2xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder="full Name"
          className="p-2 my-3 w-full "
        />}
        {!isSignInForm && <input
          type="text"
          placeholder="Mobile no."
          className="p-2 my-3 w-full "
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-3 w-full "
        />
        
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-3 w-full"
        />
        <button className="p-2 my-5 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "new to website? sign up"
            : "Already register? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
