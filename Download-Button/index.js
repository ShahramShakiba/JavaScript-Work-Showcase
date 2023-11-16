const downloadBtn = document.querySelector('.download-btn');

const fileLink =
  'https://drive.google.com/uc?export=download&id=1qbvSyn5DazTJvzZHh8B-I_somFSvyDg_';

const handleDownloadTimer = () => {
  if (downloadBtn.classList.contains('disable-timer')) {
    return (location.href = fileLink);
  }

  let timer = downloadBtn.dataset.timer;

  downloadBtn.innerHTML = `
  Your download will begin in 
  <b> &nbsp; ${timer} &nbsp; </b> 
  seconds
  `;

  const initCounter = setInterval(() => {
    if (timer > 0) {
      timer--;

      return (downloadBtn.innerHTML = `
      Your download will begin in <b> &nbsp; ${timer} &nbsp; </b> seconds`);
    }
    // your app will crash if you don't use clearInterval
    clearInterval(initCounter);

    location.href = fileLink;

    downloadBtn.textContent = 'Your file is downloading...';

    setTimeout(() => {
      downloadBtn.classList.replace('timer', 'disable-timer');

      downloadBtn.innerHTML = `
        <span class="icon material-symbols-rounded">
          vertical_align_bottom
        </span>
        
        <span class="text"> Download Again </span>`;
    }, 3000);
  }, 1000);
};

downloadBtn.addEventListener('click', handleDownloadTimer);

/* More Info 

=> fileLink :
 assigns a file-URL, It represents the file that will be downloaded when the button is clicked.




*/
