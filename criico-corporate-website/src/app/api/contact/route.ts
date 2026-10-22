import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please provide a valid email address").max(254),
  organization: z.string().trim().max(100).optional().nullable(),
  category: z.enum([
    "Partnership",
    "Tournament Organizers",
    "Cricket Academy",
    "Media & Press",
    "Technology & Product",
    "General Enquiry"
  ]),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
  // Honeypot field for bot protection
  botField: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { error: "Invalid request payload. Please ensure JSON data is sent." },
        { status: 400 }
      );
    }

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const firstErrorMessage = Object.values(fieldErrors)[0]?.[0] || "Invalid input data.";
      return NextResponse.json({ error: firstErrorMessage, errors: fieldErrors }, { status: 400 });
    }

    const { name, email, organization, category, message, botField } = result.data;

    // Spam check: if honeypot is filled, silently ignore or reject
    if (botField && botField.trim().length > 0) {
      return NextResponse.json({ ok: true, message: "Enquiry received." });
    }

    // Persist to corporate database
    const enquiry = await prisma.corporateEnquiry.create({
      data: {
        name,
        email: email.toLowerCase(),
        organization: organization || null,
        category,
        message,
        status: "NEW",
      },
    });

    return NextResponse.json(
      {
        ok: true,
        enquiryId: enquiry.id,
        message:
          "Thank you for reaching out. Your enquiry has been securely received and recorded in our corporate database. Our leadership team will review and respond directly to your provided email.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Corporate contact form error:", error);
    return NextResponse.json(
      { error: "A server error occurred while processing your enquiry. Please try again later or reach out directly via email." },
      { status: 500 }
    );
  }
}
