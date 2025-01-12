import axios from "axios";
import { useState } from "react";

const EmailSender = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");

  const sendEmail = async () => {
    try {
      const response = await axios.post("/api/send-email", {
        email,
        subject,
        name,
        event,
        date,
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Send Email</h1>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Recipient Email"
          className="w-full p-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-2 border border-gray-300 rounded"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="text"
          placeholder="Recipient Name"
          className="w-full p-2 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event Name"
          className="w-full p-2 border border-gray-300 rounded"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event Date"
          className="w-full p-2 border border-gray-300 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          type="button"
          onClick={sendEmail}
          className="w-full py-2 bg-blue-500 text-white rounded"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default EmailSender;


//working ver before night
// import axios from "axios";
// import { useState } from "react";

// const EmailSender = () => {
//   const sendEmail = async () => {
//     try {
//       const response = await axios.post("/api/send-email");
//       alert(response.data.message);
//     } catch (error) {
//       console.error("Error sending email:", error);
//       alert("Failed to send email.");
//     }
//   };

//   return (
//     <div>
//       <h1>Send Email</h1>
//       <button onClick={sendEmail}>Send Email</button>
//     </div>
//   );
// };

// export default EmailSender;

// import React, { useState } from 'react';

// const EmailSender = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phoneNumber: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSendEmail = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           to: ['renzopasagdan@gmail.com'],
//           subject: formData.subject,
//           firstName: formData.name,
//           phoneNumber: formData.phoneNumber,
//           senderEmail: formData.email,
//           message: formData.message,
//         }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert('Email sent successfully!');
//         console.log('Response:', result);
//         setFormData({
//           name: '',
//           phoneNumber: '',
//           email: '',
//           subject: '',
//           message: '',
//         });
//       } else {
//         alert('Failed to send email.');
//         console.error('Error:', result.error);
//       }
//     } catch (error) {
//       alert('An error occurred while sending the email.');
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="col-span-3 w-full h-auto shadow-[#e8c284] rounded-xl  ">
//       <div className="p-6">
//         <form onSubmit={handleSendEmail}>
//           <div className="grid md:grid-cols-2 gap-6 w-full">
//             {/* Name Field */}
//             <div className="flex flex-col">
//               <label htmlFor="name" className="uppercase text-sm font-bold mb-2">Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="border-2 rounded-lg p-3 border-gray-300 focus:outline-none focus:border-[#e8c284]"
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>
//             {/* Phone Number Field */}
//             <div className="flex flex-col">
//               <label htmlFor="phoneNumber" className="uppercase text-sm font-bold mb-2">Phone Number</label>
//               <input
//                 id="phoneNumber"
//                 type="text"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 className="border-2 rounded-lg p-3 border-gray-300 focus:outline-none focus:border-[#e8c284]"
//                 placeholder="Enter your phone number"
//               />
//             </div>
//           </div>

//           {/* Email Field */}
//           <div className="flex flex-col py-4">
//             <label htmlFor="email" className="uppercase text-sm font-bold mb-2">Email</label>
//             <input
//               id="email"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="border-2 rounded-lg p-3 border-gray-300 focus:outline-none focus:border-[#e8c284]"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           {/* Subject Field */}
//           <div className="flex flex-col py-4">
//             <label htmlFor="subject" className="uppercase text-sm font-bold mb-2">Subject</label>
//             <textarea
//               id="subject"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="border-2 rounded-lg p-3 border-gray-300 focus:outline-none focus:border-[#e8c284]"
//               rows="3"
//               placeholder="Enter the email subject"
//               required
//             ></textarea>
//           </div>

//           {/* Message Field */}
//           <div className="flex flex-col py-4">
//             <label htmlFor="message" className="uppercase text-sm font-bold mb-2">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="border-2 rounded-lg p-3 border-gray-300 focus:outline-none focus:border-[#e8c284]"
//               rows="6"
//               placeholder="Enter your message"
//               required
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-[#e8c284] text-white font-bold p-4 rounded-lg shadow-md hover:bg-[#d1a869] transition duration-200"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EmailSender;
