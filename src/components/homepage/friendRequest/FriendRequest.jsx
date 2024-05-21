import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import profilePicture from "../../../assets/Home/profile.png";
import profilePictur2 from "../../../assets/Home/profile.png";
import profilePicture3 from "../../../assets/Home/profile.png";
import profilePicture4 from "../../../assets/Home/profile.png";
const FriendRequest = () => {
  const friends = [
    {
      id: 1,
      image: profilePicture,
      title: "Raghav",
      time: "Today, 8:56pm",
    },

    {
      id: 2,
      image: profilePictur2,
      title: "Friends Forever",
      time: "Today, 8:56pm",
    },

    {
      id: 3,
      image: profilePicture3,
      title: "Crazy Cousins",
      time: "Today, 8:56pm",
    },

    {
      id: 4,
      image: profilePicture4,
      title: "Bechelor Hub",
      time: "Today, 8:56pm",
    },
    {
      id: 5,
      image: profilePicture4,
      title: "Bechelor Hub",
      time: "Today, 8:56pm",
    },
  ];
  return (
    <>
      <div className="">
        <div className=" left-0 right-0 my-5   flex items-center justify-between bg-white px-3">
          <h1 className="font-Poppins text-custom-black text-xl font-semibold">
            Friend Request
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
                </div>

                <div className="flex w-[40%] flex-col items-start justify-center">
                  <h1 className="font-Poppins text-custom-black text-lg font-semibold">
                    {item.title}
                  </h1>
                  <p className="font-Poppins text-[14px] font-medium text-[#4D4D4D] opacity-75">
                    {item.time}
                  </p>
                </div>

                <div>
                  <button className="font-Poppins rounded-lg bg-blue px-5 py-1 text-xl font-semibold text-white">
                    Accept
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

export default FriendRequest;
