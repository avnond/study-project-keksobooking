/* eslint-disable no-console */
let getRandomIntInclusive = function (min, max, sigh){ //sigh - кол-во знаков после запятой
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.random() * (max - min + 1) + min).toFixed(sigh);
}
console.log(getRandomIntInclusive(1, 300, 4));
// Источник :  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
