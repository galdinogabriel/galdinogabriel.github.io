let leftToRight = {
  origin: "left",
  distance: "10%",
  duration: 2000,
  delay: 100,
  reset: true,
}
let rigthToLeft = {
  origin: "rigth",
  distance: "10%",
  duration: 1500,
  delay: 100,
  reset: true,
}
let bottomToTop = {
  origin: "bottom",
  distance: "20%",
  duration: 2000,
  delay: 300,
  reset: true,
  opacity:0,
  scale: 1.2
}
let leftToRightSlow = leftToRight
let bottomToTopslow = bottomToTop
bottomToTopslow.duration = 2000
leftToRightSlow.duration = 2000 


ScrollReveal().reveal(".conteudo__paragrafo", leftToRight);
ScrollReveal().reveal(".foto-perfil", bottomToTop);
ScrollReveal().reveal(".sobre-mim__subtitulo", leftToRight);
ScrollReveal().reveal(".sobre-mim__nome", leftToRight);
ScrollReveal().reveal(".sobre-mim__card", leftToRight);
ScrollReveal().reveal("#iportfolio", bottomToTop);
ScrollReveal().reveal(".mensagem-contato h1", leftToRight);
ScrollReveal().reveal(".apresentacao__info .apresentacao__msg", leftToRightSlow);
ScrollReveal().reveal(".apresentacao__info .apresentacao__carreira", bottomToTopslow);
ScrollReveal().reveal(".div-ilustration", bottomToTopslow);


const itemsGrid = document.querySelectorAll('.skills-grid__item');

itemsGrid.forEach(function(myElement) {
  let bottomToTopGrid = bottomToTop;
  bottomToTopGrid.delay = bottomToTopGrid.delay + 50
  bottomToTopGrid.distance = '50px'
  ScrollReveal().reveal(myElement, bottomToTopGrid);
});








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
