import React from "react";
import heroBg from "../../../assets/vegetables-set-left-black-slate.jpg";
const Hero = () => {
  return (
    <div className="relative text-white">
      <img className="w-[4000px]" src={heroBg} alt="logo" />
      <div className="absolute bottom-[20%] left-24 max-w-2xl leading-relaxed ">

      <h1 className="text-7xl font-bold ">We Create
      Sweet Memories
        </h1>
        <h1 className="py-3 text-6xl font-bold">THE BEST RESTAURANT IN CITY</h1>

        <button className="px-7 py-3 hover:shadow-xl rounded-xl text-2xl text-white bg-orange-500 max-w-lg w-full  hover:shadow-orange-900 duration-500 my-4 font-bold">Your Meals</button>
      </div>

    </div>
  );
};

export default Hero;
