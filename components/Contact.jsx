import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi"

function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen ">
      <div className="mx-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#C58940]">
          Contact
        </p>
        <h2 className="py-4">Let's get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-[#e8c284] rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1612296727716-d6c69d2a2cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2"><span className="text-[#C58940]">Renz Rainier Pasagdan</span></h2>
                <p>A Future Full-Stack Dev</p>
                <p className="py-4">
                  You can very easily contact me through this social media platforms
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Social Media Accounts</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-[#e8c284] p-6 cursor-pointer hover:scale-110 ease-in duration-200">
                    <FaFacebook />
                  </div>
                  <div className="rounded-full shadow-lg shadow-[#e8c284] p-6 cursor-pointer hover:scale-110 ease-in duration-200">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-[#e8c284] p-6 cursor-pointer hover:scale-110 ease-in duration-200">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-[#e8c284] p-6 cursor-pointer hover:scale-110 ease-in duration-200">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-[#e8c284] rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="boarder-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone Number</label>
                    <input
                      className="boarder-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                      className="boarder-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                    />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <textarea className="boarder-2 rounded-lg p-3 border-gray-300" rows="10"></textarea>
                </div>
                <button className="w-full p-4 shadow-[#e8c284] mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
          <div className="rounded-full shadow-lg shadow-[#e8c284] p-6 cursor-pointer hover:scale-110 ease-in duration-200">
              <HiOutlineChevronDoubleUp className="text-[#e8c284]" size={30}/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
