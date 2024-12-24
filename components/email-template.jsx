import React from 'react';

export const EmailTemplate = ({ firstName, phoneNumber, senderEmail, message }) => {
  // Get current hour based on Philippine time zone
  const currentHour = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    hour12: false,
    timeZone: 'Asia/Manila'
  }).formatToParts(new Date()).find(part => part.type === 'hour').value;

  // Determine greeting based on current time
  const greeting = currentHour < 12 ? 'Good Morning' : currentHour < 18 ? 'Good Afternoon' : 'Good Evening';

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Hello, this email is from {firstName}!</h1>
      </div>
      <div style={styles.content}>
        <p style={styles.message}>
          {greeting},<br />
          You've received a new message. Below are the details:
        </p>
        <div style={styles.detail}>
          <strong style={styles.detailLabel}>Sender's Email:</strong>
          <p style={styles.detailContent}>{senderEmail}</p>
        </div>
        <div style={styles.detail}>
          <strong style={styles.detailLabel}>Phone Number:</strong>
          <p style={styles.detailContent}>{phoneNumber}</p>
        </div>
        <div style={styles.detail}>
          <strong style={styles.detailLabel}>Message:</strong>
          <p style={styles.detailContent}>{message}</p>
        </div>
      </div>
      <div style={styles.footer}>
        <p style={styles.footerText}>
          This is a system-generated email, do not reply.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '650px',
    margin: '20px auto',
    padding: '0',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e0e0e0',
    overflow: 'hidden',
    lineHeight: '1.6',
  },
  header: {
    backgroundColor: '#4CAF50',
    color: '#ffffff',
    padding: '25px',
    borderRadius: '12px 12px 0 0',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '32px',
    fontWeight: '600',
    margin: '0',
  },
  content: {
    padding: '25px',
    backgroundColor: '#ffffff',
    color: '#333',
  },
  message: {
    fontSize: '18px',
    lineHeight: '1.8',
    margin: '0 0 25px 0',
    color: '#555',
  },
  detail: {
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  },
  detailLabel: {
    display: 'block',
    fontSize: '16px',
    marginBottom: '8px',
    color: '#333',
    fontWeight: '500',
  },
  detailContent: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.6',
  },
  footer: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '0 0 12px 12px',
    textAlign: 'center',
    boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.05)',
  },
  footerText: {
    fontSize: '14px',
    color: '#888888',
    margin: '0',
    fontWeight: '400',
  },
};

export default EmailTemplate;
