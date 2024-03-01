import React from "react";
import mobileLogo from "../assets/menu (2).svg";
import paperImage from "../assets/war9et zitoun 1.png";
import zitouna2 from "../assets/Zitouna 2.png";
import arrowRight from "../assets/Union 1.svg";
import dabouza from "../assets/Groupe 14272.png";
import arrowRightButton from "../assets/Union 4.svg";
import arrowLeftButton from "../assets/Union 3.svg";
import ArrowButton from "../components/ArrowButton";
import useWindowSize from "../customHook/useWidth";

const Header = () => {
  const { width, height } = useWindowSize();
  const pagination = [1, 2, 3, 4, 5, 6];
  return (
    <div className="px-5">
      <div>
        <header>
          <img src={mobileLogo} alt="" />
        </header>
        <div className="relative">
          <img src={paperImage} alt="" className="" />
          <img
            src={zitouna2}
            alt=""
            className="absolute right-[-60px] top-[-60px]"
          />
        </div>
        <h1 className="text-[48px] font-playfair text-primary font-black leading-[3.5rem]">
          DISCOVER OUR <br />{" "}
          <span className="text-secondary">NEW PRODUCTS</span>
        </h1>
        <p className="w-[306px] text-black">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et
        </p>
        <ArrowButton text="discover products" />
        <div className="mr-[-20px] relative">
          <img src={dabouza} alt="" />
          <div className="absolute top-0 right-6">
            {pagination.map((item) => {
              return (
                <div className="flex flex-col gap-2">
                  <p
                    className={`underline-offset-2 text-primary text-2xl font-playfair ${
                      item === 2 ? "!text-lowOpactiy border-b-2" : ""
                    }`}
                  >
                    0 {item}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="bg-primary p-5 flex justify-center w-[280px] absolute top-[60%] left-[10%]">
            <p className="text-[25px] text-lowOpactiy flex gap-8">
              <div className="flex gap-6">
                <img src={arrowLeftButton} />
                <span>Prev </span>
              </div>
              <span className="absolute h-[45px] w-[2px] bg-lowOpactiy left-[49%]"></span>{" "}
              <div className="flex gap-6">
                <span>Next</span>
                <img src={arrowRightButton} />
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
