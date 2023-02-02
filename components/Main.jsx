import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail, AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Main() {
return (
    <div id="home"className="w-full h-screen text-center">
    <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
        <p className="uppercase text-sm tracking-widest text-gray-600">
            {" "}
            Permítame presentarme
        </p>
        <h1 className="py-4 text-gray-700">
            Hi, I'am <span className="text-[#C58940]">Renz</span> :)
        </h1>
        <h1 className="py-2 text-gray-700">A Future Full-Stack Dev</h1>
        <p className="py-2 text-gray-600 max-w-[70%] m-auto">
            Just a <span className="text-[#C58940]">curious</span> student currently addicted to coding
        </p>
        <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
            <FaFacebook />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiFillInstagram />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
            <FaGithub />
            </div>
        </div>
        </div>
    </div>
    </div>
);
}

export default Main;
