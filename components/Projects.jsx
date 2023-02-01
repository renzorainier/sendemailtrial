import React from "react";

function Projects() {
  return (
    <div className="w-ful">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widestuppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="p-4">What I've Build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
