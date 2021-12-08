const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

let intervalId = null;

function printTime() {
  intervalId = setInterval(() => {
    printMinutes();
    printSeconds();
  }, 1000)
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes); // print on our HTML
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds);
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  chronometer.start();
}

function setSplitBtn() {
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
}

function setStartBtn() {
  btnRightElement.classList.remove('stop');
  btnRightElement.classList.add('start');
  chronometer.stop();
}

function setResetBtn() {
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.includes('stop')) {
    setStartBtn();
  } else if (btnLeftElement.classList.includes('start')) {
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
});
