const navbarMenu = document.querySelector('.navbar .links');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = navbarMenu.querySelector('.close-btn');

const showPopupBtn = document.querySelector('.login-btn');
const formPopup = document.querySelector('.form-popup');
const hidePopupBtn = document.querySelector('.form-popup .close-btn');
const loginSignupLink = document.querySelectorAll('.form-box .bottom-link a');
const bg = document.querySelector('.blur-bg-overlay');

//==>> Show Form popup
showPopupBtn.addEventListener('click', () => {
  document.body.classList.toggle('show-popup');
});

//==>> Hide Form popup
hidePopupBtn.addEventListener('click', () => showPopupBtn.click());
bg.addEventListener('click', () => showPopupBtn.click());

loginSignupLink.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    //if the clicked link is signup, then add "show-signup" class to the form popup, else remove the class
    formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove'](
      'show-signup'
    );
  });
});

//==>> Show Mobile Menu
menuBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('show-menu');
});

closeBtn.addEventListener('click', () => menuBtn.click());
