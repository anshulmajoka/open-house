import { contactDetails } from "@/data/content";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+\-\s]{8,16}$/;

type ContactBody = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  company?: unknown;
};

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return Response.json({ error: "Enter your contact details and try again." }, { status: 400 });
  }

  if (text(body.company)) {
    return Response.json({ ok: true });
  }

  const name = text(body.name);
  const email = text(body.email);
  const phone = text(body.phone);
  const message = text(body.message);

  if (!name || name.length > 80) {
    return Response.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!email || email.length > 120 || !EMAIL_PATTERN.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!phone || !PHONE_PATTERN.test(phone)) {
    return Response.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }
  if (message.length > 2000) {
    return Response.json({ error: "Please keep the message under 2000 characters." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || contactDetails.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from || to.endsWith(".example")) {
    return Response.json(
      { error: "This inbox is not connected yet." },
      { status: 503 },
    );
  }

  const safeName = name.replace(/[\r\n]+/g, " ");
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Open House enquiry from ${safeName}`,
      text: [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`, "", message || "No message."].join("\n"),
    }),
  });

  if (!response.ok) {
    return Response.json(
      { error: "We could not send that just now." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
