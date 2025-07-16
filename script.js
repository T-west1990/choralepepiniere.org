// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Fade in sections on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );
  //  for navigation
  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
  });

  // for hero sections on slide

  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});

let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);
