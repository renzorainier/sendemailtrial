import React from "react";

function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e1]">About</p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">//I am a beginner developer</pcal>
          <p className="py-2 text-gray-600">
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
        <div>
          <img src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
