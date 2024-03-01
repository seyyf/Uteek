import React from "react";
import logo from "../assets/Groupe 14300.svg";
import send from "../assets/send.svg";
import facebook from "../assets/facebook-logo.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/Groupe 194.svg";

const Footer = () => {
  const menu = [
    "ZEMBRA BIO",
    "OUR PRODUCTS",
    "BLOG",
    "CONTACT",
    "COOKIES POLICY",
    "PRIVACY POLICY",
  ];
  const social = [facebook, twitter, youtube, instagram];
  return (
    <>
      <div className="footer mt-[6rem] px-8 py-6">
        <div className="flex flex-col items-center">
          <img src={logo} />
          <ul className="pt-8">
            {menu.map((item) => {
              return (
                <li className="text-center text-lowOpactiy text-[25px] uppercase pb-2">
                  {item}
                </li>
              );
            })}
          </ul>
          <p className="pt-8 text-lowOpactiy text-[25px] uppercase ">
            SUBSCRIBE TO OUR NEWSLETTER
          </p>
          <div className="relative w-full">
            <input
              type="text"
              className="rounded-lg w-full py-2 px-4 input_newsletter border-oily border-2"
              placeholder="Email Address"
            />
            <img
              src={send}
              className="absolute right-0 w-[42px] p-[8px] rounded-br-[8px] top-0 bg-oily "
            />
            <div className="flex justify-start w-full gap-5 ">
              {social.map((item) => {
                return <img className="w-[15px]" src={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-[600] text-primary ">
          <span className="text-secondary">© ZembraBio</span> All Right
          Reserved. Developped{" "}
          <span className="text-secondary font-[700]">By UTEEK</span>
        </p>
        <p className="font-[600] text-primary">
          <span className="text-secondary">© ZembraBio</span> 2022
        </p>
      </div>
    </>
  );
};

export default Footer;
