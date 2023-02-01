import React from "react";

function Contact() {
  return (
    <div className="w-full lg:h-screen">
      <div className="mx-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Let's get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">

          {/* left */}
        <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="lg:p-4 h-full">
            <div>
              <img className="rounded-xl hover:scale-105 ease-in duration-300" src="https://images.unsplash.com/photo-1612296727716-d6c69d2a2cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" />
            </div>
            <div>
              <h2 className="py-2">Name</h2>
              <p>Front-End Wanna Be</p>
              <p></p>
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
