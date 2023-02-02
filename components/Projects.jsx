import Link from "next/link";
import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="p-4 text-xl tracking-widest uppercase text-[#C58940]">
          Projects
        </p>
        <h2 className="p-4">What I've Build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Twitch App"
            backgroundImg={twitchImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={netflixImg}
            projectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
