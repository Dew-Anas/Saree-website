import express from "express";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";

const router = express.Router();

{/* 1ip adres to limit email=5 */}
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 20,
    message: { message: "Too many messages. Please try again later." },
});


const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

{/*other code is work after limter code completed */}
router.post("/", contactLimiter, async (req, res) => {

    try {
    const { name, email, subject, message, website } = req.body;

    if (website) {
      return res.json({ message: "Message sent successfully" });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({ message: "Invalid form data" });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject.replace(/[\r\n]+/g, " ").trim();
    const cleanMessage = message.trim();

    if (cleanName.length < 2 || cleanName.length > 100) {
      return res.status(400).json({ message: "Name must be 2-100 characters" });
    }

    if (!isValidEmail(cleanEmail)) {
      return res.status(400).json({ message: "Please enter a valid email" });
    }

    if (cleanSubject.length < 3 || cleanSubject.length > 150) {
      return res.status(400).json({ message: "Subject must be 3-150 characters" });
    }

    if (cleanMessage.length < 10 || cleanMessage.length > 2000) {
      return res.status(400).json({ message: "Message must be 10-2000 characters" });
    }

     const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Saree Boutique Website" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: cleanEmail,
      subject: `Contact Form: ${cleanSubject}`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
    });

     res.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact email error:", error.message);
    res.status(500).json({ message: "Could not send message. Please try again." });
  }
});

export default router;