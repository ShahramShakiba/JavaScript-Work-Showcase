const toggle = document.querySelector('.toggle'),
  input = document.querySelector('input');

toggle.addEventListener('click', () => {
  if (input.type === 'password') {
    input.type = 'text';
    toggle.classList.add('uil-eye');
    toggle.classList.remove('uil-eye-slash');
  } else {
    input.type = 'password';
    toggle.classList.add('uil-eye-slash');
    toggle.classList.remove('uil-eye');
  }
});
