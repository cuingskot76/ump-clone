import React, { useEffect, useState } from "react";
const Hero = () => {
  const [checkWidth, setCheckWidth] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth >= 768 ? setCheckWidth(true) : setCheckWidth(false)
    );
  }, []);

  return (
    <div>
      {checkWidth ? (
        <header class="relative">
          <video
            autoPlay
            loop
            muted
            class="absolute top-[-12rem] z-[-1] w-auto min-w-full min-h-full "
          >
            <source src="../../assets/video/campus-tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </header>
      ) : (
        <div className="h-[40rem] relative">
          {/* <img className="w-full h-full object-cover bg-hero-img " /> */}
          {/* <img
          src="../../assets/hero-main/hero-main.webp"
          alt="hero-img"
          className="w-full h-full object-cover linear-image"
        /> */}
          <img className="linear-image w-full h-full object-cover" />
          <div className="absolute w-full top-1/4 left-1/5 text-white flex justify-center items-center text-center flex-col px-3">
            <div className="w-[5rem]">
              <img src="../../assets/logo/Logo UMP.png" alt="ump-logo" />
            </div>
            <h1 className="text-3xl sm:text-4xl my-3 text-[#bac0ce] font-[Inter]">
              Universitas Muhammadiyah Purwokerto
            </h1>
            <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl font-[poppins]">
              #weareump
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
