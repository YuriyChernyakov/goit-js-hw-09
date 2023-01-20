function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const newPromise = { position, delay };
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(newPromise);
    }
    reject(newPromise);
  });
}

import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('click', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  if (
    event.currentTarget.delay.value < 0 ||
    event.currentTarget.step.value < 0 ||
    event.currentTarget.amount.value < 0
  ) {
    Notiflix.Notify.failure(
      `Value cannot be less than 0`,
    );
    return;
  }
  const amount = Number(event.currentTarget.amount.value);
  const delayStep = Number(event.currentTarget.step.value);
  let delay = Number(event.currentTarget.delay.value);
  for (let position = 1; position <= amount; position++) {
    createPromise(position, delay)
      .then(({ position, delay }) =>
        setTimeout(() => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`,
          );
        }, delay)
      )
      .catch(({ position, delay }) =>
        setTimeout(() => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`,
           );
        }, delay)
      );
    delay += delayStep;
  }
}