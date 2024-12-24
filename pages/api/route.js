const { NextResponse } = require('next/server');
const { Resend } = require('resend');

module.exports = async function POST(request) {
  try {
    const body = await request.json();
    console.log("body", body);
    const { email, studentName, message, subject, token, title } = body;
    const resend = new Resend(token);

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['renzopasagdan@gmail.com'],
      subject: 'Hello world',
      react: {
        title: title || 'Default Title',
        studentName: studentName || 'John',
        message: message || 'Default Message',
      },
    });

    if (data.status === 'success') {
      return NextResponse.json({ message: 'Email Successfully Sent!' });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.log('error', error);
  }
};


// import type { NextApiRequest, NextApiResponse } from 'next';
// import { EmailTemplate } from '../../components/email-template';
// import { Resend } from 'resend';

// const resend = new Resend('re_9gSj9h9A_9fwu4x3z6i6FaM9JjoNuGcZ3');

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',
//       to: ['renzopasagdan@gmail.com'],
//       subject: 'Hello world',
//       react: EmailTemplate({ firstName: 'John' }),
//     });

//     if (error) {
//       res.status(400).json({ error });
//     }

//     res.status(200).json({ data });
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// }




// import  {NextApiRequest, NextApiResponse } from 'next';
// import { NextResponse } from 'next/server';
// import { EmailTemplate } from '../../components/email-template';
// import { Resend } from 'resend';

// const resend = new Resend('re_9gSj9h9A_9fwu4x3z6i6FaM9JjoNuGcZ3');


// export  async function POST(request) {

//     try {
//         const body = await request.json();
//         console.log("body", body)
//         const {email, studentName, message, subject, token, title } = body;
//         const resend = new Resend(token);
//         const data = await resend.emails.send({
//             from: 'MVBA <metroviewbaptistacademy@resend.dev>',
//             to: email,
//             subject: subject,
//             react: EmailTemplate({title: title,  studentName: studentName, message: message}),
//           });

//           if(data.status === 'success') {
//             return NextResponse.json({message: 'Email Succesfuly Sent!'})
//         }
//         return NextResponse.json(data)

//     } catch (error) {
//         console.log('error', error)
//     }
// };
