import React from "react";
import hero from "../assets/illustration-working.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col pb-24 md:pb-5 md:flex-row-reverse md:items-center md:justify-center md:pl-28 md:pt-10 overflow-hidden">
      <div className="absolute md:relative ml-10 z-[-1]">
        <motion.img src={hero} alt="" className="md:max-w-[1000px]"
          initial={{ y: -10, opacity: 0}}
          animate={{ y: 0, opacity: 1}}
          transition={{ type: 'tween', duration: 1}}
        />
      </div>
      <div className="mt-[380px] md:mt-0 md:text-left md:items-start flex flex-col items-center text-center px-6">
        <h1 className="font-poppins text-5xl md:text-6xl font-bold text-[#232127]">
          More than just shorter links
        </h1>
        <p className="font-poppins text-[#9E9AA7] text-lg py-6">
          Build your brand's recognition and detailed insights on how links are
          performing.
        </p>
        <button className="bg-[#2ACFCF] py-4 px-10 rounded-full text-white font-poppins text-lg font-semibold hover:bg-[#2acfcf81]">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
