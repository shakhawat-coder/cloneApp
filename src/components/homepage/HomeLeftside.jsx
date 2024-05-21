import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ProfilePic from "../../assets/Home/profile.png";
import { IoHomeOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { VscSignOut } from "react-icons/vsc";
const HomeLeftside = () => {
  let location = useLocation();
  const navigate = useNavigate();
  let active = location.pathname.split("/")[1];
  const logOut = (event) => {
    navigate("/login");
  };
  return (
    <>
      <div className="bg-blue py-9 flex flex-col items-center h-[88vh] w-[17vw] rounded-lg ">
        <div className="mb-20 w-[100px] h-[100px] bg-black rounded-full">
          <picture>
            <img src={ProfilePic} alt="profile pic" />
          </picture>
        </div>
        <div className="">
          <ul className=" flex flex-col space-y-10">
            <li
              className={
                active === ""
                  ? "z-50  relative text-5xl text-blue cursor-pointer after:absolute after:bg-white after:content-[''] after:left-[-45px] after:-top-5  after:-z-10 after:h-[89px] after:w-[200px] after:rounded-l-lg before:absolute before:bg-blue before:content-[''] before:right-[-120px] before:-top-5  before:z-10 before:h-[89px] before:w-[19px] before:rounded-l-lg "
                  : "text-5xl text-white cursor-pointer"
              }
            >
              <Link to={"/"}>
                <IoHomeOutline />
              </Link>
            </li>
            <li
              className={
                active === "chat"
                  ? "z-50  relative text-5xl text-blue cursor-pointer after:absolute after:bg-white after:content-[''] after:left-[-45px] after:-top-5  after:-z-10 after:h-[89px] after:w-[200px] after:rounded-l-lg before:absolute before:bg-blue before:content-[''] before:right-[-120px] before:-top-5  before:z-10 before:h-[89px] before:w-[19px] before:rounded-l-lg "
                  : "text-5xl text-white cursor-pointer"
              }
            >
              <Link to={"/chat"}>
                <IoChatbubbleEllipsesOutline />
              </Link>
            </li>
            <li
              className={
                active === "notification"
                  ? "z-50  relative text-5xl text-blue cursor-pointer after:absolute after:bg-white after:content-[''] after:left-[-45px] after:-top-5  after:-z-10 after:h-[89px] after:w-[200px] after:rounded-l-lg before:absolute before:bg-blue before:content-[''] before:right-[-120px] before:-top-5  before:z-10 before:h-[89px] before:w-[19px] before:rounded-l-lg "
                  : "text-5xl text-white cursor-pointer"
              }
            >
              <Link to={"/notification"}>
                <FaRegBell />
              </Link>
            </li>
            <li
              className={
                active === "setting"
                  ? "z-50  relative text-5xl text-blue cursor-pointer after:absolute after:bg-white after:content-[''] after:left-[-45px] after:-top-5  after:-z-10 after:h-[89px] after:w-[200px] after:rounded-l-lg before:absolute before:bg-blue before:content-[''] before:right-[-120px] before:-top-5  before:z-10 before:h-[89px] before:w-[19px] before:rounded-l-lg "
                  : "text-5xl text-white cursor-pointer"
              }
            >
              <Link to={"/setting"}>
                <FiSettings />
              </Link>
            </li>

            <li
              onClick={logOut}
              className="text-5xl text-white  cursor-pointer pt-24"
            >
              <VscSignOut />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomeLeftside;
