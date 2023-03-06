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