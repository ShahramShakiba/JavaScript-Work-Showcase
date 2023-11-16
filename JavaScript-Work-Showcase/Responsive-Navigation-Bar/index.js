const navMenu = document.querySelector('#nav-menu'),
  toggleMenu = document.querySelector('#nav-toggle'),
  closeMenu = document.querySelector('#nav-close'),
  navLink = document.querySelectorAll('.nav-link');

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

const linkAction = (e) => {
  //active link
  navLink.forEach((nav) => nav.classList.remove('active'));

  e.target.classList.add('active');

  //remove mobile menu
  navMenu.classList.remove('show');
};

navLink.forEach((nav) => nav.addEventListener('click', linkAction));