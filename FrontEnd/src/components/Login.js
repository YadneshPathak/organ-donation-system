import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const mobile = useRef(null);

  const handleButtonClick = (e) => {
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(fullName.current.value);
    console.log(mobile.current.value);
    const Message = checkValidData(email.current.value, password.current.value);
    seterrorMessage(Message);
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/demo", {
      method: "POST",
      body: JSON.stringify({
        fullName: fullName.current.value,
        mobile:mobile.current.value,
        email: email.current.value,
        password: password.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="mt-10">
      {" "}
      {/* Added margin-top for spacing */}
      <Header />
      <div class="absolute inset-0 overflow-hidden">
        <img
          class="w-full h-full"
          src="https://www.asterhospitals.in/sites/default/files/2022-03/best-organ-transplant-hospital-in-calicut.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="relative w-3/12 p-10 bg-gray-300 my-22 mx-auto  text-black rounded-lg bg-opacity-50 mr-20"
      >
        <h1 className="font-bold text-2xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="full Name"
            className="p-2 my-3 w-full "
          />
        )}
        {!isSignInForm && (
          <input
            ref={mobile}
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
          passwordToggle="true"
          className="p-2 my-3 w-full"
        />
        <p className="text-red-600 font-bold text-lg py-2"> {errorMessage}</p>
        <button
          className="p-2 my-5 bg-red-600 w-full rounded-lg"
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
