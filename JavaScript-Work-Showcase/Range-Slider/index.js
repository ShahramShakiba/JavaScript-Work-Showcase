const icon = document.querySelector('#icon'),
  range = document.querySelector('input'),
  slideValue = document.querySelector('.slide-value');

range.addEventListener('input', () => {
  let value = range.value;

  slideValue.textContent = value;

  if (value > 0) {
    icon.classList.replace('uil-volume-mute', 'uil-volume-down');
  } else {
    icon.classList.replace('uil-volume-down', 'uil-volume-mute');
  }

  if (value > 30) {
    icon.classList.replace('uil-volume-down', 'uil-volume');
  } else {
    icon.classList.replace('uil-volume', 'uil-volume-down');
  }

  if (value > 80) {
    icon.classList.replace('uil-volume', 'uil-volume-up');
  } else {
    icon.classList.replace('uil-volume-up', 'uil-volume');
  }
});
