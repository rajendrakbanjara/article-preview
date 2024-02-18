"use client";
import { useState } from "react";
import Image from "next/image";

const Body = () => {
  const [show, setShow] = useState(false);
  const Share = () => {
    if (show == true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <div className="container flex justify-center content-center h-screen bg-slate-200">
      <div className="card-Container lg:ml-20 lg:flex lg:w-[60%] w-[90%] lg:items-center mt-10 lg:mt-0 overflow-hidden">
        {/* Share Popup */}
        {show && (
          <div className="absolute bg-slate-600 lg:w-[12rem] w-[90%] lg:px-5 lg:py-[10px] lg:rounded-lg lg:ml-[41rem] lg:mt-[3.5rem] mt-[34.7rem] rounded-b-lg">
            <div className="lg:bg-slate-600 lg:h-4 lg:w-4 lg:absolute lg:rotate-45 lg:top-9 lg:left-[88px]"></div>
              <ul className="flex justify-between items-center text-white">
                <li className="font-share font-thin"><span className="text-xs">SHARE</span></li>
                <li><img src="/images/icon-facebook.svg" className="lg:w-4"></img></li>
                <li><img src="/images/icon-twitter.svg" className="lg:w-4"></img></li>
                <li><img src="/images/icon-pinterest.svg" className="lg:w-4"></img></li>
              </ul>
          </div>
        )}

        <div className="left-view lg:w-[19rem] lg:h-[19rem]  lg:overflow-hidden lg:rounded-s-lg">
          <img
            src="/images/drawers.jpg"
            alt="show-peice"
            className="object-cover lg:h-full lg:w-[43rem] object-left rounded-t-lg lg:rounded-t-none"
          ></img>
        </div>

        <div className="view-right lg:h-[19rem] lg:w-[55%] lg:p-10 p-8 bg-white lg:rounded-r-lg rounded-b-lg lg:rounded-l-none">
          <p className="font-bold text-gray-500 lg:text-xl">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </p>
          <p className="text-gray-400 text-sm lg:pt-5 pt-3">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and unvinting. I've got some simple tips to help
            you make any room feel complete.
          </p>

          <div className="bottom-section mt-5 relative flex items-center justify-between">
            <div className="image flex items-center">
              <div className="user-profile mr-5">
                <img
                  src="/images/avatar-michelle.jpg"
                  alt="prifile-picture"
                  className="w-12 rounded-full"
                ></img>
              </div>
              <div className="user-name">
                <p className="text-sm font-bold text-gray-500">
                  Michelle Appleton
                </p>
                <p className="text-xs text-gray-400">28 Jun 2020</p>
              </div>
            </div>
            <div className="share-button" onClick={Share}>
              <div className="bg-slate-200 p-2 rounded-full hover:bg-slate-500 ">
                <img src="/images/icon-share.svg"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
