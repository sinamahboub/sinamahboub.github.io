// ===== Contact Form =====
(function () {
  const form = document.getElementById("contact-form");
  const btn = document.getElementById("submit-btn");
  const btnText = btn.querySelector(".btn-text");
  const btnLoader = btn.querySelector(".btn-loader");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Simple validation
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
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
    btnLoader.style.display = "inline";
    status.textContent = "Sending...";
    status.style.color = "var(--text-secondary)";

    // Simulate API call (replace with actual fetch)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Success
      status.textContent = "✅ Message sent! I'll get back to you soon.";
      status.style.color = "var(--success)";
      form.reset();
    } catch (err) {
      status.textContent = "❌ Something went wrong. Please try again.";
      status.style.color = "var(--error)";
    } finally {
      btn.disabled = false;
      btnText.style.display = "inline";
      btnLoader.style.display = "none";
    }
  });
})();
