import React from "react";
import { Outlet } from "react-router-dom";

const ContentArea = () => {
  return (
    <>
      <div className="w-[83vw] ">
        <Outlet />
      </div>
    </>
  );
};

export default ContentArea;
