import React, { useState } from 'react';

const EmailSender = () => {
  const [firstName, setFirstName] = useState('John');

  const handleSendEmail = async () => {
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: ['renzopasagdan@gmail.com'],
          subject: 'Hello world',
          firstName,
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
    <div>
      <h2>Send Email</h2>
      <button onClick={handleSendEmail} className="bg-blue-500 text-white p-2 rounded">
        Send Email
      </button>
    </div>
  );
};

export default EmailSender;
