// Получение числа с плавающей запятой
const getRandomForSign = function (min, max, sign){
  return (Math.random() * (max - min) + min).toFixed(sign);
}

// Получение рандомного целого числа
const getRandomInteger = function (min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// create avatar
const getRandomAvatar = () => {
  return 'img/avatars/user0' + getRandomInteger(1, 8) +'.png';
}

// Получение рандомного элемента из массива
const getRandomArrayElement = function (sourceArray){
  let randomKey = Math.floor(Math.random() * sourceArray.length);
  return sourceArray[randomKey];
}

// Получение массива случайной длины
const getRandomlySlicedArray = (sourceArray) => {
  let maxLength = Math.floor(Math.random() * (sourceArray.length));
  let newArray = [];
  for (let i = 0; i <= maxLength; i++){
    newArray.push(sourceArray[i]);
  }
  return newArray;
}

export {
  getRandomForSign,
  getRandomInteger,
  getRandomAvatar,
  getRandomArrayElement,
  getRandomlySlicedArray
};
