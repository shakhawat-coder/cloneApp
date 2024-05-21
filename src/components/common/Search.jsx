import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
const Search = ({ className }) => {
  return (
    <>
      <div className={`${className} relative`}>
        <FaSearch className="absolute text-2xl left-6 top-1/2 -translate-y-1/2 " />
        <FaEllipsisVertical className="text-blue   absolute right-6 top-1/2 -translate-y-1/2" />
        <input
          className={`ps-20 ${className}   h-14 shadow-lg rounded-2xl outline-none`}
          type="search"
          placeholder="search"
          name=""
          id=""
        />
      </div>
    </>
  );
};

export default Search;
