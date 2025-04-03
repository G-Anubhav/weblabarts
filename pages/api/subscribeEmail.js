// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { email } = req.body;

//     const transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       auth: {
//         user: process.env.EMAIL_USER, 
//         pass: process.env.EMAIL_PASS, 
//       },
//     });

//     const mailOptions = {
//       from: email,
//       to: process.env.EMAIL_USER,
//       subject: "WebLabArtsNew - Subscription Request",
//       // text: `A new user has subscribed with the email: ${email}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background: #f4f4f4;">
//           <h2 style="color: #333;">Thank You for Subscribing! </h2>
//           <p style="color: #666; font-size: 16px;">
//             You have successfully subscribed to our updates. Stay tuned for exciting news and content!
//           </p>
//           <p style="font-size: 14px; color: #888;">
//             If you ever wish to unsubscribe, click the link below:
//           </p>
//           <a href="https://weblabarts.netlify.app/unsubscribe" style="color: #ff4500; text-decoration: none; font-size: 16px;">
//             Unsubscribe Here
//           </a>
//         </div>
//       `,
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ message: "Subscription email sent successfully!" });
//     } catch (error) {
//       console.error("Error sending subscription email:", error);
//       res.status(500).json({ error: "Failed to process subscription." });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required for subscription." });
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const companyEmail = process.env.COMPANY_EMAIL; 

    // Email notification to the subscriber
    const subscriberMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Subscription Confirmation from WebLabArts",
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background: #f4f4f4;">
          <h2 style="color: #333;">Thank You for Subscribing WebLabArts! </h2>
          <p style="color: #666; font-size: 16px;">
            You've successfully subscribed to our updates. Stay tuned for exciting content!
          </p>
          <p style="font-size: 14px; color: #888;">
            If you'd like to unsubscribe, click the link below:
          </p>
          <a href="https://weblabarts.netlify.app/unsubscribe" style="color: #ff4500; text-decoration: none; font-size: 16px;">
            Unsubscribe Here
          </a>
        </div>
      `,
    };

    // Email notification to the company
    const companyMailOptions = {
      from: email,
      to: companyEmail,
      subject: "New Subscription Alert",
      text: `A new user has subscribed with the email: ${email}`,
    };

    try {
      await transporter.sendMail(subscriberMailOptions);
      await transporter.sendMail(companyMailOptions);

      res.status(200).json({ message: "Subscription emails sent successfully!" });
    } catch (error) {
      console.error("Error sending subscription emails:", error);
      res.status(500).json({ error: "Failed to process subscription." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}