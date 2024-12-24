import React from 'react';

const EmailTemplate = ({ firstName, phoneNumber, senderEmail, message }) => (
  <div className="bg-gray-100 p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
    <h1 className="text-3xl font-semibold text-gray-800 mb-4">
      Hello, {firstName}!
    </h1>
    <p className="text-lg text-gray-600 mb-6">
      You've received a new message. Below are the details:
    </p>

    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <strong className="block text-xl text-gray-700 mb-2">Sender's Email:</strong>
      <p className="text-sm text-gray-600">{senderEmail}</p>
    </div>

    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <strong className="block text-xl text-gray-700 mb-2">Phone Number:</strong>
      <p className="text-sm text-gray-600">{phoneNumber}</p>
    </div>

    <div className="bg-white p-4 rounded-lg shadow-sm">
      <strong className="block text-xl text-gray-700 mb-2">Message:</strong>
      <p className="text-sm text-gray-600 whitespace-pre-wrap break-words">
        {message}
      </p>
    </div>
  </div>
);

export default EmailTemplate;
