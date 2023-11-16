const content = document.getElementsByTagName('body')[0],
  darkMode = document.getElementById('dark-change');

darkMode.addEventListener('click', () => {
  darkMode.classList.toggle('active');

  content.classList.toggle('night');
});
