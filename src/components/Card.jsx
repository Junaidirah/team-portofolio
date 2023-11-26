import React from "react";
import rahmat from "../asset/rahmat.JPG";
import putraaa from "../asset/putraaa.jpg";
import ilham from "../asset/ilham.jpg";
import rakha from "../asset/rakha.PNG";
const Cards = () => {
  return (
    <div className="text-[#00df9a] text-center  ">
      <h1 className="text-md text-2xl md:text-4xl lg:text-5xl font-bold ">
        OUR MEMBER
      </h1>
      <div className="w-full py-[10rem] px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={rahmat}
              alt="/"
            />
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8 text-[#00df9a]">
                Junaidi Rahmat
              </p>
              <p className="py-2 border-b mx-8 text-[#00df9a]">1104220015</p>
              <p className="py-2 border-b mx-8 text-[#00df9a]">TF4602</p>
              <p className="py-2 border-b mx-8 text-[#00df9a]">
                semua akan saya hadapi tapi dengan makan dulu
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-black"
              src={putraaa}
              alt="/"
            />
            <div className="text-center font-medium text-[#00df9a]">
              <p className="py-2 border-b mx-8 mt-8 text-[#00df9a]">
                {" "}
                Putra Alpa Omega Bangun
              </p>
              <p className="py-2 border-b mx-8text-[#00df9a]">1101220041</p>
              <p className="py-2 border-b mx-8text-[#00df9a]">TT4602</p>
              <p className="py-2 border-b mx-8text-[#00df9a]">
                personal yang senang memecahkan suatu masalah. apalagi
                membuatnya wkwkkw
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={rakha}
              alt="/"
            />
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8 text-[#00df9a]">
                {" "}
                Rakha Fabianto
              </p>
              <p className="py-2 border-b mx-8 text-[#00df9a]">1101223067</p>
              <p className="py-2 border-b mx-8 text-[#00df9a]">TT4602</p>
              <p className="py-2 border-b mx-8 text-[#00df9a]">
                Seorang mahasiswa yang senang untuk meng-eksplor mengenai
                teknologi, informasi, internet, dan industri sosial media
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={ilham}
              alt="/"
            />
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8 text-[#00df9a]">
                Ilham Sadewo Haryadi
              </p>
              <p className="py-2 border-b mx-8 text-[#00df9a]">1101223412</p>
              <p className="py-2 border-b mx-8 text-[#00df9a]">TT4602</p>
              <p className="py-2 border-b mx-8 text-[#00df9a]">
                Memiliki keinginan untuk berkembang dengan menambah wawasan dan
                selalu ingin mempelajari hal-hal baru.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
