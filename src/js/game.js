const refs = {
  start: document.querySelector('.js-start'),
  container: document.querySelector('.js-container'),
  winner: document.querySelector('.js-winner'),
};

refs.start.addEventListener('click', onStart);

function onStart() {
  let counter = 0;

  [...refs.container.children].forEach(box => (box.textContent = ''));
  refs.winner.textContent = '';
  const promises = [...refs.container.children].map((_, i) => creatPromise(i));
  console.log(promises);
  Promise.allSettled(promises).then(items => {
    setTimeout(() => {
      items.forEach((item, i) => {
        if (item.status === 'fulfilled') {
          counter += 1;
        }
        refs.container.children[i].textContent = item.value || item.reason;

        setTimeout(() => {
          if (refs.container.children.length - 1 === i) {
            if (counter === refs.container.children.length || !counter) {
              alert('Winner');
            } else {
              alert('Lost');
            }
          }
        }, 500);
      }, 1000);
    });
  });
}

function creatPromise() {
  return new Promise((res, rej) => {
    const random = Math.random();

    if (random > 0.5) {
      res('🤑');
    } else {
      rej('😡');
    }
  });
}

// стандартний спосіб
// ----------------
// refs.start.addEventListener('click', onStart);

// function onStart() {
//   const result = [];

//   [...refs.container.children].forEach(box => (box.textContent = ''));
//   refs.winner.textContent = '';
//   [...refs.container.children].forEach((box, i) => {
//     creatPromise(i)
//       .then(smile => {
//         box.textContent = smile;
//         result.push('1');
//       })
//       .catch(smile => {
//         box.textContent = smile;
//       })
//       .finally(() => {
//         setTimeout(() => {
//           if ((i = refs.container.children.length - 1)) {
//             if (!result.length || result.length === 3) {
//               refs.winner.textContent = '🎉🎉Winner';
//             } else {
//               refs.winner.textContent = '😢Lost money';
//             }
//           }
//         }, 1000);
//       });
//   });
// }

// function creatPromise(delay) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const random = Math.random();

//       if (random > 0.5) {
//         res('🤑');
//       } else {
//         rej('😡');
//       }
//     }, delay * 500);
//   });
// }
