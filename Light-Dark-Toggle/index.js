const body = document.querySelector('body'),
  toggle = body.querySelector('#toggle'),
  sunIcon = document.querySelector('.toggle .bx-sun'),
  moonIcon = document.querySelector('.toggle .bx-moon');

toggle.addEventListener('change', () => {
  body.classList.toggle('dark');

  sunIcon.className =
    sunIcon.className === 'bx bx-sun' ? 'bx bxs-sun' : 'bx bxs-sun';

  moonIcon.className =
    sunIcon.className === 'bx bxs-moon' ? 'bx bxs-moon' : 'bx bxs-moon';
});
