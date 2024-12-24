import React from 'react';

const EmailTemplate = ({ firstName, phoneNumber, senderEmail, message }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f7f7f7', color: '#333' }}>
    <h1 style={{ color: '#2c3e50' }}>Hello, {firstName}!</h1>
    <p style={{ fontSize: '16px' }}>You've received a new message. Here are the details:</p>
    <div style={{ marginBottom: '20px' }}>
      <strong style={{ display: 'block', marginBottom: '10px' }}>Sender's Email:</strong>
      <p>{senderEmail}</p>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <strong style={{ display: 'block', marginBottom: '10px' }}>Phone Number:</strong>
      <p>{phoneNumber}</p>
    </div>
    <div>
      <strong style={{ display: 'block', marginBottom: '10px' }}>Message:</strong>
      <p>{message}</p>
    </div>
  </div>
);

export default EmailTemplate;
