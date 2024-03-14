import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMassage, setErrorMassage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    // form validation
    const massage = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value
    );
    setErrorMassage(massage);
    if (massage) return;

    // Create user
    // signIn and SignUp logic

    if (!isSignInForm) {
      // SigiUp logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMassage(errorCode + "__" + errorMassage);
        });
    } else {
      // SignIn logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMassage(errorCode + "__" + errorMessage);
        });
    }
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85"
      >
        <h1 className="font-bold text-3xl py-4 px-10">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="FullName....."
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
          ref={email}
          type="text"
          placeholder="Enter Email Address....."
          className="my-4 p-4 w-full bg-gray-800 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Password....."
          className="my-6 p-4 w-full bg-gray-800 rounded-lg"
        />

        {!isSignInForm && (
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
        )}
        <p className="text-red font-bold text-lg py-3">{errorMassage}</p>
        <button
          className="p-4 my-4 bg-red-800 w-full"
          onClick={handleButtonClick}
        >
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
