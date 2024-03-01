import React from "react";
import zitouna from "../assets/Zitouna 2-2.png";
import warka from "../assets/war9et zitoun 3-1.png";
import quote from "../assets/Groupe 263.svg";
import InputContact from "../components/InputContact";
import ArrowButton from "../components/ArrowButton";
import zitouna2 from "../assets/Zitouna 2-3.png";
const Contact = () => {
  return (
    <div className="pt-[8rem] relative px-5">
      <div className="relative contact_container px-8 py-6">
        <img
          src={zitouna}
          className="absolute right-[-50px] top-[-100px] w-[200px]"
        />
        <img
          src={warka}
          className="absolute top-[-80px] right-[50%] w-[120px]"
        />
        <div className="flex items-center flex-col pt-12">
          <img src={quote} className="w-[60px]" />
          <p className="text-center text-lowOpactiy pt-10 text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            lacinia neque elit, quis tristique sem tincidunt venenatis.
          </p>
          <p className="text-oily text-[21px] font-playfair">LOREM IPSUM</p>
        </div>
      </div>
      <div className="bg-primary flex flex-col py-8">
        <p className="text-lowOpactiy text-[48px] font-playfair text-center uppercase font-black">
          contact us
        </p>
        <div className="flex flex-col items-center gap-8 relative">
          <InputContact placeholder="Nom et Prénom" />
          <InputContact placeholder="Email" />
          <InputContact placeholder="Message" />
        </div>
        <ArrowButton
          text="send message"
          className="!text-oily w-[215px] ml-14 !border-lowOpactiy !text-[19px]"
        />
      </div>
      <img src={zitouna2} className="absolute bottom-[-20%] left-[25%]" />
    </div>
  );
};

export default Contact;
