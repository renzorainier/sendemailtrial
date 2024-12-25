import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import teen from "./../public/assets/teen.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow); // Cleanup listener
  }, []);

  return (
    <div
      className={`fixed w-full h-20 z-[100] transition-shadow duration-300 ${
        shadow ? "shadow-xl shadow-[#e8c284]" : ""
      } bg-[#f3efde]`}
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div>
          <Image src={teen} width="70" height="70" alt="Logo" />
        </div>
        <div>
          <ul className="hidden md:flex">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <Link key={item} href={`/#${item.toLowerCase()}`}>
                <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#C58940] transition-all duration-300 cursor-pointer">
                  {item}
                </li>
              </Link>
            ))}
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={`fixed left-0 top-0 w-full h-screen bg-black/70 transition-opacity duration-300 ${
          nav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-tl from-[#FAF8F1] to-[#FAEAB1] p-10 transition-transform duration-500 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex w-full items-center justify-between">
            <Image src={teen} width="70" height="70" alt="Logo" />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-[#e8c284] p-3 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-[#e8c284] my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              Join me to build something legendary together!
            </p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <Link key={item} href={`/#${item.toLowerCase()}`}>
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm cursor-pointer hover:text-[#C58940] transition-all duration-300"
                  >
                    {item}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="py-4">
              <p className="uppercase tracking-widest text-[#C58940]">
                Let us Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                {[FaFacebook, FaGithub, AiOutlineMail, BsFillPersonLinesFill].map(
                  (Icon, index) => (
                    <div
                      key={index}
                      className="rounded-full shadow-lg shadow-[#e8c284] p-3 cursor-pointer hover:scale-110 hover:shadow-[#C58940] transition-all duration-300"
                    >
                      <Icon />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
