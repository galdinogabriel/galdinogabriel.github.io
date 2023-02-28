ScrollReveal().reveal(".sobre-mim__paragrafo", { delay: 300, reset: true });
ScrollReveal().reveal(".sobre-mim__nome", { delay: 200, reset: true });

const nav = document.querySelector(".menu__nav");
const burger = document.getElementById("burger-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

const links = document.querySelectorAll(".nav__link");

links.forEach((element) => {
  element.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  });
});

const scrollLinks = document.querySelectorAll(".nav__link");

scrollLinks.forEach(function (scrollLink) {
  scrollLink.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(targetId);
    scrollTarget.scrollIntoView({ behavior: "smooth" });
  });
});
