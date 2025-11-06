type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  partySize?: string;
  preferredDate?: string;
  tripType?: string;
  notes?: string;
};

export async function sendContactEmail(data: ContactPayload) {
  const apiKey = process.env.BREVO_API_KEY!;
  const to = process.env.CONTACT_TO_EMAIL!;
  const from = process.env.CONTACT_FROM_EMAIL || to;

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: "Off We Go Charters", email: from },
      to: [{ email: to }],
      replyTo: { email: data.email, name: data.name },
      subject: `New Trip Request — ${data.tripType ?? "Trip"}`,
      htmlContent: `
        <h2>New Trip Request</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Party Size:</b> ${data.partySize ?? "-"}</p>
        <p><b>Preferred Date(s):</b> ${data.preferredDate ?? "-"}</p>
        <p><b>Trip Type:</b> ${data.tripType ?? "-"}</p>
        <p><b>Notes:</b><br>${(data.notes ?? "").replace(/\n/g, "<br>")}</p>
      `,
    }),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Brevo error: ${txt}`);
  }
}
