function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const delay = 1000;
const start = document.querySelector(`[data-start]`);
const stop = document.querySelector(`[data-stop]`);
let timer = null;

start.addEventListener('click', onStart);
stop.addEventListener('click', onStop);

function onStart() {
    start.disabled = true;
    timer = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
}, delay);
};

function onStop() {
    start.disabled = false;
    clearInterval(timer);
    return;
};