// Select all Stars
const stars = document.querySelectorAll('.stars i');

stars.forEach((star, index1) => {
  star.addEventListener('click', () => handleStarClick(index1));
  star.addEventListener('mouseover', () => handleStarHover(index1));
  star.addEventListener('mouseout', () => handleStarMouseOut());
});

const handleStarClick = (index1) => {
  stars.forEach((star, index2) => {
    index1 >= index2
      ? star.classList.add('active')
      : star.classList.remove('active');
  });
};

const handleStarHover = (index1) => {
  stars.forEach((star, i) => {
    if (i <= index1) {
      star.classList.add('hover');
    } else {
      star.classList.remove('hover');
    }
  });
};

const handleStarMouseOut = () => {
  stars.forEach((star) => {
    star.classList.remove('hover');
  });
};
