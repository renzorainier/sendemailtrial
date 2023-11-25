import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  AiOutlineScan,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

function Main() {
  const [card1Expanded, setCard1Expanded] = useState(true);

  const toggleCard1 = () => setCard1Expanded(!card1Expanded);

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div className="flex pb-8 justify-center">
            <div className="rounded-full shadow-xl shadow-[#e8c284] w-40 h-40 overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src="/skills/pic.jpg"
                alt="/"
              />
            </div>
          </div>

          <p className="uppercase text-sm tracking-widest text-gray-600">
            {" "}
            Permítame presentarme
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I am <span className="text-[#C58940]">Renz</span> :)
          </h1>
          <h1 className="py-2 text-gray-700">A Future Software Engineer</h1>
          <p className="py-2 text-gray-600 max-w-[70%] m-auto">
            Currently taking BS <span className="text-[#C58940]">Computer Science</span> at TIP QC.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.facebook.com/renz.rainier212?mibextid=ZbWKwL">
              <div className="rounded-full shadow-lg shadow-[#e8c284] p-6 cursor-pointer hover:scale-110 ease-in duration-200">
                <FaFacebook />
              </div>
            </a>
            <a href="https://www.instagram.com/ridiculousrenz/?funlid=CfOWOmLowDRYXvqS">
              <div className="rounded-full shadow-lg shadow-[#e8c284] p-6 cursor-pointer hover:scale-110 ease-in duration-200">
                <AiFillInstagram />
              </div>
            </a>
            <div className="rounded-full shadow-lg shadow-[#e8c284] p-6 cursor-pointer hover:scale-110 ease-in duration-200">
              <AiOutlineMail />
            </div>
            <a href="https://github.com/renzorainier">
              <div className="rounded-full shadow-lg shadow-[#e8c284] p-6 cursor-pointer hover:scale-110 ease-in duration-200">
                <FaGithub />
              </div>
            </a>
          </div>
          <div className="bg-white mt-5 shadow-xl shadow-[#e8c284] rounded-xl">
            <div className="px-4 py-5 sm:p-6 cursor-pointer">
              <div className="flex items-center " onClick={toggleCard1}>
                <h3 className="text-lg m-auto text-gray-700">
                  Recent Projects
                </h3>
                <div className="flex items-center">
                  <FaChevronDown
                    className={`transition-transform ${
                      card1Expanded ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              {card1Expanded && (
                <div className="text-sm  pt-5  text-gray-500">
                  <a href="https://scans-scas.vercel.app">
                    <div className="bg-[#FAF8F1] rounded-lg shadow-lg shadow-[#e8c284] p-4 flex items-center justify-center">
                      <AiOutlineScan className="text-2xl  text-gray-700 mr-2" />
                      <h3 className="text-sm font-bold text-gray-700">
                        QR code attendance system
                      </h3>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
