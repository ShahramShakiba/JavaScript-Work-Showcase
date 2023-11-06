const validateForm = (formSelector) => {
  const formElement = document.querySelector(formSelector);

  const validationOptions = [
    {
      attribute: 'minlength',

      isValid: (input) =>
        input.value && input.value.length >= parseInt(input.minLength, 10),

      errorMessage: (input, label) =>
        `${label.textContent} needs to be at least ${input.minLength} characters!`,
    },

    {
      attribute: 'custommaxlength',

      isValid: (input) =>
        input.value &&
        input.value.length <=
          parseInt(input.getAttribute('custommaxlength'), 10),

      errorMessage: (input, label) =>
        `${label.textContent} needs to be less than ${input.getAttribute(
          'custommaxlength'
        )} characters!`,
    },

    // Password
    {
      attribute: 'match',
      isValid: (input) => {
        const matchSelector = input.getAttribute('match');
        const matchedElement = formElement.querySelector(`#${matchSelector}`);

        return (
          matchedElement && matchedElement.value.trim() === input.value.trim()
        );
      },

      errorMessage: (input, label) => {
        const matchSelector = input.getAttribute('match');
        const matchedElement = formElement.querySelector(`#${matchSelector}`);
        const matchedLabel =
          matchedElement.parentElement.parentElement.querySelector('label');

        return `${label.textContent} should match ${matchedLabel.textContent}`;
      },
    },

    // Email
    {
      attribute: 'pattern',
      isValid: (input) => {
        // RegExp => regular expression
        const patternRegex = new RegExp(input.pattern);
        return patternRegex.test(input.value);
      },
      errorMessage: (input, label) => `Not a valid ${label.textContent}`,
    },

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

    //clearing the error message: we may get multiple validation problem for each of the inputs
    let formGroupError = false;

    for (const option of validationOptions) {
      if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
        errorContainer.textContent = option.errorMessage(input, label);

        //add some style
        input.classList.add('border-red-700');
        input.classList.remove('border-green-700');

        successIcon.classList.add('hidden');
        errorIcon.classList.remove('hidden');

        formGroupError = true;
      }
    }

    //clear the error message
    if (!formGroupError) {
      errorContainer.textContent = '';

      input.classList.add('border-green-700');
      input.classList.remove('border-red-700');

      successIcon.classList.remove('hidden');
      errorIcon.classList.add('hidden');
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
