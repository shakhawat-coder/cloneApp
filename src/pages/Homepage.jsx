import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import EmailVerified from "../components/homepage/EmailVerified";
import Home from "../components/homepage/Home";
const Homepage = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    emailVerified: false,
    displayName: "",
    email: "",
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserInfo({
        ...userInfo,
        emailVerified: user.emailVerified,
        displayName: user.displayName,
        email: user.email,
      });
    });
  }, [userInfo.emailVerified]);

  return (
    <>
      <div className="">
        {userInfo.emailVerified ? <Home /> : <EmailVerified />}
      </div>
    </>
  );
};

export default Homepage;
