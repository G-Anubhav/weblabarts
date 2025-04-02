import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, companyname, email, phone, service, textarea } = req.body;

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
      subject: `New Contact Form Submission: ${service}`,
      text: `
        Name: ${name}
        Company: ${companyname}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${textarea}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}