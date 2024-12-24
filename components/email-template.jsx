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
    maxWidth: '600px',
    margin: '20px auto',
    padding: '0',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e0e0e0',
    overflow: 'hidden',
    lineHeight: '1.6',
  },
  header: {
    backgroundColor: '#6a1b9a', // Deeper purple for a richer look
    color: '#ffffff',
    padding: '25px 20px',
    borderRadius: '10px 10px 0 0',
    textAlign: 'center',
    fontWeight: '500',
  },
  title: {
    fontSize: '32px',
    margin: '0',
    letterSpacing: '0.5px',
  },
  content: {
    padding: '25px 20px',
    backgroundColor: '#f8f8f8', // Light background to enhance readability
  },
  message: {
    fontSize: '18px',
    margin: '0 0 20px 0',
    color: '#333333',
    fontWeight: '300',
  },
  detail: {
    marginBottom: '18px',
    padding: '15px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  },
  detailLabel: {
    display: 'block',
    fontSize: '16px',
    marginBottom: '8px',
    color: '#2c3e50',
    fontWeight: '500',
  },
  detailContent: {
    fontSize: '14px',
    color: '#555555',
    margin: '0',
  },
  footer: {
    padding: '15px 20px',
    backgroundColor: '#fafafa', // Slightly off-white for subtle contrast
    borderRadius: '0 0 10px 10px',
    textAlign: 'center',
  },
  footerText: {
    fontSize: '14px',
    color: '#888888',
    margin: '0',
    fontWeight: '300',
  },
};

export default EmailTemplate;
