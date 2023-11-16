const inputs = document.querySelectorAll('input'),
  button = document.querySelector('button');

inputs.forEach((input, index1) => {
  input.addEventListener('keyup', (e) => {
    const currentInput = input,
      nextInput = input.nextElementSibling,
      prevInput = input.previousElementSibling;

    //=> if the value has more than one character then clear it
    if (currentInput.value.length > 1) {
      currentInput.value = '';
      return;
    }

    //=> enable the next input and focus on it
    if (
      nextInput &&
      nextInput.hasAttribute('disabled') &&
      currentInput.value !== ''
    ) {
      nextInput.removeAttribute('disabled');
      nextInput.focus();
    }

    //=> if the backspace key is pressed
    if (e.key === 'Backspace') {
      inputs.forEach((input, index2) => {
        //if index1 <= index2 and the previous-input exists
        if (index1 <= index2 && prevInput) {
          input.setAttribute('disabled', true);

          input.value = '';

          prevInput.focus();
        }
      });
    }

    if (!inputs[3].disabled && inputs[3].value !== '') {
      button.classList.add('active');

      // add success/error message
      button.addEventListener('click', handleEventMessage);

      return;
    }
    button.classList.remove('active');
  });
});

const handleEventMessage = () => {
  const otpValue =
    inputs[0].value + inputs[1].value + inputs[2].value + inputs[3].value;

  // Check if the OTP is correct (for example, compare with a predefined value)
  if (otpValue === '1234') {
    //=>> Display success message
    const successMessage = document.createElement('div');
    successMessage.textContent = 'OTP Verified Successfully!';
    successMessage.classList.add('success-message');
    document.getElementById('message').appendChild(successMessage);

    // Hide the button during the timeout
    button.style.display = 'none';

    //remove success message after 2 seconds
    setTimeout(() => {
      successMessage.remove();

      button.style.display = 'block';

      // Reset input values
      inputs.forEach((input) => (input.value = ''));
    }, 2000);
  } else {
    //=>> Display error message if OTP is incorrect
    const errorMessage = document.createElement('div');
    errorMessage.textContent = 'Invalid OTP! Please try again.';
    errorMessage.classList.add('error-message');
    document.getElementById('message').appendChild(errorMessage);

    // Hide the button during the timeout
    button.style.display = 'none';

    //remove error message after 2 seconds
    setTimeout(() => {
      errorMessage.remove();

      button.style.display = 'block';

      // Reset input values
      inputs.forEach((input) => (input.value = ''));
    }, 2500);
  }

  setTimeout(() => {
    remove;
  }, 2000);
};

//==>>focus the first input which index is 0 on window load
window.addEventListener('load', () => inputs[0].focus());
