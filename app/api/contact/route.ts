import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    // Here you would typically:
    // 1. Validate the input
    // 2. Save to database
    // 3. Send email notification
    // 4. Integrate with CRM

    console.log("Contact form submission:", {
      name,
      email,
      company,
      phone,
      message,
    });

    // For now, just return success
    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
