import React from "react";
import { Link } from "react-router-dom";
import EmailGif from "../../assets/envelope.gif";
const EmailVerified = () => {
  return (
    <>
      <div className=" flex flex-col  gap-3 items-center justify-center font-opensans font-bold text-4xl h-screen">
        <img src={EmailGif} alt="emailgifs" />
        <h2>
          Please verify your
          <Link
            target="_blank"
            className="text-blue"
            to={"https://mail.google.com/mail/"}
          >
            email
          </Link>
        </h2>
      </div>
    </>
  );
};

export default EmailVerified;
