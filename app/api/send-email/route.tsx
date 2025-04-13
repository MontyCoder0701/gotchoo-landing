import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { html } = await req.json();

    const backendResponse = await fetch("https://resend-email-sender.deno.dev/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ html }),
    });

    const data = await backendResponse.json();

    if (!backendResponse.ok) {
      return NextResponse.json(
        { error: data.error || "Failed to send email" },
        { status: backendResponse.status }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
