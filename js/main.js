let author = {
  avatar: '',
}

let offer = {
  title: 'Замок принцессы',
  address: '',
  price: null,
  type: [],
  rooms: null,
  guests: null,
  checkin: [],
  checkout: [],
  features: [],
  description: 'Светлые большие комнаты, в подвале есть темница',
  photos: [],
}

let location = {
  x: '',
  y: '',
}

// Получение числа с плавающей запятой
const getRandomForSign = function (min, max, sign){
  return (Math.random() * (max - min) + min).toFixed(sign);
}
getRandomForSign();
location.x = getRandomForSign(35.65, 35.70, 5);
location.y = getRandomForSign(139.7, 139.8, 5);
offer.address = (location.x + ' , ' + location.y);

// Получение рандомного целого числа
const getRandomInteger = function (min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInteger();
author.avatar = 'img/avatars/user0' + getRandomInteger(1, 8) +'.png';
offer.guests = getRandomInteger(1, 100);
offer.rooms = getRandomInteger(1, 100);
offer.price = getRandomInteger(1, 1000000);

//photos
let sourcePhotosArr = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]
// features
let sourceFeaturesArr = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
// checkout & checkin & type
let sourceCheckArr = ['12:00', '13:00', '14:00'];
let sourceHouseTypeArr = ['palace', 'flat', 'house', 'bungalow'];

const getRandomElement = function (sourceArray){ //получаем рандомный элемент из массива
  let randomKey = Math.floor(Math.random() * sourceArray.length);
  return randomKey;
}
offer.checkin.push(sourceCheckArr[getRandomElement(sourceCheckArr)]);
offer.checkout.push(sourceCheckArr[getRandomElement(sourceCheckArr)]);
offer.type.push(sourceHouseTypeArr[getRandomElement(sourceHouseTypeArr)]);

const getRandomArrayLength = function (maxLength){ //генерируем длину будущего массива
  maxLength = Math.floor(maxLength);
  return Math.floor(Math.random() * (maxLength));
}

let photosNewLength = getRandomArrayLength(sourcePhotosArr.length); //длина будущего массива
let featuresNewLength = getRandomArrayLength(sourcePhotosArr.length);

for (let i = 0; i <= photosNewLength; i++) {
  offer.photos.push(sourcePhotosArr[i]);
}

for (let i = 0; i <= featuresNewLength; i++) {
  offer.features.push(sourceFeaturesArr[i]);
}

console.log(author , offer, location);

