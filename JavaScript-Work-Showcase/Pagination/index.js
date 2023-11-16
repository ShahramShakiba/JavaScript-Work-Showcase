const startBtn = document.querySelector('#startBtn'),
  endBtn = document.querySelector('#endBtn'),
  prevNext = document.querySelectorAll('.prevNext'),
  numbers = document.querySelectorAll('.link');

//initial step
let currentStep = 0;

const updateBtn = () => {
  if (currentStep === 4) {
    endBtn.disabled = true;

    //disable " > "
    prevNext[1].disabled = true;
  } else if (currentStep === 0) {
    startBtn.disabled = true;

    //disable " < "
    prevNext[0].disabled = true;
  } else {
    endBtn.disabled = false;
    prevNext[1].disabled = false;

    startBtn.disabled = false;
    prevNext[0].disabled = false;
  }
};

//==>> Numbers
numbers.forEach((number, numIndex) => {
  number.addEventListener('click', (e) => {
    e.preventDefault();

    //Set the current step to the clicked number link
    currentStep = numIndex;

    document.querySelector('.active').classList.remove('active');

    number.classList.add('active');

    updateBtn();
  });
});

//==>> Previous
prevNext.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    currentStep += e.target.id === 'next' ? 1 : -1;

    //toggle "active" on the numbers based on the current step
    numbers.forEach((num, numIndex) => {
      num.classList.toggle('active', numIndex === currentStep);

      updateBtn();
    });
  });
});

//==>> Start-Button
startBtn.addEventListener('click', () => {
  document.querySelector('.active').classList.remove('active');

  numbers[0].classList.add('active');
  currentStep = 0;
  updateBtn();

  endBtn.disabled = false;
  prevNext[1].disabled = false;
});

//==>> End-Button
endBtn.addEventListener('click', () => {
  document.querySelector('.active').classList.remove('active');

  numbers[4].classList.add('active');
  currentStep = 4;
  updateBtn();

  startBtn.disabled = false;
  prevNext[0].disabled = false;
});
