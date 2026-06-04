// Contact form — submits to WhatsApp instead of a backend
(function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const successAlert = document.getElementById("success-alert");
  const errorAlert = document.getElementById("error-alert");
  const errorText = document.getElementById("error-text");
  const successText = document.getElementById("success-text");
  const submitBtn = document.getElementById("submit-btn");
  const submitLabel = document.getElementById("submit-label");

  const fields = ["name", "email", "company", "subject", "message"].reduce((acc, k) => {
    acc[k] = document.getElementById(`field-${k}`);
    return acc;
  }, {});

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    successAlert.style.display = "none";
    errorAlert.style.display = "none";

    const name = fields.name.value.trim();
    const email = fields.email.value.trim();
    const message = fields.message.value.trim();
    const company = fields.company.value.trim();
    const subject = fields.subject.value.trim();

    if (!name || !email || !message) {
      errorText.textContent = "Please fill in your name, email and message.";
      errorAlert.style.display = "flex";
      return;
    }

    submitBtn.disabled = true;
    submitLabel.textContent = "Opening WhatsApp…";

    const lines = [
      "Hello JavaHeat,",
      "",
      subject ? `Subject: ${subject}` : null,
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      "",
      "Message:",
      message,
    ].filter(Boolean);

    const waUrl = window.JH.buildWhatsAppHref(lines.join("\n"));
    // Open in a new tab
    window.open(waUrl, "_blank", "noopener,noreferrer");

    // Show success state in-page
    successText.textContent = `Thank you, ${name.split(" ")[0]} — WhatsApp opened in a new tab with your message ready to send. We'll reply to ${email} as soon as we receive it.`;
    successAlert.style.display = "flex";

    form.reset();
    submitBtn.disabled = false;
    submitLabel.textContent = "Send Message";
  });
})();
