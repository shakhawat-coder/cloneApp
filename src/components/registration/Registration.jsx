import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import RegistrationImage from "../../assets/registrationImage.png";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Input from "../common/Input";
const Registration = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);

  // ================error state================
  const [emailError, setEmailError] = useState("");
  const [fullNameError, setfullNameError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  // =====================xxxxxxxxxxxxxx
  // const [isFocused, setIsFocused] = useState(false);

  // const handleBlur = (e) => {
  //   if (!e.target.value) {
  //     setIsFocused(false);
  //   }
  // };
  // =======================xxxxxxxxxxxxx
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleFullName = (event) => {
    setFullName(event.target.value);
  };
  const handlepassword = (event) => {
    setPassword(event.target.value);
  };
  const handleEye = () => {
    setEye(!eye);
  };

  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  const handleSignUp = () => {
    if (!email) {
      setEmailError("Email missing!");
    } else if (!regex.test(email)) {
      setEmailError("Invalid Email!");
    } else if (!fullName) {
      setEmailError("");
      setfullNameError("Name missing!");
    } else if (!password) {
      setEmailError("");
      setFullName("");
      setpasswordError("Passwoed missing!");
    } else if (!passwordRegex.test(password)) {
      setpasswordError("Invalid password!");
    } else {
      setEmailError("");
      setfullNameError("");
      setpasswordError("");
      setEmail("");
      setFullName("");
      setPassword("");

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser).then(() => {
            toast("Pleade check your email", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
          });
        })
        .catch((error) => {
          if (error.message.includes("email")) {
            toast.error("This email is already register", {
              position: "top-right",
              autoClose: 5000,
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
  // const user = auth.currentUser;
  // const emailid = user.email;
  // console.log(user.emailVerified);
  return (
    <>
      <div className="flex">
        <div className="w-1/2 flex items-center justify-center">
          <ToastContainer />
          <div className="">
            <h2 className="text-primary-text font-nunito text-4xl font-bold pb-3 ">
              Get started with easily register
            </h2>
            <p className="text-black opacity-50 font-nunito text-xl font-normal pb-14">
              Free register and you can enjoy it
            </p>
            <form onSubmit={handleSubmit} action="">
              {/* <input onChange={handleEmail} placeholder="hello" type="text" /> */}
              {/* <Input
                onchange={handleEmail}
                placeholder={"Email address "}
                type={"email"}
              />
              <Input placeholder={"Full name "} type={"text"} />
              <Input placeholder={"Password "} type={"password"} /> */}
              <div className="relative mb-14">
                <label
                  className={
                    email
                      ? "absolute px-4 font-nunito text-xs text-primary-text text-opacity-70  font-semibold top-0 left-12 bg-white z-10 transition-all ease-in-out duration-300 -translate-y-1/2"
                      : "absolute left-12 top-1/2 transition-all ease-in-out duration-300 -translate-y-1/2  "
                  }
                >
                  Email address
                </label>
                <input
                  className="h-20 w-full border-2 px-16   outline-none border-primary-text rounded-lg opacity-50  "
                  type="email"
                  // onClick={handleFocus}
                  // onBlur={handleBlur}
                  onChange={handleEmail}
                  value={email}
                />
                {emailError && (
                  <span className="absolute -bottom-7 left-2 text-red-700 ">
                    {emailError}
                  </span>
                )}
              </div>
              <div className="relative mb-14">
                <label
                  className={
                    fullName
                      ? "absolute px-4 font-nunito text-xs text-primary-text text-opacity-70  font-semibold top-0 left-12 bg-white z-10 transition-all ease-in-out duration-300 -translate-y-1/2"
                      : "absolute left-12 top-1/2 transition-all ease-in-out duration-300 -translate-y-1/2  "
                  }
                >
                  Full Name
                </label>
                <input
                  className="h-20 w-full border-2 px-16   outline-none border-primary-text rounded-lg opacity-50  "
                  type="text"
                  // onClick={handleFocus}
                  // onBlur={handleBlur}
                  onChange={handleFullName}
                  value={fullName}
                />
                {fullNameError && (
                  <span className="absolute -bottom-7 left-2 text-red-700 ">
                    {fullNameError}
                  </span>
                )}
              </div>
              <div className="relative mb-14">
                <label
                  className={
                    password
                      ? "absolute px-4 font-nunito text-xs text-primary-text text-opacity-70  font-semibold top-0 left-12 bg-white z-10 transition-all ease-in-out duration-300 -translate-y-1/2"
                      : "absolute left-12 top-1/2 transition-all ease-in-out duration-300 -translate-y-1/2  "
                  }
                >
                  Password
                </label>
                <input
                  className="h-20 w-full border-2 px-16   outline-none border-primary-text rounded-lg opacity-50  "
                  type={eye ? "text" : "password"}
                  // onClick={handleFocus}
                  // onBlur={handleBlur}
                  onChange={handlepassword}
                  value={password}
                />
                <div
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  onClick={handleEye}
                >
                  {eye ? <FaRegEyeSlash /> : <FaRegEye />}
                </div>
                {passwordError && (
                  <span className="absolute -bottom-7 left-2 text-red-700 ">
                    {passwordError}
                  </span>
                )}
              </div>
              <button
                className="bg-blue rounded-full h-16 w-full text-white font-nunito font-semibold text-xl   "
                type="submit"
                onClick={handleSignUp}
              >
                SignUp
              </button>
            </form>
            <p className="font-opensans font-normal text-sm text-primary-text text-center mt-9">
              Already have an account ?
              <span className="font-bold text-orange cursor-pointer ">
                Sign In
              </span>
            </p>
          </div>
        </div>
        <div className="w-1/2 h-screen overflow ">
          <picture>
            <img
              className="h-full w-full   object-cover "
              src={RegistrationImage}
              alt="registrationImage"
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default Registration;
