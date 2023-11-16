const inputBox = document.querySelector('.input-box'),
  textarea = inputBox.querySelector('textarea'),
  signalNum = inputBox.querySelector('.signal-num');

textarea.addEventListener('keyup', () => {
  let valueLength = textarea.value.length;

  signalNum.textContent = valueLength;

  valueLength > 0
    ? inputBox.classList.add('active')
    : inputBox.classList.remove('active');

  valueLength > 100
    ? inputBox.classList.add('error')
    : inputBox.classList.remove('error');
});
