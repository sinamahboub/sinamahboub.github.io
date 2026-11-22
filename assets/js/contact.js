// ===== Contact Form =====
(function () {
  const form = document.getElementById("contact-form");
  const btn = document.getElementById("submit-btn");
  const btnText = btn.querySelector(".btn-text");
  const btnLoader = btn.querySelector(".btn-loader");
  const status = document.getElementById("form-status");

  // Static site (GitHub Pages) has no backend, so there is no server to
  // receive the message. Instead the message is handed to the visitor's
  // own mail app, addressed to Sina. Nothing is faked as "sent" and
  // nothing is lost silently on the site.
  const CONTACT_EMAIL = "mr.sinamahboub@gmail.com";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simple validation
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      status.textContent = "Please fill in all required fields.";
      status.style.color = "var(--error)";
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      status.textContent = "Please enter a valid email address.";
      status.style.color = "var(--error)";
      return;
    }

    // Loading state
    btn.disabled = true;
    btnText.style.display = "none";
    btnLoader.style.display = "inline-block";
    status.textContent = "Opening your email app...";
    status.style.color = "var(--text-secondary)";

    // Real send: open the visitor's mail app with the message ready to send.
    const mailSubject =
      subject || "Message from " + name + " (via sinamahboub.github.io)";
    const mailBody = message + "\n\n--\n" + name + " <" + email + ">";
    window.location.href =
      "mailto:" +
      CONTACT_EMAIL +
      "?subject=" +
      encodeURIComponent(mailSubject) +
      "&body=" +
      encodeURIComponent(mailBody);

    status.textContent =
      "Your email app should now open with the message ready to send.";
    status.style.color = "var(--success)";
    btn.disabled = false;
    btnText.style.display = "inline";
    btnLoader.style.display = "none";
    // The form is intentionally NOT reset: if the mail app did not open,
    // the visitor still has their text and can try again.
  });
})();
