import React from 'react';

const EmailTemplate = ({ firstName, phoneNumber, senderEmail, message }) => (
  <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
    <h1 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
      Hello, this email is from {firstName}!
    </h1>
    <p className="text-xl text-gray-700 mb-8 text-center">
      You've received a new message. Below are the details:
    </p>

    <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
      <strong className="block text-2xl text-gray-800 mb-2">Sender's Email:</strong>
      <p className="text-lg text-gray-600">{senderEmail}</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
      <strong className="block text-2xl text-gray-800 mb-2">Phone Number:</strong>
      <p className="text-lg text-gray-600">{phoneNumber}</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-lg">
      <strong className="block text-2xl text-gray-800 mb-2">Message:</strong>
      <p className="text-lg text-gray-600 whitespace-pre-wrap break-words">
        {message}
      </p>
    </div>
  </div>
);

export default EmailTemplate;
