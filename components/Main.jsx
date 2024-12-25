import React, { useState } from "react";
import { FaChevronDown, FaFacebook, FaGithub } from "react-icons/fa";
import { AiOutlineScan, AiOutlineMail, AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

function Main() {
  const [card1Expanded, setCard1Expanded] = useState(true);

  const toggleCard1 = () => setCard1Expanded(!card1Expanded);

  return (
    <div id="home" className="w-full h-screen flex items-center justify-center ">
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-8 lg:px-16 text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="rounded-full shadow-xl shadow-[#e8c284] w-40 h-40 overflow-hidden">
            <Image
              className="object-cover"
              src="/skills/igop.jpg" // Local path to the image
              alt="Profile"
              width={160} // Width of the image
              height={160} // Height of the image
            />
          </div>
        </div>

        {/* Introduction */}
        <p className="text-gray-600 tracking-widest">Permítame presentarme</p>
        <h1 className="py-4 text-3xl sm:text-4xl font-semibold text-gray-700">
          Hi, I am <span className="text-[#C58940]">Renz</span> :)
        </h1>
        <h2 className="py-2 text-2xl sm:text-3xl text-gray-700">
          A Future Software Engineer
        </h2>
        <p className="py-2 text-gray-600 max-w-[70%] mx-auto">
          Currently a <span className="text-[#C58940]">2nd-year</span> student
          taking BS <span className="text-[#C58940]">Computer Science</span> at TIP QC.
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-6 mt-6">
          <a
            href="https://www.facebook.com/renz.rainier212?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full shadow-lg shadow-[#e8c284] p-4 hover:scale-110 hover:shadow-[#C58940] transition-all duration-300"
          >
            <FaFacebook className="text-xl" />
          </a>
          <a
            href="https://www.instagram.com/ridiculousrenz/?funlid=CfOWOmLowDRYXvqS"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full shadow-lg shadow-[#e8c284] p-4 hover:scale-110 hover:shadow-[#C58940] transition-all duration-300"
          >
            <AiFillInstagram className="text-xl" />
          </a>
          <a
            href="mailto:renzorainier@example.com"
            className="rounded-full shadow-lg shadow-[#e8c284] p-4 hover:scale-110 hover:shadow-[#C58940] transition-all duration-300"
          >
            <AiOutlineMail className="text-xl" />
          </a>
          <a
            href="https://github.com/renzorainier"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full shadow-lg shadow-[#e8c284] p-4 hover:scale-110 hover:shadow-[#C58940] transition-all duration-300"
          >
            <FaGithub className="text-xl" />
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default Main;
