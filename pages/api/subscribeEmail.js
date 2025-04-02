import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "WebLabArtsNew - Subscription Request",
      text: `A new user has subscribed with the email: ${email}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Subscription email sent successfully!" });
    } catch (error) {
      console.error("Error sending subscription email:", error);
      res.status(500).json({ error: "Failed to process subscription." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}