import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please provide a valid email address").max(254),
  subject: z.string().trim().min(2, "Subject must be at least 2 characters").max(200).optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(3000),
  botField: z.string().optional(), // Honeypot field
});

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { error: "Invalid JSON request payload." },
        { status: 400 }
      );
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      const firstErrorMessage = Object.values(fieldErrors)[0]?.[0] || "Invalid input data.";
      return NextResponse.json({ error: firstErrorMessage, errors: fieldErrors }, { status: 400 });
    }

    const { name, email, subject, message, botField } = parsed.data;

    // Honeypot spam defense
    if (botField && botField.trim().length > 0) {
      return NextResponse.json({ ok: true, message: "Message received." });
    }

    // Persist to ContactMessage table in PostgreSQL / SQLite database
    const savedMessage = await prisma.contactMessage.create({
      data: {
        name,
        email: email.toLowerCase().trim(),
        subject: subject || "General Enquiry",
        message,
      },
    });

    return NextResponse.json(
      {
        ok: true,
        id: savedMessage.id,
        message: "Thank you for reaching out to CRIICO. Your message has been received and recorded in our database.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact message:", error);
    return NextResponse.json(
      { error: "A server error occurred while processing your message. Please try again later." },
      { status: 500 }
    );
  }
}
