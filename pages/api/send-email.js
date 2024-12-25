import { exec } from "child_process";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { receiverEmail, subject, name, event, date } = req.body;

    if (!receiverEmail || !subject || !name || !event || !date) {
      console.error("Missing parameters:", req.body);
      return res.status(400).json({ success: false, error: "Missing parameters." });
    }

    const scriptPath = path.join(process.cwd(), "scripts", "send_email.py");
    const command = `python3 ${scriptPath} "${receiverEmail}" "${subject}" "${name}" "${event}" "${date}"`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error("Error executing Python script:", error);
        console.error("stderr:", stderr);
        return res.status(500).json({ success: false, error: stderr || error.message });
      }

      console.log("Python script output:", stdout);
      return res.status(200).json({ success: true, message: stdout.trim() });
    });
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
