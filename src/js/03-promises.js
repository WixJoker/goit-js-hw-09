// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// const firstDelay = 1000;
// let delay = firstDelay;
// for (let = 0; i < 3; i += 1) {
//   new Promise(resolve => {
//     createPromise();
//     setTimeout(() => {
//       resolve(i), delay;
//     });
//   }).then(value => console.log(value));
//   delay = +step;
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
