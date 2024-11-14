import React, { useRef, useState } from "react";
import Header from "./Header";

import { CheckValidate } from "../Utils/validate";
const Login = () => {
  const [isSignIn, SetIsSignIn] = useState(true);

  const email = useRef();
  const password = useRef();
  const [ErrorMesage, SetErrormesage] = useState();

  const submitChange = (e) => {
    SetIsSignIn(!isSignIn);
  };
  const FormSubmit = (e) => {
    e.preventDefault();
    SetErrormesage("");
    const measage = CheckValidate(email.current.value, password.current.value);
    SetErrormesage(measage);
   
   
  };
  return (
    <div className="">
      <Header />

      <div className=" absolute w-full ">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg"
          alt=""
        />
      </div>
      <div className=" w-full h-[100vh] flex justify-center items-center">
        <form className=" absolute p-16 right-auto left-auto  bg-black bg-opacity-85 text-white w-1/4  space-y-10 rounded-xl ">
          <h1 className="text-xl font-bold text-center ">
            {isSignIn ? "Sign " : " Sign Up"}
          </h1>

          {isSignIn ? (
            ""
          ) : (
            <input
              className="w-full bg-gray-500 rounded-md text-center h-10 "
              type="text"
              placeholder="Enter your name"
            />
          )}

          <input
            ref={email}
            className=" w-full bg-gray-500 rounded-md text-center h-10"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            ref={password}
            className="w-full bg-gray-500 rounded-md text-center h-10"
            type="password"
            name=""
            id=""
            placeholder="Enter your password"
          />

          {ErrorMesage ? <p className="text-red-500 ">{ErrorMesage}</p> : null}
          <button
            onClick={(e) => FormSubmit(e)}
            className="w-full bg-red-600 p-2 rounded"
          >
            {isSignIn ? "Sign In " : "Sign Up "}
          </button>

          <p onClick={() => submitChange()} className="  text-right">
            {isSignIn
              ? "New to Netflix? Sign up now."
              : "Already user? Sign In "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
