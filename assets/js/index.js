const menuBar = document.querySelector('.hamburger');
const menuNav = document.querySelector('.navbar');

menuBar.addEventListener('click', () => {
  menuBar.classList.toggle('is-active');
});

window.addEventListener('scroll', () => {
  menuNav.classList.toggle('nav-scroll-active', window.scrollY > 0);
});
