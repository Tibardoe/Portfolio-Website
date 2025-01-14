import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type contactFormData = {
  name: string;
  email: string;
  phone: number;
  message: string;
};

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, phone, message }: contactFormData = body;

  console.log(name, email, phone, message);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_ADDRESS,
      subject: "Contact Form Submission",
      html: `
      <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error(`Error sending email: ${error}`);
    return NextResponse.json(
      { message: "Email sending failed" },
      { status: 500 },
    );
  }
}
