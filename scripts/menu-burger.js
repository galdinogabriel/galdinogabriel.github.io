const elementsToToggle = document.querySelectorAll(".nav__link, .menu__burger");
const nav = document.querySelector(".menu__nav")

elementsToToggle.forEach((element) => {
  element.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});


let scrollLinks = document.querySelectorAll(".nav__link,.rodape__voltar");

scrollLinks.forEach(function (scrollLink) {
  scrollLink.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const scrollTarget = document.querySelector("."+targetId);
    scrollTarget.scrollIntoView({ behavior: "smooth" });
  });
});
