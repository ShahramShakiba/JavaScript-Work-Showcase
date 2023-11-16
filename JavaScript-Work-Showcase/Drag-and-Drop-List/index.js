const sortableList = document.querySelector('.sortable-list'),
  items = sortableList.querySelectorAll('.item');

items.forEach((item) => {
  item.addEventListener('dragstart', () => {
    // Adding dragging class to item after a delay
    setTimeout(() => item.classList.add('dragging'), 0);
  });

  // Removing dragging class from item on dragend event
  item.addEventListener('dragend', () => item.classList.remove('dragging'));
});

const initSortableList = (e) => {
  e.preventDefault();

  const draggingItem = document.querySelector('.dragging');

  // Getting all items except currently dragging and making array of them
  let siblings = [...sortableList.querySelectorAll('.item:not(.dragging)')];

  // Finding the sibling after which the dragging item should be placed
  let nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  // Inserting the dragging item before the found sibling
  sortableList.insertBefore(draggingItem, nextSibling);
};

sortableList.addEventListener('dragover', initSortableList);
sortableList.addEventListener('dragenter', (e) => e.preventDefault());


/* Some Explanations : 

- e.clientY =>> is a property of the event object "e" that represents the vertical position of the mouse cursor at the time of the event.

- sibling.offsetTop =>> is the distance from the top of the sibling element to the top of its offset parent, i.e., the distance from the top of the container element.

- sibling.offsetHeight =>> is the height of the sibling element, including vertical padding and borders.

- sibling.offsetTop + sibling.offsetHeight / 2 =>> calculates the midpoint of the sibling element by adding half of its height to its distance from the top.

- e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2 =>> compares the vertical position of the mouse cursor (e.clientY) with the midpoint of each sibling element. If the cursor is above or at the midpoint, the condition evaluates to true.

### Therefore, let nextSibling will be assigned the first sibling element where the mouse cursor is above or at its midpoint. 

---------------------------------------------

- sortableList.insertBefore() =>> is a method used to insert an element before a specified reference element. 
It takes two arguments: the element to be inserted (draggingItem) and the reference element to insert before (nextSibling).

*/