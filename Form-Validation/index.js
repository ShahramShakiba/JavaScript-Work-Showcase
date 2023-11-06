const validateForm = (formSelector) => {
  const formElement = document.querySelector(formSelector);

  //disable HTML validation
  formElement.setAttribute('novalidate', '');

  //prevent page loading and form submit
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
  });
};

validateForm('#registrationForm');
