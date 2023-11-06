const validateForm = (formSelector) => {
  const formElement = document.querySelector(formSelector);

  const validationOptions = [
    {
      attribute: 'required',
      isValid: (input) => input.value.trim() !== '',
      errorMessage: (input, label) => `${label.textContent} is required!`,
    },
  ];

  const validateSingleFormGroup = (formGroup) => {
    const label = formGroup.querySelector('label');
    const input = formGroup.querySelector('input');
    const errorContainer = formGroup.querySelector('.error');
    const errorIcon = formGroup.querySelector('.error-icon');
    const successIcon = formGroup.querySelector('.success-icon');

    for (const option of validationOptions) {
      if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
        errorContainer.textContent = option.errorMessage(input, label);
      }
    }
  };

  //disable HTML validation
  formElement.setAttribute('novalidate', '');

  //prevent page loading and form submit
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    //trigger form to submit
    validateAllFormGroups(formElement);
  });

  //==>> Applying Form Validation
  const validateAllFormGroups = (formValidate) => {
    const formGroups = Array.from(formValidate.querySelectorAll('.formGroup'));

    formGroups.forEach((formGroup) => {
      validateSingleFormGroup(formGroup);
    });
  };
};

validateForm('#registrationForm');
