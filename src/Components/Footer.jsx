import React from "react";
import logo from "/icons/ST-logo.png";
import twitter from "/icons/twitter.png";
import youtube from "/icons/youTube.png";

function Footer() {
  return (
    <div className="w-full h-full ">
      {/* _________________footer________________________ */}
      <div className="w-full h-full bg-[#1e1d1d] px-20 lg:px-20">
        <div className="w-full h-full justify-between   flex py-10 ">
          <img className=" h-9 bg-center object-cover" src={logo} alt="" />

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Send your message"
              className="px-4 py-2 border border-gray-400 bg-transparent mb-4 text-white focus:outline-none"
            />
            <button className="bg-red-500 px-4 py-[9px]  mb-4 text-white">
              Send Mail
            </button>
          </div>
        </div>

        {/* _____________________text________________ */}

        <div>
          <div className="flex lg:flex-row flex-col gap-10 py-10 w-full">
            <div className="">
              <h2 className="text-xl font-semibold mb-4 text-white">
                Earn Money
              </h2>
              <ul className="text-gray-400 text-md space-y-1">
                <li>Oil colors</li>
                <li>Drawing inks</li>
                <li>Water colors</li>
                <li>Poster colors</li>
                <li>Fluid colors</li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold mb-4 text-white">
                Artist & Painters
              </h2>
              <ul className="text-gray-400 text-md space-y-1">
                <li>Art makers</li>
                <li>Sketch books</li>
                <li>Drawing pencils</li>
                <li>Crayon pack</li>
                <li>Sketch pens</li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold mb-4 text-white">
                Student Gallery
              </h2>
              <ul className="text-gray-400 text-md space-y-1">
                <li>Interior decoration</li>
                <li>Exterior decoration</li>
                <li>Events</li>
                <li>Contribution</li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold mb-4 text-white">
                My Schools
              </h2>
              <ul className="text-gray-400 text-md space-y-1">
                <li>Interior decoration</li>
                <li>Exterior decoration</li>
                <li>Events</li>
                <li>Contribution</li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold mb-4 text-white">
                Hobby Box
              </h2>
              <ul className="text-gray-400 text-md space-y-1">
                <li>Do it yourself</li>
                <li>Products & membership</li>
                <li>Events</li>
                <li>Contribution</li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold mb-4 text-white">
                About us
              </h2>
              <ul className="text-gray-400 text-md space-y-1">
                <li>Our long & short story</li>
                <li>FAQ’s</li>
              </ul>
            </div>
          </div>
        </div>

        {/* _______________icons_________ */}

        <div className="flex w-full h-full justify-between items-center pb-10">
          <div className="flex gap-6 text-white text-md items-center">
            <p>Privacy</p>
            <div className="w-[1px] h-8 bg-white"></div>
            <p>Disclaimer</p>
          </div>

          <div className="flex items-center text-xl font-semibold gap-3">
            <p className="text-white">Follow us</p>
            <img className="h-10" src={youtube} alt="" />
            <img className="h-10 bg-white rounded-lg" src={twitter} alt="" />
          </div>
        </div>

        <div className="flex justify-center w-full pb-12">
          <h1 className="text-gray-400">
            ©All rights reserved to schooltools 2025
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
