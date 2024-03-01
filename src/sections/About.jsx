import React from "react";
import blurZitouna from "../assets/Zitouna 1.png";
import ArrowButton from "../components/ArrowButton";
import searImage from "../assets/Groupe 14275.png";
import rightZitouna from "../assets/Zitouna 2-1.png";
import leftZitouna from "../assets/Zitouna 3.png";

const About = () => {
  return (
    <div className="relative px-5">
      <img src={blurZitouna} className="absolute right-[-75px] top-[-200px]" />
      <p className="text-primary text-[32px] font-playfair uppercase ">About</p>
      <h2 className="text-secondary text-[48px] font-playfair uppercase font-black">
        zembra bio
      </h2>
      <p className="w-[377px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
        ultricies velit. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas. Maecenas interdum malesuada urna
        et eleifend. Aliquam hendrerit elit ac ornare pharetra. Suspendisse
        tincidunt sem eu felis auctor imperdiet. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
      <ArrowButton text="read more" />
      <div className="relative flex justify-center">
        <img
          src={rightZitouna}
          className="absolute right-[-60px] top-[-90px] w-[200px]"
        />
        <img src={searImage} className="w-[700px]" />
        <img
          src={leftZitouna}
          className="absolute w-[200px] bottom-[45%] left-[-45px]"
        />
      </div>
    </div>
  );
};

export default About;
