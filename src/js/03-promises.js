const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const amount = Number(document.querySelector('[name="amount"]').value);
  const step = Number(document.querySelector('[name="step"]').value);
  const delay = Number(document.querySelector('[name="delay"]').value);

  for (let i = 0; i <= amount; i += 1) {
    const position = i + 1;
    const currentDelay = delay + i * step;

    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        alert(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        alert(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      setTimeout(() => {
        resolve({ position, delay });
      }, delay);
    } else {
      setTimeout(() => {
        reject({ position, delay });
      }, delay);
    }
  });
}
