import React from "react";
import Image from "next/image";
import pic from "./../public/skills/pic.jpeg";


function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#C58940]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            My name is{" "}
            <span className="text-[#C58940]">Renz Rainier Pasagdan</span>
          </p>
          <p className="py-2 text-gray-600">
          From a young age, I have possessed an innate curiosity and an unwavering desire to delve into uncharted territories. Constantly seeking fresh skills and expanding my knowledge base has always been my driving force. It was against this backdrop that I decided to embark on an exhilarating journey of learning how to code. Over the past few months, I have wholeheartedly embraced this challenge, dedicating myself to mastering the intricacies of programming. As a testament to my progress, I have successfully completed numerous projects, including the very website you are currently exploring.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-lg shadow-[#e8c284] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-500">
          <Image
            className="rounded-xl"
            src={pic}
            alt=""
            width="full"
            height="full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
