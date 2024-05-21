import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import EmailVerified from "./EmailVerified";
import HomeLeftside from "./HomeLeftside";
import ContentArea from "./ContentArea";

const Home = () => {
  return (
    <>
      <div className="flex space-x-11 py-9 px-8">
        <HomeLeftside />
        <ContentArea />
      </div>
    </>
  );
};

export default Home;
