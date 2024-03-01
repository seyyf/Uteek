import React from "react";
import warketZitoun from "../assets/war9et zitoun 2.png";
import dabouza1 from "../assets/Groupe de masques 10.png";
import dabouza2 from "../assets/Groupe de masques 9.png";
import dabouza3 from "../assets/Groupe de masques 8.png";
import bg1 from "../assets/Tracé 51490.svg";
import bg2 from "../assets/Tracé 51492.svg";
import bg3 from "../assets/Tracé 51491.svg";
import backgroundMobileImage from "../assets/Groupe 14282.png";
import logoNesma from "../assets/Logo_de_Nessma-1.png";
import freshMarket from "../assets/1200px-The_Fresh_Market_logo.svg-1.png";
const Products = () => {
  const products = [
    { dabouza: dabouza1, bg: bg1 },
    { dabouza: dabouza2, bg: bg2 },
    { dabouza: dabouza3, bg: bg3 },
  ];

  return (
    <div className="mt-16 relative ">
      <div className="flex justify-center ">
        <h1 className="uppercase text-[48px] text-secondary font-playfair font-black">
          our products
        </h1>
      </div>
      <img src={warketZitoun} className="absolute right-0 top-16" />
      <div className="flex flex-col justify-center">
        {products.map((product, index) => {
          return (
            <div className="relative">
              <img src={product.dabouza} className="w-[600px] z-10 relative" />
              <img
                src={product.bg}
                className={`absolute top-20 h-[430px] ${
                  index === 2 ? "left-[30px]" : ""
                }`}
              />
              <div className="flex flex-col items-center">
                <p className="uppercase text-[21px] text-oily font-playfair">
                  LOREM IPSUM DOLOR SIT AMET
                </p>
                <p className="">Lorem ipsum dolor sit amet, consetetur</p>

                <button className="uppercase flex justify-center w-[90%] px-16 py-2 mt-8 border-oily border-2 text-lowOpactiy font-playfair text-[19px] font-semibold">
                  see product
                </button>
              </div>
            </div>
          );
        })}
        <div className="mt-10">
          <p className="text-[48px] text-center uppercase font-playfair text-lowOpactiy font-black">
            they <span className="!text-oily">trust us</span>
          </p>
          <div className="flex justify-between gap-5 mt-2">
            <img src={logoNesma} />
            <img src={freshMarket} />
            <img src={logoNesma} />
            <img src={freshMarket} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
