const menuBar = document.querySelector('.hamburger');
const menuNav = document.querySelector('.navbar');
const menuNavigation = document.querySelector('.menu');
const loader = document.querySelector('.loader');

menuBar.addEventListener('click', () => {
  menuBar.classList.toggle('is-active');
  menuNavigation.classList.toggle('menu-active');
});

window.addEventListener('scroll', () => {
  menuNav.classList.toggle('nav-scroll-active', window.scrollY > 0);

  menuBar.classList.toggle('btn-active', window.scrollY > 200);

  menuBar.classList.remove('is-active');
  menuNavigation.classList.remove('menu-active');
});

function loaderActive() {
  loader.classList.add('loader-active');
}

function loaderActivetime() {
  setInterval(() => {
    loaderActive();
  }, 2000);
}

window.onload = loaderActivetime();

AOS.init({ once: false });
