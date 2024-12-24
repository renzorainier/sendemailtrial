
import { Resend } from 'resend';
import ReactDOMServer from 'react-dom/server';
import EmailTemplate from '../../components/email-template';

const resend = new Resend('re_9gSj9h9A_9fwu4x3z6i6FaM9JjoNuGcZ3');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { to, subject, firstName, phoneNumber, senderEmail, message } = req.body;

    if (!to || !subject || !firstName || !phoneNumber || !senderEmail || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Render the EmailTemplate to a string (HTML format)
    const emailContent = ReactDOMServer.renderToString(
      <EmailTemplate
        firstName={firstName}
        phoneNumber={phoneNumber}
        senderEmail={senderEmail}
        message={message}
      />
    );

    const { data, error } = await resend.emails.send({
      from: 'PORTFOLIO <notifications@vercel.com>',
      to, // Receiver email: 'renzopasagdan@gmail.com'
      subject,
      html: emailContent, // Send the rendered HTML content
      text: `You received a message from ${firstName}. Email: ${senderEmail}, Phone: ${phoneNumber}. Message: ${message}`, // Plain-text version
    });

    if (error) {
      return res.status(400).json({ error });
    }

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// import { Resend } from 'resend';
// import ReactDOMServer from 'react-dom/server';
// import EmailTemplate from '../../components/email-template';

// const resend = new Resend('re_9gSj9h9A_9fwu4x3z6i6FaM9JjoNuGcZ3');

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }

//   try {
//     const { to, subject, firstName } = req.body;

//     if (!to || !subject || !firstName) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }

//     // Render the EmailTemplate to a string (HTML format)
//     const emailContent = ReactDOMServer.renderToString(
//       <EmailTemplate firstName={firstName} />
//     );

//     const { data, error } = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',
//       to,
//       subject,
//       html: emailContent, // Send the rendered HTML content
//     });

//     if (error) {
//       return res.status(400).json({ error });
//     }

//     return res.status(200).json({ data });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// }
