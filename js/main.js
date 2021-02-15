const HOUSE_TITLES = [
  'Замок принцессы',
  'Прекрасное жилище',
  'Дом с видом на море',
  'Дом с привидениями',
];

const MIN_HOUSE_COST = 5000;
const MAX_HOUSE_COST = 1000000;

const HOUSE_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];
const MIN_HOUSE_ROOMS = 1;
const MAX_HOUSE_ROOMS = 80;

const MIN_HOUSE_GUESTS = 1;
const MAX_HOUSE_GUESTS = 100;

const TIME_POINTS = [
  '12:00',
  '13:00',
  '14:00',
];

const HOUSE_DESCRIPTION = ['Чистые помещения, открытая веранда, вежливые соседи', 'Крыша немного подтекает, но это создаёт особый шарм' , 'Дом для приятного отдыха. Можно с детьми и животными', 'Развитая инфраструктура: рядом лес, парк и Пятёрочка'];
const HOUSE_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const HOUSE_PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]
const MIN_COORDINATES_X = 35.65000;
const MAX_COORDINATES_X = 35.70000;

const MIN_COORDINATES_Y = 139.70000;
const MAX_COORDINATES_Y = 139.80000;

const COORDINATES_PRECISION = 5;

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

const getAd = () => {
  const ad = {
    author: {
      avatar: getRandomAvatar(),
    },
    offer: {
      title: getRandomArrayElement(HOUSE_TITLES),
      price: getRandomInteger(MIN_HOUSE_COST, MAX_HOUSE_COST),
      type: getRandomArrayElement(HOUSE_TYPES),
      rooms: getRandomInteger(MIN_HOUSE_ROOMS, MAX_HOUSE_ROOMS),
      guests: getRandomInteger(MIN_HOUSE_GUESTS, MAX_HOUSE_GUESTS),
      checkin: getRandomArrayElement(TIME_POINTS),
      checkout: getRandomArrayElement(TIME_POINTS),
      features: getRandomlySlicedArray(HOUSE_FEATURES),
      description: getRandomArrayElement(HOUSE_DESCRIPTION),
      photos: getRandomlySlicedArray(HOUSE_PHOTOS),
    },
    location: {
      x: getRandomForSign(MIN_COORDINATES_X, MAX_COORDINATES_X, COORDINATES_PRECISION),
      y: getRandomForSign(MIN_COORDINATES_Y, MAX_COORDINATES_Y, COORDINATES_PRECISION),
    },
  }
  ad.offer.address = ad.location.x + ' , ' + ad.location.y;
  return ad;
}

for (let i = 1; i < 11; i++) {
  console.log(getAd());
}
