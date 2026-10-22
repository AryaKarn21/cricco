"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please provide a valid email address").max(254),
  subject: z.string().trim().min(2, "Subject must be at least 2 characters").max(200).optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(3000),
  botField: z.string().optional(),
});

export type ContactActionResult = {
  ok: boolean;
  id?: string;
  message?: string;
  error?: string;
  errors?: Record<string, string[]>;
};

export async function submitContactAction(data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
  botField?: string;
}): Promise<ContactActionResult> {
  try {
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      const firstErrorMessage = Object.values(fieldErrors)[0]?.[0] || "Invalid input data.";
      return { ok: false, error: firstErrorMessage, errors: fieldErrors };
    }

    const { name, email, subject, message, botField } = parsed.data;

    // Honeypot spam defense
    if (botField && botField.trim().length > 0) {
      return { ok: true, message: "Message received." };
    }

    const savedMessage = await prisma.contactMessage.create({
      data: {
        name,
        email: email.toLowerCase().trim(),
        subject: subject || "General Enquiry",
        message,
      },
    });

    return {
      ok: true,
      id: savedMessage.id,
      message: "Thank you for reaching out to CRIICO. Your message has been received and recorded in our database.",
    };
  } catch (error) {
    console.error("Error saving contact message via server action:", error);
    return {
      ok: false,
      error: "A server error occurred while processing your message. Please try again later.",
    };
  }
}
