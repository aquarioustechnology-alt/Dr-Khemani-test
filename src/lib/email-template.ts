interface EmailData {
  formType: "appointment" | "enquiry" | "contact";
  name: string;
  phone: string;
  email: string;
  date?: string;
  clinic?: string;
  message?: string;
  subject?: string;
}

export function generateEmailTemplate(data: EmailData): string {
  const formLabels: Record<string, string> = {
    appointment: "Appointment Request",
    enquiry: "General Enquiry",
    contact: "Contact Form Submission",
  };

  const formTitle = formLabels[data.formType] || "New Form Submission";

  const rows: { label: string; value: string }[] = [
    { label: "Full Name", value: data.name },
    { label: "Phone Number", value: data.phone },
    { label: "Email Address", value: data.email || "None" },
  ];

  if (data.date) rows.push({ label: "Preferred Date", value: data.date });
  if (data.clinic) rows.push({ label: "Preferred Clinic", value: data.clinic });
  if (data.subject) rows.push({ label: "Subject", value: data.subject });
  if (data.message) rows.push({ label: "Message", value: data.message });

  const tableRows = rows
    .map(
      (row) => `
        <tr>
          <td style="padding: 14px 20px; font-weight: 600; color: #540d2d; font-size: 14px; border-bottom: 1px solid #f5e6ef; width: 160px; vertical-align: top;">
            ${row.label}
          </td>
          <td style="padding: 14px 20px; color: #333333; font-size: 14px; border-bottom: 1px solid #f5e6ef; line-height: 1.6;">
            ${row.value}
          </td>
        </tr>
      `
    )
    .join("");

  const now = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="margin: 0; padding: 0; background-color: #f8f4f6; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f4f6; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 24px rgba(84, 13, 45, 0.08);">
              
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #540d2d 0%, #C21975 100%); padding: 36px 40px; text-align: center;">
                  <h1 style="margin: 0 0 6px 0; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: 0.5px;">
                    Healing Touch Clinic
                  </h1>
                  <p style="margin: 0; color: rgba(255,255,255,0.8); font-size: 13px; letter-spacing: 1px; text-transform: uppercase;">
                    Dr. Vinita Khemani
                  </p>
                </td>
              </tr>

              <!-- Badge -->
              <tr>
                <td style="padding: 28px 40px 0 40px;">
                  <table cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #f5e6ef 0%, #fff0f5 100%); border-radius: 12px; width: 100%;">
                    <tr>
                      <td style="padding: 16px 24px;">
                        <p style="margin: 0; color: #C21975; font-size: 16px; font-weight: 700;">
                          📋 ${formTitle}
                        </p>
                        <p style="margin: 4px 0 0 0; color: #888; font-size: 12px;">
                          Received on ${now}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Data Table -->
              <tr>
                <td style="padding: 24px 40px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #f5e6ef; border-radius: 12px; overflow: hidden;">
                    ${tableRows}
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding: 20px 40px 32px 40px; text-align: center; border-top: 1px solid #f5e6ef;">
                  <p style="margin: 0 0 8px 0; color: #999; font-size: 12px;">
                    This email was sent automatically from the clinic website.
                  </p>
                  <p style="margin: 0; color: #C21975; font-size: 12px; font-weight: 600;">
                    Healing Touch Clinic &bull; 59 Bangur Avenue, Block A, Kolkata - 700055
                  </p>
                  <p style="margin: 6px 0 0 0; color: #999; font-size: 11px;">
                    📞 +91 99035 88155 &bull; drvinitakhemani.com
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}
