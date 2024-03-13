const mobileNavBtn = document.getElementById("hamburger-btn");
const mobileNavCloseBtn = document.getElementById("hamburger-btn-close");
const navLinks = document.getElementById("nav-links");

const toggleMobileNav = () => {
  mobileNavBtn.classList.toggle("hidden");
  mobileNavCloseBtn.classList.toggle("hidden");
  navLinks.classList.toggle("hidden");
  navLinks.classList.toggle("flex");
};

mobileNavBtn.addEventListener("click", toggleMobileNav);
mobileNavCloseBtn.addEventListener("click", toggleMobileNav);
