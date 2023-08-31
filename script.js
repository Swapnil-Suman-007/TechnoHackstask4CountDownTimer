const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const restartBtn = document.getElementById('restartBtn');
const timerInput = document.getElementById('timerInput');

let timer;
let timeInSeconds = 0;
let isRunning = false;

function updateTimerDisplay() {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  timerDisplay.textContent = formattedTime;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
    restartBtn.disabled = true;
    timerInput.disabled = true;

    timer = setInterval(() => {
      if (timeInSeconds > 0) {
        timeInSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
        resetBtn.disabled = false;
        restartBtn.disabled = false;
        timerInput.disabled = false;
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
  restartBtn.disabled = false;
  timerInput.disabled = false;
}

function resetTimer() {
  stopTimer();
  timeInSeconds = parseInt(timerInput.value) * 60;
  updateTimerDisplay();
}

function restartTimer() {
  resetTimer();
  startTimer();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
restartBtn.addEventListener('click', restartTimer);

resetTimer();
