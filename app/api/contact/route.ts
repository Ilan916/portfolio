import { NextResponse } from "next/server";

type Body = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Body;
  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  // Here you could integrate with an email service (Resend, SendGrid, etc.)
  // For now, just log on the server and return success.
  console.log("Contact message received:", body);

  return NextResponse.json({ ok: true });
}


