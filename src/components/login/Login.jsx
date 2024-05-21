import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";

import LoginImage from "../../assets/loginImage.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Home from "../homepage/Home";
const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [inputValue, setinputValue] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });
  // const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleInputField = (e) => {
    setinputValue({
      ...inputValue,
      [e.target.id]: e.target.value,
    });
  };

  const handleEye = () => {
    setEye(!eye);
  };

  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  const handleSignIn = () => {
    if (!inputValue.email) {
      setError({
        ...error,
        emailError: "Email missing",
      });
    } else if (!regex.test(inputValue.email)) {
      setError({
        ...error,
        emailError: "Invalid email",
      });
    } else if (!inputValue.password) {
      setError({
        ...error,
        passwordError: "Password missing",
        emailError: "",
      });
    } else if (!passwordRegex.test(inputValue.password)) {
      setError({
        ...error,
        passwordError: "Invalid password",
        emailError: "",
      });
    } else {
      setinputValue({
        email: "",
        password: "",
      });
      setError({
        ...error,
        passwordError: "",
        emailError: "",
      });

      signInWithEmailAndPassword(auth, inputValue.email, inputValue.password)
        .then((userCredential) => {
          // console.log(userCredential);
          localStorage.setItem(
            "userToken",
            userCredential._tokenResponse.idToken,
          );
          navigate("/home");
          toast.success("Successfully login", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        })
        .catch((error) => {
          if (error.message.includes("Error")) {
            toast.error("Invalid Email or passwoed", {
              position: "top-center",
              autoClose: false,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
          }
        });
    }
  };
  const googleLoginHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <>
      <div className="flex justify-between">
        <div className="flex w-1/2 items-center justify-center">
          <ToastContainer />
          <div className="">
            <h2 className="pb-3 font-nunito text-4xl font-bold text-primary-text ">
              Login to your account!
            </h2>
            <div
              className="mb-8 flex w-[220px] cursor-pointer items-center gap-3 rounded-lg border-4 p-5"
              onClick={googleLoginHandler}
            >
              <FcGoogle />
              <span className="font-opensans text-sm  font-semibold text-primary-text  ">
                Login with Google
              </span>
            </div>
            <form onSubmit={handleSubmit} action="">
              <div className="relative mb-10">
                <label
                  className={
                    inputValue
                      ? "absolute top-0 z-10 -translate-y-1/2  bg-white  font-nunito text-xs  font-semibold text-primary-text text-opacity-70 transition-all duration-300 ease-in-out"
                      : "absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out  "
                  }
                >
                  Email address
                </label>
                <input
                  className="h-16 w-full border-b-2 border-primary-text opacity-50 outline-none  "
                  type="email"
                  id="email"
                  onChange={handleInputField}
                  value={inputValue.email}
                />
                {error.emailError && (
                  <span className="absolute -bottom-7 left-2 text-red-700 ">
                    {error.emailError}
                  </span>
                )}
                {/* {emailError && (
                  <span className="absolute -bottom-7 left-2 text-red-700 ">
                    {emailError}
                  </span>
                )} */}
              </div>
              <div className="relative mb-10">
                <label
                  className={
                    inputValue
                      ? "absolute left-0 top-0 z-10 -translate-y-1/2  bg-white font-nunito text-xs font-semibold text-primary-text text-opacity-70 transition-all duration-300 ease-in-out"
                      : "absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out  "
                  }
                >
                  Password
                </label>
                <input
                  className="h-16 w-full border-b-2 border-primary-text opacity-50 outline-none  "
                  type={eye ? "text" : "password"}
                  id="password"
                  // onClick={handleFocus}
                  // onBlur={handleBlur}
                  onChange={handleInputField}
                  value={inputValue.password}
                />
                {error.passwordError && (
                  <span className="absolute -bottom-7 left-2 text-red-700 ">
                    {error.passwordError}
                  </span>
                )}
                <div
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  onClick={handleEye}
                >
                  {eye ? <FaRegEyeSlash /> : <FaRegEye />}
                </div>
                {/* {passwordError && (
                  <span className="absolute -bottom-7 left-2 text-red-700 ">
                    {passwordError}
                  </span>
                )} */}
              </div>
              <button
                className="h-16 w-full rounded-lg bg-blue font-nunito text-xl font-semibold text-white   "
                type="submit"
                onClick={handleSignIn}
              >
                Login to Continue
              </button>
            </form>
            <p className="mt-9 text-center font-opensans text-sm font-normal text-primary-text">
              Don’t have an account ?
              <span className="cursor-pointer font-bold text-orange ">
                <Link to={"/registration"}>Sign up</Link>
              </span>
            </p>
          </div>
        </div>
        <div className="">
          <picture>
            <img
              src={LoginImage}
              alt="loginImage"
              className="h-[100vh] w-[672px] object-cover"
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default Login;
