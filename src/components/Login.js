import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);

    const Message = checkValidData(email.current.value, password.current.value);
    seterrorMessage(Message);
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 p-10 bg-gray-600 my-22 mx-auto right-0 left-0 text-black rounded-lg bg-opacity-50"
      >
        <h1 className="font-bold text-2xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="full Name"
            className="p-2 my-3 w-full "
          />
        )}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Mobile no."
            className="p-2 my-3 w-full "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-3 w-full "
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-3 w-full"
        />
        <p className="text-red-600 font-bold text-lg py-2"> {errorMessage}</p>
        <button
          className="p-2 my-5 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
