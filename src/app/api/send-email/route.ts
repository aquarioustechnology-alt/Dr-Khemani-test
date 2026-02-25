import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { generateEmailTemplate } from "@/lib/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const { formType, name, phone, email, date, clinic, message, subject } = body;

        // Validate required fields
        if (!name || !phone || !email) {
            return NextResponse.json(
                { error: "Name, phone, and email are required fields." },
                { status: 400 }
            );
        }

        if (formType === "appointment" && !clinic) {
            return NextResponse.json(
                { error: "Preferred clinic is required for appointment requests." },
                { status: 400 }
            );
        }

        const formLabels: Record<string, string> = {
            appointment: "New Appointment Request",
            enquiry: "New Enquiry",
            contact: "New Contact Message",
        };

        const emailSubject = `${formLabels[formType] || "New Form Submission"} — ${name}`;

        const htmlContent = generateEmailTemplate({
            formType,
            name,
            phone,
            email,
            date,
            clinic,
            message,
            subject,
        });

        const { data, error } = await resend.emails.send({
            from: "Healing Touch Clinic <onboarding@resend.dev>",
            to: ["dr.vinita.khemani@gmail.com"],
            subject: emailSubject,
            html: htmlContent,
            replyTo: email,
        });

        if (error) {
            console.error("Resend API error:", error);
            return NextResponse.json(
                { error: "Failed to send email. Please try again." },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, messageId: data?.id },
            { status: 200 }
        );
    } catch (err) {
        console.error("Email send error:", err);
        return NextResponse.json(
            { error: "An unexpected error occurred. Please try again." },
            { status: 500 }
        );
    }
}
