import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowCircleRight } from "react-icons/fa";
import { orange500 } from "../../../App.module.css";
const MealsDetails = ({ meals }) => {
  const { strCategory, strInstructions, strYoutube, strMealThumb, strMeal } =
    meals;
  const price = Math.floor(Math.random() * 70);

  const handleButtonClick = () => {
    toast.success(" Order done");
  };
  return (
    <div className=" w-[600px] mx-auto bg-slate-900/25 p-5 rounded-2xl">
      <div className="text-white flex space-x-5 items-center">
        <img className="w-[100px] rounded-full" src={strMealThumb} alt="" />
        <div className="flex justify-between w-full items-center">
          <div>
            <h1 className="text-lg">{strMeal}</h1>
            <p>
              <small className="font-italianno text-2xl text-orange-500">
                {strCategory}
              </small>
            </p>
            <button
              onClick={handleButtonClick}
              className="flex items-center space-x-4 hover:text-orange-500 duration-200"
            >
              <h3>Order Now</h3>
              <h4 className="mt-1">
                <FaArrowCircleRight />
              </h4>
            </button>
          </div>

          <div className="ml-auto">
            <h1 className="text-4xl text-white font-mono font-bold">
              ${price}
            </h1>
          </div>
        </div>
      </div>


        <Toaster
          containerStyle={{
            top: 100,
            left: 20,
            bottom: 20,
            right: 20,
          }}
          toastOptions={{
            className: { orange500 },
            style: {
              background: "#fff",
              color: "rgb(249 115 22 )",
              width: "300px",
              fontWeight: "bold",
              zIndex: "200",
            },
            success: {
              iconTheme: {
                primary: "rgb(249 115 22 )",
                secondary: "#fff",
              },
            },
          }}
          duration="5000"
          position="top-center"
        />

    </div>
  );
};

export default MealsDetails;
