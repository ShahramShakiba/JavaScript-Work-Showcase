const dynamicText = document.querySelector('#text span');
const words = ['Love ', 'Like Art ', 'The Future ', 'Everything '];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];

  //substring=> extracts characters between two indices
  const currentChar = currentWord.substring(0, charIndex);
  // console.log(currentWord, currentChar);

  dynamicText.textContent = currentChar;
  dynamicText.classList.add('stop-blinking');

  if (!isDeleting && charIndex < currentWord.length) {
    //if condition is true, type the next character
    charIndex++;

    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    //if condition is true, remove the previous character
    charIndex--;

    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    dynamicText.classList.remove('stop-blinking');

    //if word is deleted then switch to the next word
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;

    //delay before erasing or starting to type the word
    setTimeout(typeEffect, 1200);
  }
};

typeEffect();
