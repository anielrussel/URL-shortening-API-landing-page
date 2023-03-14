import React, { useState, useEffect } from "react";
import linkBgMobile from "../assets/bg-shorten-mobile.svg";
import linkBgDesktop from "../assets/bg-shorten-desktop.svg";
import axios from "axios";
import { motion } from "framer-motion";

const Link = () => {
  const [url, setUrl] = useState({
    //controlled the form
    textUrl: "",
  });

  const [urls, setUrls] = useState(() => {
    return JSON.parse(localStorage.getItem("urls")) || [];
  }); //added a new url to the array and using local storage api(getting the item form local storage)

  const [showError, setShowError] = useState(false); //show error message when input field is empty

  const [showUrl, setShowUrl] = useState(false); //show the url UI

  const [copiedIndex, setCopiedIndex] = useState(null); //state that changes button text
  const [activeIndex, setActiveIndex] = useState(null); //state that set active in button

  useEffect(() => {
    window.localStorage.setItem("urls", JSON.stringify(urls));
  }, [urls]); //setting the item of urls state to local storage

  useEffect(() => {
    const data = window.localStorage.getItem("urls"); //setting the setShowUrl to true so that the showUrl 
    if (data !== null) {                               //will render even the browser is refreshed using local storage
      setShowUrl(true);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("showUrl", showUrl);
  }, [showUrl]);

  useEffect(() => {
    const showUrlValue = window.localStorage.getItem("showUrl");
    if (showUrlValue === "true") {
      setShowUrl(true);
    }
  }, []);

  const copyToClipboard = (shortUrl, index) => {
    navigator.clipboard.writeText(shortUrl); //copy the shortUrl text when clicked
    setCopiedIndex(index);
    setActiveIndex(index);
  };

  async function shortenUrl(longUrl) {
    try {
      const response = await axios.post(
        `https://api.shrtco.de/v2/shorten?url=${longUrl}`
      );
      return response.data.result.full_short_link2;
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUrl((prevUrl) => ({
      ...prevUrl,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const longUrl = url.textUrl;
    const shortenedUrl = await shortenUrl(longUrl);
    const newUrl = { textUrl: url.textUrl, shortUrl: shortenedUrl };
    if (url.textUrl === "") {
      setShowError(true);
      setShowUrl(false);
    } else {
      setShowError(false);
      setShowUrl(true);
      setUrls((prevUrls) => [...prevUrls, newUrl]);
      setUrl((prevUrl) => ({ ...prevUrl, textUrl: "" })); // reset the input field
    }
  }

  return (
    <div className="px-6 md:px-32 mb-[-80px] relative z-[90]">
      <div
        className={
          !showError
            ? "bg-[#3B3054] rounded-lg md:h-[150px] h-[180px] overflow-clip md:flex items-center justify-center"
            : "bg-[#3B3054] rounded-lg md:h-[150px] h-[210px] overflow-clip md:flex items-center justify-center"
        }
      >
        <img
          src={linkBgMobile}
          alt=""
          className="absolute z-[1] ml-40 w-[250px] md:hidden"
        />
        <img
          src={linkBgDesktop}
          alt=""
          className="z-[1] w-[1500px] hidden md:block"
        />
        <form
          className="flex flex-col gap-4 relative md:absolute z-[2] pt-8 px-8 md:flex-row md:pt-0 md:w-[80%] md:items-center md:justify-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-full">
            <input
              type={"text"}
              placeholder="Shorten a link here..."
              className={
                showError
                  ? "rounded-lg py-3 pl-2 md:w-full outline-none border-4 border-[#F46262]"
                  : "rounded-lg py-3 pl-2 md:w-full outline-none"
              }
              name="textUrl"
              value={url.textUrl}
              onChange={handleChange}
            />
            {showError && (
              <p className="text-[#F46262] italic md:mb-[-26px]">
                Please add a link
              </p>
            )}
          </div>
          <button
            className="bg-[#2ACFCF] py-3 px-10 rounded-lg text-white font-poppins text-lg font-semibold hover:bg-[#2acfcf81] md:w-[20%]"
            onClick={() => setShowUrl(true)}
          >
            Shorten It!
          </button>
        </form>
      </div>
      {urls.map((url, index) => (
        <motion.div
          key={index}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          {showUrl && (
            <div className="bg-white p-6 rounded-lg mt-6 shadow-lg flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                {url && (
                  <p className="pb-4 md:pb-0 border-b border-gray-400 font-poppins md:border-none">
                    {url.textUrl}
                  </p>
                )}
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                {url.shortUrl && (
                  <p className="pt-4 md:pt-0 font-poppins text-[#2ACFCF]">
                    {url.shortUrl}
                  </p>
                )}
                <button
                  className={`py-2 font-poppins text-white rounded-lg mt-4 md:mt-0 md:px-10 ${
                    activeIndex === index ? "bg-[#3B3054]" : "bg-[#2ACFCF]"
                  }`}
                  onClick={() => copyToClipboard(url.shortUrl, index)}
                >
                  {copiedIndex === index ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Link;
