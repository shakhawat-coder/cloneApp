import React, { useState } from "react";

const Input = ({ placeholder, type }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setIsFocused(false);
    }
  };

  return (
    <div className="relative mb-14">
      <label
        className={
          isFocused
            ? "absolute px-4 font-nunito text-xs text-primary-text text-opacity-70  font-semibold top-0 left-12 bg-white z-10 transition-all ease-in-out duration-300 -translate-y-1/2"
            : "absolute left-12 top-1/2 transition-all ease-in-out duration-300 -translate-y-1/2  "
        }
      >
        {placeholder}
      </label>
      <input
        className="h-20 w-full border-2 px-16   outline-none border-primary-text rounded-lg opacity-50  "
        type={type}
        onClick={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Input;
