const showPopupBtn = document.querySelector('.login-btn');
const hidePopupBtn = document.querySelector('.form-popup .close-btn');
const formPopup = document.querySelector('.form-popup');
const loginSignupLink = document.querySelectorAll('.form-box .bottom-link a');

//==>> Show Form popup
showPopupBtn.addEventListener('click', () => {
  document.body.classList.toggle('show-popup');
});

//==>> Hide Form popup
hidePopupBtn.addEventListener('click', () => showPopupBtn.click());

loginSignupLink.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    //if the clicked link is signup, then add "show-signup" class to the form popup, else remove the class
    formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove'](
      'show-signup'
    );
  });
});
