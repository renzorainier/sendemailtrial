import React from "react";
import Image from "next/image";


function About() {
  return (
    <div id="about"className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#C58940]">About</p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">My name is <span className="text-[#C58940]">Renz Rainier Pasagdan</span></p>
          <p className="py-2 text-gray-600">
            Even as a kid, I am always striving to explore new fields and just be curious in general. Continously looking for new  skills and knowledge to gain. I thought it would be a great challenge for myself to learn how to code. So for the past few months, that is exactly what I did which resulted in various projects including this website.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects</p>
        </div>
        <div className="w-full h-auto m-auto shadow-lg shadow-[#e8c284] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-500">
          <img className="rounded-xl" src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
