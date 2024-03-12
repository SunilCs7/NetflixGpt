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
      <div>
        {" "}
        <img
          className="absolute"
          src="https://thefatork.store/cdn/shop/articles/netflix.jpg?v=1669877376"
          alt="background img"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85">
        <h1 className="font-bold text-3xl py-4 px-10">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter Email Address....."
            className="my-4 p-4 w-full bg-gray-800 rounded-lg"
          />
        )}
        {!isSignInForm && (
          <input
            type="number"
            placeholder="Enter Phone Number...."
            className="my-4 p-4 w-full bg-gray-800 rounded-lg"
          />
        )}

        <input
          type="text"
          placeholder="Enter Email Address....."
          className="my-4 p-4 w-full bg-gray-800 rounded-lg"
        />
        <input
          type="password"
          placeholder="Enter Password....."
          className="my-6 p-4 w-full bg-gray-800 rounded-lg"
        />

        <div className="my-4">
          <label htmlFor="gender" className="block text-white">
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            className="p-2 w-full bg-gray-800 rounded-lg"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button className="p-4 my-4 bg-red-800 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to NetflixGpt ? Sign Up Now"
            : " Already Resistered SignIn Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
