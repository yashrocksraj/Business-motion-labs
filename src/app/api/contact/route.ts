import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    // ---------------------------------------------------------
    // Check API key
    // ---------------------------------------------------------
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    // Created per request so a missing key never breaks the build (e.g. preview deployments).
    const resend = new Resend(process.env.RESEND_API_KEY);

    // ---------------------------------------------------------
    // Read request body
    // ---------------------------------------------------------
    const body = await request.json();

    const {
      name,
      businessName,
      email,
      phone,
      website,
      country,
      service,
      projectDetails,
      budget,
    } = body;

    // ---------------------------------------------------------
    // Required fields
    // ---------------------------------------------------------
    if (!name || !email || !projectDetails) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, and project details are required.",
        },
        { status: 400 }
      );
    }

    // ---------------------------------------------------------
    // Escape user input before putting it into HTML
    // ---------------------------------------------------------
    const safeName = escapeHtml(name);
    const safeBusinessName = escapeHtml(businessName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeWebsite = escapeHtml(website);
    const safeCountry = escapeHtml(country);
    const safeService = escapeHtml(service);
    const safeProjectDetails = escapeHtml(projectDetails);
    const safeBudget = escapeHtml(budget);

    // ---------------------------------------------------------
    // Send email through Resend
    // ---------------------------------------------------------
    const { data, error } = await resend.emails.send({
      from: "Business Motion Labs <hello@businessmotionlabs.com>",
      to: ["yash@businessmotionlabs.com"],
      replyTo: email,

      subject: `New Project Inquiry — ${safeName}${
        safeBusinessName ? ` | ${safeBusinessName}` : ""
      }`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 720px; margin: 0 auto; padding: 32px; color: #111827;">

          <h1 style="font-size: 28px; margin-bottom: 8px;">
            New Project Inquiry
          </h1>

          <p style="color: #6b7280; margin-bottom: 32px;">
            Submitted through the Business Motion Labs website.
          </p>

          <div style="border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">

            <div style="padding: 24px; background: #f9fafb;">
              <h2 style="font-size: 18px; margin: 0 0 16px;">
                Contact Information
              </h2>

              <p><strong>Name:</strong> ${safeName}</p>

              ${
                safeBusinessName
                  ? `<p><strong>Business:</strong> ${safeBusinessName}</p>`
                  : ""
              }

              <p><strong>Email:</strong> ${safeEmail}</p>

              ${
                safePhone
                  ? `<p><strong>Phone:</strong> ${safePhone}</p>`
                  : ""
              }

              ${
                safeWebsite
                  ? `<p><strong>Website:</strong> ${safeWebsite}</p>`
                  : ""
              }

              ${
                safeCountry
                  ? `<p><strong>Country:</strong> ${safeCountry}</p>`
                  : ""
              }
            </div>

            <div style="padding: 24px;">
              <h2 style="font-size: 18px; margin: 0 0 16px;">
                Project Information
              </h2>

              ${
                safeService
                  ? `<p><strong>Service:</strong> ${safeService}</p>`
                  : ""
              }

              ${
                safeBudget
                  ? `<p><strong>Budget:</strong> ${safeBudget}</p>`
                  : ""
              }

              <div style="margin-top: 24px;">
                <strong>Project Details</strong>

                <div style="
                  margin-top: 10px;
                  padding: 16px;
                  background: #f9fafb;
                  border-radius: 8px;
                  white-space: pre-wrap;
                  line-height: 1.6;
                ">
                  ${safeProjectDetails}
                </div>
              </div>
            </div>

          </div>

          <p style="
            margin-top: 28px;
            font-size: 13px;
            color: #9ca3af;
          ">
            Business Motion Labs · businessmotionlabs.com
          </p>

        </div>
      `,
    });

    // ---------------------------------------------------------
    // Resend returned an error
    // ---------------------------------------------------------
    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            error.message ||
            "Unable to send the email. Please try again.",
        },
        { status: 500 }
      );
    }

    // ---------------------------------------------------------
    // Success
    // ---------------------------------------------------------
    console.log("Contact email sent successfully:", data?.id);

    return NextResponse.json(
      {
        success: true,
        message: "Your project inquiry has been sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    // ---------------------------------------------------------
    // Unexpected server error
    // ---------------------------------------------------------
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your inquiry.",
      },
      { status: 500 }
    );
  }
}