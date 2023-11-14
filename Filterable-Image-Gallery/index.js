const filterButtons = document.querySelectorAll('#filter-buttons button'),
  filterableCards = document.querySelectorAll('#filterable-cards .card');

const filterCards = (e) => {
  // remove active mode
  document.querySelector('#filter-buttons .active').classList.remove('active');

  // add "active" when any btns clicked
  e.target.classList.add('active');

  filterableCards.forEach((card) => {
    card.classList.add('hide');

    if (
      card.dataset.name === e.target.dataset.filter ||
      e.target.dataset.filter === 'all'
    ) {
      return card.classList.replace('hide', 'show');
    }
  });
};

filterButtons.forEach((btn) => btn.addEventListener('click', filterCards));
