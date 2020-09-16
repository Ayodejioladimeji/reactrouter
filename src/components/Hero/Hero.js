import React from "react";
import superman from "./superman.jpg";

const Hero = ({ addCount, sCount }) => {
  return (
    <>
      <div
        className=" w-full flex h-screen justify-center"
        style={{
          backgroundImage: `url(${superman})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="font-extrabold m-3 text-blue-700">
          <p className="text-6xl ">Welcome to my hero</p>

          <div>
            <button
              className="bg-blue-700 text-white px-2 py-1 m-2 rounded"
              onClick={() => addCount()}
            >
              Add Count
            </button>
            <button
              className="bg-blue-700 text-white px-2 m-2 py-1 rounded"
              onClick={() => sCount()}
            >
              Subtract
            </button>
          </div>
        </div>
        <div className="text-4xl font-bold flex w-full h-full justify-center text-blue-300">
          Smile to my hero
        </div>
      </div>
    </>
  );
};

export default Hero;
