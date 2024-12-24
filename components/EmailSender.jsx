import React from 'react';

const EmailSender = () => {
  const handleSendEmail = async () => {
    try {
      const response = await fetch('/api/route', {
        method: 'POST', // Use POST since the API route expects a POST request.
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
      <button onClick={handleSendEmail} className="bg-blue-500 text-white p-2 rounded">
        Send Email
      </button>
    </div>
  );
};

export default EmailSender;
