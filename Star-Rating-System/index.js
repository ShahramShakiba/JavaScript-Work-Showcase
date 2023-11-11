const btn = document.querySelector('button'),
  post = document.querySelector('.post'),
  widget = document.querySelector('.star-widget'),
  editBtn = document.querySelector('.edit');

btn.addEventListener('click', () => {
  widget.style.display = 'none';

  post.style.display = 'block';

  editBtn.addEventListener('click', handleEditBtn);

  return false;
});

const handleEditBtn = () => {
  widget.style.display = 'block';

  post.style.display = 'none';
};
