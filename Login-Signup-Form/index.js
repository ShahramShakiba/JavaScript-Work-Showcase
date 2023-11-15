const formOpenBtn = document.querySelector('#form-open'),
  home = document.querySelector('.home'),
  formContainer = home.querySelector('.form-container'),
  formCloseBtn = formContainer.querySelector('.form-close'),
  signupBtn = formContainer.querySelector('#signup'),
  loginBtn = formContainer.querySelector('#login'),
  passShowHide = home.querySelectorAll('.pw-hide');

formOpenBtn.addEventListener('click', () => home.classList.add('show'));
formCloseBtn.addEventListener('click', () => home.classList.remove('show'));

/*==========Show and Hide Password=========*/
passShowHide.forEach((icon) => {
  icon.addEventListener('click', () => {
    let getPassInput = icon.parentElement.querySelector('input');

    if (getPassInput.type === 'password') {
      getPassInput.type = 'text';
      icon.classList.replace('uil-eye-slash', 'uil-eye');
    } else {
      getPassInput.type = 'password';
      icon.classList.replace('uil-eye', 'uil-eye-slash');
    }
  });
});

/*==========SignUp=========*/
signupBtn.addEventListener('click', (e) => {
  e.preventDefault();

  formContainer.classList.add('active');
});

/*==========Login=========*/
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();

  formContainer.classList.remove('active');
});
