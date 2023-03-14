import React from "react";
import footer from "../assets/bg-boost-desktop.svg";
import footerlogo from "../assets/logofooter.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#3B3054] flex flex-col justify-center items-center h-auto">
        <img src={footer} alt="" className="h-[350px]" />
        <div className="absolute flex flex-col justify-center items-center gap-5 py-8">
          <h1 className="font-poppins text-white text-3xl font-bold">
            Boost your links today
          </h1>
          <button className="bg-[#2ACFCF] py-4 px-10 rounded-full text-white font-poppins text-lg font-semibold hover:bg-[#2acfcf81]">
            Get Started
          </button>
        </div>
      </div>
      <footer className="bg-[#35323E] flex flex-col justify-center items-center py-16 gap-12 md:flex-row md:justify-around md:items-start">
        <div>
          <img src={footerlogo} alt="" />
        </div>
        <div className="flex flex-col gap-16 md:flex-row md:items">
            <div className="flex flex-col justify-center items-center md:items-start gap-2">
                <h1 className="text-white font-bold text-lg font-poppins pb-4">Features</h1>
                <a className="text-[#9E9AA7] font-poppins hover:text-[#2ACFCF]" href="/">Link Shortening</a>
                <a className="text-[#9E9AA7] font-poppins hover:text-[#2ACFCF]" href="/">Branded Links</a>
                <a className="text-[#9E9AA7] font-poppins hover:text-[#2ACFCF]" href="/">Analytics</a>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start gap-2">
                <h1 className="text-white font-bold text-lg font-poppins pb-4">Resources</h1>
                <a className="text-[#9E9AA7] font-poppins hover:text-[#2ACFCF]" href="/">Blog</a>
                <a className="text-[#9E9AA7] font-poppins hover:text-[#2ACFCF]" href="/">Developers</a>
                <a className="text-[#9E9AA7] font-poppins hover:text-[#2ACFCF]" href="/">Support</a>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start gap-2">
                <h1 className="text-white font-bold text-lg font-poppins pb-4">Company</h1>
                <a className="text-[#9E9AA7] font-poppins hover:text-[#2ACFCF]" href="/">About</a>
                <a className="text-[#9E9AA7] font-poppins hover:text-[#2ACFCF]" href="/">Our Team</a>
                <a className="text-[#9E9AA7] font-poppins hover:text-[#2ACFCF]" href="/">Contact</a>
            </div>
        </div>
        <div className="flex justify-center items-center gap-8" >
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={pinterest} alt="" />
            <img src={instagram} alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
