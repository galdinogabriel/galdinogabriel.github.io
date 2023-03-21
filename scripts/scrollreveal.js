let leftToRight = {
  origin: "left",
  distance: "10%",
  duration: 1000,
  reset: true,
};
let rigthToLeft = {
  origin: "rigth",
  distance: "10%",
  duration: 1000,
  reset: true,
};
let bottomToTop = {
  origin: "bottom",
  distance: "20%",
  duration: 1000,
  reset: true,
};

ScrollReveal().reveal(".conteudo__titulo", leftToRight);
ScrollReveal().reveal(".conteudo__subtitulo", leftToRight);
ScrollReveal().reveal(".conteudo__paragrafo", leftToRight);
ScrollReveal().reveal(".foto-perfil__foto", bottomToTop);
ScrollReveal().reveal(".sobre-mim__card", leftToRight);
ScrollReveal().reveal(".apresentacao__carreira", rigthToLeft);
ScrollReveal().reveal(".mensagem-contato h1", leftToRight);
ScrollReveal().reveal(
  ".projetos-grid__item--breve, .projetos-grid__item",
  leftToRight
);

const itemsGrid = document.querySelectorAll(".skills-grid .skills-grid__item");

itemsGrid.forEach(function (myElement) {
  let bottomToTopGrid = bottomToTop;
  bottomToTopGrid.delay = bottomToTopGrid.delay + 50;
  bottomToTopGrid.distance = "50px";
  ScrollReveal().reveal(myElement, bottomToTopGrid);
});
