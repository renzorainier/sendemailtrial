import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, subject, name, event, date } = req.body;

    // Hardcoded email and password for Gmail
    const emailUser = "renzopasagdan@gmail.com";
    const emailPassword = "brmq epeq qsur utmp";

    // Create a transporter using your email provider (Gmail example)
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your preferred email service
      auth: {
        user: emailUser, // Environment variable for email
        pass: emailPassword, // Environment variable for password
      },
    });

    // Read the HTML template file from the templates folder
    const templatePath = path.join(process.cwd(), "templates", "email_template.html");
    let templateContent = fs.readFileSync(templatePath, "utf8");

    // Replace placeholders in the template with dynamic data
    templateContent = templateContent
      .replace("{{ name }}", name)
      .replace("{{ event }}", event)
      .replace("{{ date }}", date);

    // Define the mail options with the dynamically generated HTML content
    const mailOptions = {
      from: emailUser, // Sender's email
      to: email, // Receiver's email
      subject: subject, // Email subject
      html: templateContent, // HTML content with dynamic data
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}



//wroking ver
// import { exec } from "child_process";
// import path from "path";

// export default function handler(req, res) {
//   if (req.method === "POST") {
//     const scriptPath = path.join(process.cwd(), "scripts", "send_email.py");

//     // Run the Python script with the correct path
//     exec(`python3 ${scriptPath}`, (error, stdout, stderr) => {
//       if (error) {
//         console.error("Error executing Python script:", error);
//         // Send an error response if the Python script fails
//         return res.status(500).json({ success: false, error: stderr });
//       }

//       // Log the Python script output
//       console.log("Python script output:", stdout);

//       // Send a success response after the script runs
//       return res.status(200).json({ success: true, message: stdout });
//     });
//   } else {
//     // Handle invalid HTTP methods (only POST is allowed)
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


// import { exec } from "child_process";

// export default function handler(req, res) {
//   if (req.method === "POST") {
//     // Run the Python script
//     exec("python3 send_email.py", (error, stdout, stderr) => {
//       if (error) {
//         console.error("Error executing Python script:", error);
//         return res.status(500).json({ success: false, error: stderr });
//       }

//       console.log("Python script output:", stdout);
//       return res.status(200).json({ success: true, message: stdout });
//     });
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
