ScrollReveal().reveal(".sobre-mim__paragrafo", { delay: 300, reset: true });
ScrollReveal().reveal(".sobre-mim__nome", { delay: 200, reset: true });

const nav = document.querySelector(".menu__nav")
const burger = document.getElementById('burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});