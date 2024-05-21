import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import profilePicture from "../../../assets/Home/profile.png";
import profilePictur2 from "../../../assets/Home/profile.png";
import profilePicture3 from "../../../assets/Home/profile.png";
import profilePicture4 from "../../../assets/Home/profile.png";
const Mygroups = () => {
  const friends = [
    {
      id: 1,
      image: profilePicture,
      title: "Raghav",
      description: "Dinner?",
      time: "Today, 8:56pm",
      active: true,
    },

    {
      id: 2,
      image: profilePictur2,
      title: "Friends Forever",
      description: "Good to see you.",
      time: "Today, 8:56pm",
      active: false,
    },

    {
      id: 3,
      image: profilePicture3,
      title: "Crazy Cousins",
      description: "What plans today?",
      time: "Today, 8:56pm",
      active: true,
    },

    {
      id: 4,
      image: profilePicture4,
      title: "Bechelor Hub",
      description: "Lets Do Party",
      time: "Today, 8:56pm",
      active: false,
    },
  ];
  return (
    <>
      <div className="">
        <div className=" left-0 right-0 my-5   flex items-center justify-between bg-white px-3">
          <h1 className="font-Poppins text-custom-black text-xl font-semibold">
            My Groups
          </h1>
          <span>
            <FaEllipsisVertical className="text-btn-color text-2xl" />
          </span>
        </div>
        <div className="scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-gray-400 relative h-[442px] w-[427px] overflow-y-scroll rounded-xl shadow-xl">
          <div className=" divide-y-[1px] divide-gray-200">
            {friends?.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center justify-between px-7 py-5"
              >
                <div className="relative h-[70px] w-[70px] cursor-pointer">
                  <picture>
                    <img
                      src={item.image}
                      alt=""
                      className="s-full h-full rounded-full object-cover shadow-lg"
                    />
                  </picture>
                  {item.active && (
                    <span className="absolute bottom-2 right-0 flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                  )}
                </div>

                <div className="flex w-[40%] flex-col items-start justify-center text-wrap   ">
                  <h1 className="font-Poppins text-custom-black text-lg font-semibold">
                    {item.title}
                  </h1>
                  <p className="font-Poppins text-[14px] font-medium text-[#4D4D4D] opacity-75">
                    {item.description}
                  </p>
                </div>

                <div>
                  <button className="font-Poppins text-xs font-medium  text-black opacity-50 ">
                    {item.time}
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

export default Mygroups;
