import React from "react";
import brand from "../assets/icon-brand-recognition.svg";
import records from "../assets/icon-detailed-records.svg";
import customizable from "../assets/icon-fully-customizable.svg";

const Statistics = () => {
  return (
    <div className="bg-[#BFBFBF] pt-48 pb-16 px-8 md:px-32 relative z-[80] text-center flex flex-col justify-center items-center">
      <div className="md:max-w-[500px]">
        <h1 className="font-poppins font-bold text-3xl md:text-4xl text-[#232127]">
          Advanced Statistics
        </h1>
        <p className="font-poppins text-[#59565e] py-4">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-20 md:mt-0">
        <div className="flex flex-col gap-8 items-center md:items-start md:text-left bg-white py-10 rounded-lg px-8">
          <div className="p-6 bg-[#3B3054] rounded-full mt-[-80px]">
            <img src={brand} alt="" />
          </div>
          <h1 className="text-[#232127] font-poppins font-bold text-2xl ">
            Brand Recognition
          </h1>
          <p className="font-poppins text-[#59565e]">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Brandede links helps instil confidence in your
            content.
          </p>
        </div>
        <div className="w-3 h-28 bg-[#2ACFCF] md:w-[100px] md:h-3"></div>
        <div className="flex flex-col gap-8 items-center md:items-start md:text-left bg-white py-10 rounded-lg px-8 md:mt-[100px]">
          <div className="p-6 bg-[#3B3054] rounded-full mt-[-80px]">
            <img src={records} alt="" />
          </div>
          <h1 className="text-[#232127] font-poppins font-bold text-2xl ">
            Detailed Records
          </h1>
          <p className="font-poppins text-[#59565e]">
            Gain insights into who is clicking your links. Knowing when and
            where people enagage with your content helps inform better
            decisions.
          </p>
        </div>
        <div className="w-3 h-28 bg-[#2ACFCF] md:w-[100px] md:h-3"></div>
        <div className="flex flex-col gap-8 items-center md:items-start md:text-left bg-white py-10 rounded-lg px-8 md:mt-[200px]">
          <div className="p-6 bg-[#3B3054] rounded-full mt-[-80px]">
            <img src={customizable} alt="" />
          </div>
          <h1 className="text-[#232127] font-poppins font-bold text-2xl ">
            Fully Customizable
          </h1>
          <p className="font-poppins text-[#59565e]">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
