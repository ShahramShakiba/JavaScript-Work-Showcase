const viewBtn = document.querySelector('.view-modal'),
  popup = document.querySelector('.popup'),
  close = popup.querySelector('.close'),
  field = popup.querySelector('.field'),
  input = field.querySelector('input'),
  copy = field.querySelector('button');

viewBtn.addEventListener('click', () => {
  popup.classList.toggle('show');
});

close.addEventListener('click', () => {
  viewBtn.click();
});

copy.addEventListener('click', async () => {
  //select input value
  input.select();

  try {
    await navigator.clipboard.writeText(input.value);
    field.classList.add('active');
    copy.innerText = 'Copied';

    setTimeout(() => {
      //remove selection from document
      window.getSelection().removeAllRanges();

      field.classList.remove('active');
      copy.innerText = 'Copy';
    }, 2000);
  } catch (error) {
    console.error('Failed to copy: ', error);
  }
});


/* Extra Explanation :

==>> "await navigator.clipboard.writeText(input.value);" :
   uses the Clipboard API to write the selected text to the clipboard. The "await" keyword is used because this operation is asynchronous, and we want to wait for it to complete before moving on to the next steps.

*/