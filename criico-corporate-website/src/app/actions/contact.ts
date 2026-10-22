"use server";

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
  botField: z.string().optional(),
});

export type CorporateActionResult = {
  ok: boolean;
  enquiryId?: string;
  message?: string;
  error?: string;
  errors?: Record<string, string[]>;
};

export async function submitCorporateContactAction(data: {
  name: string;
  email: string;
  organization?: string;
  category: string;
  message: string;
  botField?: string;
}): Promise<CorporateActionResult> {
  try {
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const firstErrorMessage = Object.values(fieldErrors)[0]?.[0] || "Invalid input data.";
      return { ok: false, error: firstErrorMessage, errors: fieldErrors };
    }

    const { name, email, organization, category, message, botField } = result.data;

    // Honeypot spam defense
    if (botField && botField.trim().length > 0) {
      return { ok: true, message: "Enquiry received." };
    }

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

    return {
      ok: true,
      enquiryId: enquiry.id,
      message: "Thank you for reaching out to CRIICO. Your enquiry has been received and our team will get back to you promptly.",
    };
  } catch (error) {
    console.error("Error submitting corporate enquiry via server action:", error);
    return {
      ok: false,
      error: "A server error occurred while submitting your enquiry. Please try again later.",
    };
  }
}
