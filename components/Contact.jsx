import React from "react";

function Contact() {
  return (
    <div className="w-full lg:h-screen">
      <div className="mx-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">

          {/* left */}
        <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="lg:p-4 h-full">
            <div>
              <img className="rounded-xl hover:scale-105 ease-in duration-300" src="" alt="" />
            </div>
          </div>
        </div>

          {/* right */}

        </div>
      </div>
    </div>
  );
}

export default Contact;
