import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What can I do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/html.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justfify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/css.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justfify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/javascript.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justfify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/python.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justfify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/react.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justfify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/tailwind.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justfify-center">
                <h3>Tailwindcss</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/firebase.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justfify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/github1.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justfify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
