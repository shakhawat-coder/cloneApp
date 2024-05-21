import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import Search from "../../common/Search";
import profilePicture from "../../../assets/Home/profile.png";
import profilePictur2 from "../../../assets/Home/profile.png";
import profilePicture3 from "../../../assets/Home/profile.png";
import profilePicture4 from "../../../assets/Home/profile.png";
const GroupList = () => {
  const users = [
    {
      id: 1,
      image: profilePicture,
      title: "Friends Reunion",
      description: "Hi Guys, Wassup!",
      button: "Join",
    },

    {
      id: 2,
      image: profilePictur2,
      title: "Friends Forever",
      description: "Good to see you.",
      button: "Join",
    },

    {
      id: 3,
      image: profilePicture3,
      title: "Crazy Cousins",
      description: "What plans today?",
      button: "Join",
    },

    {
      id: 4,
      image: profilePicture4,
      title: "Bechelor Hub",
      description: "Lets Do Party",
      button: "join",
    },
  ];
  return (
    <>
      <div className="">
        <div className="">
          <Search className={"w-[427px]"} />
        </div>
        <div className="scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-gray-400 relative mt-10  h-[347px] w-[427px] overflow-y-scroll rounded-xl shadow-xl">
          <div className=" left-0 right-0 my-5   flex items-center justify-between bg-white px-3">
            <h1 className="font-Poppins text-custom-black text-xl font-semibold">
              Groups List
            </h1>
            <span>
              <FaEllipsisVertical className="text-btn-color text-2xl" />
            </span>
          </div>
          <div className=" divide-y-[1px] divide-gray-200">
            {users?.map((item) => (
              <div className="flex items-center justify-between px-7 py-5">
                <div className="h-[70px] w-[70px] cursor-pointer">
                  <picture>
                    <img
                      src={item.image}
                      alt=""
                      className="s-full h-full rounded-full object-cover shadow-lg"
                    />
                  </picture>
                </div>

                <div className="flex w-[60%] flex-col items-center justify-center text-wrap   ">
                  <h1 className="font-Poppins text-custom-black text-lg font-semibold">
                    {item.title}
                  </h1>
                  <p className="font-Poppins text-[14px] font-medium text-[#4D4D4D] opacity-75">
                    {item.description}
                  </p>
                </div>

                <div>
                  <button className="font-Poppins rounded-lg bg-blue px-5 py-1 text-xl font-semibold text-white">
                    {item.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupList;
