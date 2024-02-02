let timer;
let seconds = 0;
let isRunning = false;

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateDisplay, 1000);
  }
}

function pauseStopwatch() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
}

function resetStopwatch() {
  seconds = 0;
  isRunning = false;
  clearInterval(timer);
  updateDisplay();
  clearLaps();
}

function lapTime() {
  if (isRunning) {
    const lapsContainer = document.getElementById('laps');
    const lapTimeItem = document.createElement('li');
    lapTimeItem.textContent = formatTime(seconds);
    lapsContainer.appendChild(lapTimeItem);
  }
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = formatTime(seconds);
  seconds++;
}

function clearLaps() {
  const lapsContainer = document.getElementById('laps');
  lapsContainer.innerHTML = '';
}

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}