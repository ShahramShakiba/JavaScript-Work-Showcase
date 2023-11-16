const passwordChecker = document.querySelector('.password-checker'),
  passwordInput = document.getElementById('password'),
  progressBar = document.querySelector('.bar');

passwordInput.onkeyup = () => {
  // console.log(passwordInput.value);
  checkPasswordStrength(passwordInput.value);
};

const checkPasswordStrength = (password) => {
  let strength = 0;

  //=>> UpperCase Characters
  if (password.match(/(?=.*[A-Z])/)) strength++;

  //=>> LowerCase Characters
  if (password.match(/(?=.*[a-z])/)) strength++;

  //=>> Numerical Characters
  if (password.match(/(?=.*[0-9])/)) strength++;

  //=>> Special Characters
  if (password.match(/(?=.*[`!@#$%^&*])/)) strength++;

  //=>> at least 9 Characters
  if (password.match(/(?=.{9,})/)) strength++;

  // console.log(strength);

  switch (strength) {
    case 0:
      {
        passwordChecker.style.borderColor = 'transparent';

        progressBar.style.cssText = `width: ${
          (strength / 5) * 100
        }%; background-color: unset;`;
      }
      break;

    case 1:
      {
        passwordChecker.style.borderColor = 'red';

        progressBar.style.cssText = `width: ${
          (strength / 5) * 100
        }%; background-color: red;`;
      }
      break;

    case 2:
      {
        passwordChecker.style.borderColor = 'coral';

        progressBar.style.cssText = `width: ${
          (strength / 5) * 100
        }%; background-color: coral;`;
      }
      break;

    case 3:
      {
        passwordChecker.style.borderColor = 'gold';

        progressBar.style.cssText = `width: ${
          (strength / 5) * 100
        }%; background-color: gold;`;
      }
      break;

    case 4:
      {
        passwordChecker.style.borderColor = 'deepskyblue';

        progressBar.style.cssText = `width: ${
          (strength / 5) * 100
        }%; background-color: deepskyblue;`;
      }
      break;

    case 5:
      {
        passwordChecker.style.borderColor = 'lime';

        progressBar.style.cssText = `width: ${
          (strength / 5) * 100
        }%; background-color: lime;`;
      }
      break;

    default:
      break;
  }
};

/* Extra Explanation

case 0 :   (strength / 5) * 100 =  (0/5)*100 = 0
case 1 :   (strength / 5) * 100 =  (1/5)*100 = 20
case 2 :   (strength / 5) * 100 =  (2/5)*100 = 40
case 3 :   (strength / 5) * 100 =  (3/5)*100 = 60
case 4 :   (strength / 5) * 100 =  (4/5)*100 = 80
case 5 :   (strength / 5) * 100 =  (5/5)*100 = 100


*/
