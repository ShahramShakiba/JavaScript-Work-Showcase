const body = document.querySelector('body'),
  sidebar = body.querySelector('.sidebar'),
  toggle = sidebar.querySelector('.toggle'),
  searchBtn = sidebar.querySelector('.search-box'),
  modeSwitch = sidebar.querySelector('.toggle-switch'),
  modeText = sidebar.querySelector('.mode-text');

toggle.addEventListener('click', () => sidebar.classList.toggle('close'));

searchBtn.addEventListener('click', () => sidebar.classList.remove('close'));

modeSwitch.addEventListener('click', () => {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    modeText.textContent = 'Light mode';
  } else {
    modeText.textContent = 'Dark mode';
  }
});
