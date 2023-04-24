import React from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import pic from "./../public/skills/pic.jpg";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div className="flex pb-8 justify-center">
            <div className="rounded-full w-40 h-40 overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full"
                src={pic}
                alt="/"
                width="160"
                height="160"
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
          <h1 className="py-2 text-gray-700">A Future Full-Stack Dev</h1>
          <p className="py-2 text-gray-600 max-w-[70%] m-auto">
            Just a <span className="text-[#C58940]">curious</span> student
            currently addicted to coding
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
        </div>
      </div>
    </div>
  );
}

export default Main;
