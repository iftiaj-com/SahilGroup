export default {
  async fetch(request, env, context) {
    const url = new URL(request.url);

    // Route /api/contact requests to our contact form handler
    if (url.pathname === "/api/contact" && request.method === "POST") {
      try {
        const formData = await request.formData();

        // 1. Honeypot check for spam
        const honeypot = formData.get('_honeypot');
        if (honeypot && honeypot.trim() !== "") {
          return new Response(JSON.stringify({ success: true, message: "Submission received successfully" }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
          });
        }

        // 2. Extract inputs
        const name = formData.get('name');
        const phone = formData.get('phone-number');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // 3. Validation
        if (!name || !email || !subject || !message) {
          return new Response(JSON.stringify({
            errors: [{ message: "Name, email, subject, and message are required." }]
          }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
          });
        }

        // 4. Configuration Check
        const apiKey = env.RESEND_API_KEY;
        if (!apiKey) {
          return new Response(JSON.stringify({
            errors: [{ message: "Server configuration error: RESEND_API_KEY is not set." }]
          }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
          });
        }

        // 5. Send Email via Resend
        const fromEmail = env.RESEND_FROM_EMAIL || 'website@sahilgroupbangladesh.com';
        let formattedFrom = fromEmail;
        if (!fromEmail.includes('<')) {
          formattedFrom = `Sahil Group Website <${fromEmail}>`;
        }

        const emailPayload = {
          from: formattedFrom,
          to: ['sahilgroup@hotmail.com'],
          cc: ['nazrulsahilgroup@gmail.com', 'sahil.phis@gmail.com'],
          reply_to: email,
          subject: `[Website Inquiry] ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <h3>Message:</h3>
            <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
          `
        };

        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(emailPayload)
        });

        if (resendResponse.ok) {
          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
          });
        } else {
          const errorData = await resendResponse.json();
          return new Response(JSON.stringify({
            errors: [{ message: errorData.message || "Failed to send email via Resend API." }]
          }), {
            status: resendResponse.status,
            headers: { "Content-Type": "application/json" }
          });
        }

      } catch (error) {
        return new Response(JSON.stringify({
          errors: [{ message: "An unexpected server error occurred: " + error.message }]
        }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
    }

    // Otherwise, fall back to serving static assets from the uploaded folder
    return env.ASSETS.fetch(request);
  }
};

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
