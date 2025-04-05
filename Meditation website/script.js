const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// <!-- Scroll Reveal -->
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 900
}

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right"
});

ScrollReveal().reveal(".header__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 800
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 800
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 800
});

ScrollReveal().reveal(".journey__content", {
  duration: 1000,
  delay: 500
});

ScrollReveal().reveal(".event__container", {
  duration: 1000,
  delay: 500
});
