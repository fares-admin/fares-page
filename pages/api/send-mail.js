import nodemailer from "nodemailer";

export const runtime = 'edge';

export default async function (req, res) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "465", 10),
      secure: true,
      auth: {
        user: process.env.SMTP_USER || "user",
        pass: process.env.SMTP_PASSWORD || "password",
      },
    });

    const request = JSON.parse(req.body)

    if(request.email && request.content && request.name ){
        await transporter.sendMail({
            from: request.email,
            to: process.env.RECEIVER.split(","),
            subject: "Contact from page",
            html: `<p>Name: ${request.name}</p><p>Email: ${request.email}</p><p>${request.content}</p>`,
          });
          res.status(200).json({ message: "Sent email successfully!" });

    } else {
        res.status(200).json({ message: "Please fill all fields!" });

    }

    
  } catch (err) {
    res.status(200).json({ message: "Send email error" });
  }
}
