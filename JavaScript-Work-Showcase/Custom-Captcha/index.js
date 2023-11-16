const captcha = document.querySelector('.captcha'),
  reloadBtn = document.querySelector('.reload-btn'),
  inputField = document.querySelector('.input-area input'),
  checkBtn = document.querySelector('.check-btn'),
  statusTxt = document.querySelector('.status-text');

//storing all captcha characters in array
let allCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

const getCaptcha = () => {
  for (let i = 0; i < 6; i++) {
    //get 6 random characters
    let randomCharacter =
      allCharacters[Math.floor(Math.random() * allCharacters.length)];

    //add space to captcha-characters
    captcha.textContent += ` ${randomCharacter}`;
  }
};
getCaptcha();

//calling getCaptcha & removeContent on the reload btn click
reloadBtn.addEventListener('click', () => {
  removeContent();

  getCaptcha();
});

checkBtn.addEventListener('click', (e) => {
  e.preventDefault(); 
  
  statusTxt.style.display = 'block';

  //add space after each character user enter, since we added spaces while generating captcha
  let inputValue = inputField.value.split('').join(' ');

  if (inputValue === captcha.innerText) {
    statusTxt.style.color = '#034bf1';
    statusTxt.textContent = "Nice! You don't appear to be a robot.";

    setTimeout(() => {
      removeContent();
      
      getCaptcha();
    }, 4000);
  } else {
    statusTxt.style.color = '#ff0000';
    statusTxt.innerText = 'Captcha not matched. Please try again!';
  }
});

// remove content from captcha and input-field
const removeContent = () => {
  inputField.value = '';
  captcha.innerText = '';
  statusTxt.style.display = 'none';
}
