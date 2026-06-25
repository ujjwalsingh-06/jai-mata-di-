// ===============================
// Jay Mata Di Properties
// script.js
// ===============================

// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(15,23,42,0.98)";
    header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.35)";
  } else {
    header.style.background = "rgba(15,23,42,0.92)";
    header.style.boxShadow = "none";
  }
});

// Smooth Navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Contact Form -> WhatsApp
const inquiryForm = document.getElementById("inquiryForm");

if (inquiryForm) {
  inquiryForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name =
      document.getElementById("name").value;

    const phone =
      document.getElementById("phone").value;

    const propertyType =
      document.getElementById("propertyType").value;

    const message =
      document.getElementById("message").value;

    const whatsappNumber = "918530212666";

    const whatsappMessage =
`🏠 New Property Inquiry

Name: ${name}
Phone: ${phone}
Property Type: ${propertyType}

Message:
${message}`;

    const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");

    alert("Redirecting to WhatsApp...");

    inquiryForm.reset();
  });
}

// Reveal Animation
const revealElements = document.querySelectorAll(
  ".service-card, .property-card, .feature, .gallery-item, .info-card"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform =
          "translateY(0)";
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(40px)";
  item.style.transition =
    "all 0.8s ease";

  observer.observe(item);
});

// Property Hover Effect
document.querySelectorAll(".property-card")
.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform =
      "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "translateY(0)";
  });
});

// Back To Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.left = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#D4AF37";
topButton.style.color = "#0F172A";
topButton.style.fontSize = "20px";
topButton.style.fontWeight = "bold";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Loading Animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

document.body.style.opacity = "0";
document.body.style.transition =
  "opacity 0.7s ease";

// Console Message
console.log(
  "Jay Mata Di Properties Website Loaded Successfully"
);
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 800);
});
