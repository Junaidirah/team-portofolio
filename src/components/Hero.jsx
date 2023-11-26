import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          Pengerjaan Tugas Souvenir
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 uppercase">
          Web front end dan Backend
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-lg sm:text-md text-base font-bold py-4">
            Junaidi, Rakha, Ilham, dan Putra
          </p>
          <Typed
            className="md:text-lg sm:text-md text-base font-bold md:pl-4 pl-2"
            strings={["Jaya", "amazon"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>

        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Lets GO
        </button>
      </div>
    </div>
  );
};

export default Hero;
