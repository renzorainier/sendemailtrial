import React, { useState } from 'react';

const EmailSender = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: '', // New state for the message
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: ['renzopasagdan@gmail.com'], // Fixed recipient email
          subject: formData.subject,
          firstName: formData.name,
          phoneNumber: formData.phoneNumber,
          senderEmail: formData.email,
          message: formData.message, // Send the message field
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Email sent successfully!');
        console.log('Response:', result);
      } else {
        alert('Failed to send email.');
        console.error('Error:', result.error);
      }
    } catch (error) {
      alert('An error occurred while sending the email.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="col-span-3 w-full h-auto shadow-xl shadow-[#e8c284] rounded-xl lg:p-4">
      <div className="p-4">
        <form onSubmit={handleSendEmail}>
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">Name</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">Phone Number</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Subject</label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300"
              rows="5"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Message</label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300"
              rows="10"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="w-full p-4 shadow-[#e8c284] mt-4">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailSender;

// import React from 'react';

// const EmailSender = () => {
//   const handleSendEmail = async () => {
//     try {
//       const response = await fetch('/api/email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           to: ['renzopasagdan@gmail.com'],
//           subject: 'Hello world',
//           firstName: 'John',
//         }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert('Email sent successfully!');
//         console.log('Response:', result);
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
//     <div>
//       <button onClick={handleSendEmail} className="bg-blue-500 text-white p-2 rounded">
//         Send Email
//       </button>
//     </div>
//   );
// };

// export default EmailSender;
