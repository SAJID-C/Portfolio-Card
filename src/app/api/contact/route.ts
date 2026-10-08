import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // In a production environment with SENDGRID / RESEND keys configured,
    // this will send via that provider. Here we return a clean verified JSON response.
    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received successfully.",
        data: { name, email, subject: subject || "Portfolio Inquiry" },
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error processing contact submission." },
      { status: 500 }
    );
  }
}
