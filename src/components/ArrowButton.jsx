import React from "react";
import arrowRight from "../assets/Union 1.svg";

const ArrowButton = ({ text, className }) => {
  return (
    <button
      className={`uppercase relative py-4 pl-5 pr-[37px] text-sm font-playfair font-black text-primary border-secondary border-2 mt-6 ${className}`}
    >
      {text}
      <img src={arrowRight} className="absolute bottom-6 right-[-20px] " />
    </button>
  );
};

export default ArrowButton;
