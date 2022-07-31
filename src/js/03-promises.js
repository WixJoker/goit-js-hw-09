import { Notify } from 'notiflix/build/notiflix-notify-aio';

const createPromisesForm = document.querySelector('.form');

createPromisesForm.addEventListener('submit', createPromise);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        for (let i = 0; i < 3; i += 1) {
          i = position;
          resolve(position => console.log(position));
        }
      } else {
        reject('error!');
      }
    }, delay);
  });
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
