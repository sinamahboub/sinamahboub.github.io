// ===== Navigation =====
(function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.classList.toggle("open");
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Close menu on link click
    links.forEach((link) => {
      link.addEventListener("click", () => {
        toggle.classList.remove("open");
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // Active section highlight on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links ul a");

  function updateActive() {
    let current = "";
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === "#" + current,
      );
    });
  }

  window.addEventListener("scroll", updateActive, { passive: true });
  window.addEventListener("load", updateActive);
})();
