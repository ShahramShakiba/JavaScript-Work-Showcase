const toggle = document.querySelector('.toggle'),
  input = document.querySelector('input');

toggle.addEventListener('click', () => {
  if (input.type === 'password') {
    input.type = 'text';
    toggle.classList.remove('uil-eye');
    toggle.classList.add('uil-eye-slash');
  } else {
    input.type = 'password';
    toggle.classList.remove('uil-eye-slash');
    toggle.classList.add('uil-eye');
  }
});
