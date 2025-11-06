import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json(); // { name, email, message }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // ou ton serveur SMTP
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${data.name}" <${data.email}>`,
      to: process.env.EMAIL_RECEIVER, // ton email
      subject: `Nouveau message de ${data.name}`,
      text: data.message,
      html: `<p>${data.message}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
