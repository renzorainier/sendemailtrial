import React from "react";
import Link from "next/link";
import { AiOutlineMail, AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi"
import EmailSender from "./EmailSender"
import Image from 'next/image';
import work from "../public/assets/work.png";

function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen ">
      <div className="mx-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#C58940]">
          Contact
        </p>
        <h2 className="py-4">Lets get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-[#e8c284] rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={work} // Local path
                  alt="Renz Rainier Pasagdan"
                  width={871} // Adjust dimensions as needed
                  height={580}
                />
              </div>
              <div>
                <h2 className="py-2">
                  <span className="text-[#C58940]">Renz Rainier Pasagdan</span>
                </h2>
                <p>Your Future Software Engineer</p>
                <p className="py-4">
                  You can very easily contact me through this social media platforms
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Social Media Accounts</p>
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

          {/* right */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-[#e8c284] rounded-xl lg:p-4">
            <EmailSender />
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-[#e8c284] p-6 cursor-pointer hover:scale-110 ease-in duration-200">
              <HiOutlineChevronDoubleUp className="text-[#e8c284]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
