import React from "react";

function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p>About</p>
          <h2>Who I am</h2>
          <p>//I am a beginner developer</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            facilisis, orci sit amet rhoncus ornare, sem lacus placerat erat, in
            blandit lacus est a diam. Fusce arcu eros, congue ac lorem sit amet,
            iaculis molestie odio. Vivamus scelerisque risus a ante facilisis
            malesuada. Mauris sed orci at erat sodales sollicitudin eget nec
            purus. In hac habitasse platea dictumst. Sed ut cursus nunc. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur non elit at velit faucibus lacinia.
            Aliquam vel erat urna.
          </p>
          <p>Check out some of my latest projects</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default About;
