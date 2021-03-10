import {
  getRandomForSign,
  getRandomInteger,
  getRandomAvatar,
  getRandomArrayElement,
  getRandomlySlicedArray
} from './util.js';
import {
  HOUSE_TITLES,
  MIN_HOUSE_COST,
  MAX_HOUSE_COST,
  HOUSE_TYPES,
  MIN_HOUSE_ROOMS,
  MAX_HOUSE_ROOMS,
  MIN_HOUSE_GUESTS,
  MAX_HOUSE_GUESTS,
  TIME_POINTS,
  HOUSE_DESCRIPTIONS,
  HOUSE_FEATURES,
  HOUSE_PHOTOS,
  MIN_COORDINATES_X,
  MAX_COORDINATES_X,
  MIN_COORDINATES_Y,
  MAX_COORDINATES_Y,
  COORDINATES_PRECISION
} from './data.js';
import {
  addStringToElement,
  defineHouseType,
  createAvatarScr,
  addChildWithTwoClasses,
  addImgChildWithAttributes
} from './generate-similar-elements.js';
import './form.js';
import './page-conditions.js';
import './map.js';
import {removeAllChildren} from './generate-similar-elements.js'

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
      description: getRandomArrayElement(HOUSE_DESCRIPTIONS),
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

let newArray;
const getArray = (length = 0, cb) => {
  newArray= Array.from({ length: length }, cb);
  return newArray;
}
getArray(10, getAd);

// // Задание 5
export let templateContainer = document.querySelector('#card');
console.log(templateContainer);
let cardAvatar = document.querySelector('.popup__avatar');
let cardTitle = document.querySelector('.popup__title');
let cardAddress = document.querySelector('.popup__text--address');
let cardPrice = document.querySelector('.popup__text--price');
let cardType = document.querySelector('.popup__type');
let cardRoomsGuests = document.querySelector('.popup__text--capacity');
let cardTime = document.querySelector('.popup__text--time');
let cardFeatures = document.querySelector('.popup__features');
let featureClasses = [
  'popup__feature--wifi',
  'popup__feature--dishwasher',
  'popup__feature--parking',
  'popup__feature--washer',
  'popup__feature--elevator',
  'popup__feature--conditioner',
];
let cardDescription = document.querySelector('.popup__description');
let cardPhotos = document.querySelector('.popup__photos');
console.log(cardAvatar);

const createRandomMapPoints = function (list) {
  for (let i = 0; i < list.length; i++){
    createAvatarScr(newArray[i].author.avatar, cardAvatar);
    addStringToElement(newArray[i].offer.title, cardTitle);
    addStringToElement(newArray[i].offer.address, cardAddress);
    addStringToElement(newArray[i].offer.price + ' ₽/ночь', cardPrice);
    defineHouseType(newArray[i].offer.type, cardType);
    addStringToElement(newArray[i].offer.rooms + ' комнаты для ' + newArray[i].offer.guests + ' гостей', cardRoomsGuests);
    addStringToElement('Заезд после ' + newArray[i].offer.checkin + ' ,выезд до ' + newArray[i].offer.checkout, cardTime);
    addChildWithTwoClasses('li', 'popup__feature', featureClasses, cardFeatures, newArray[i].offer.features);
    addStringToElement(newArray[i].offer.description, cardDescription);
    addImgChildWithAttributes('img', '.popup-photo', cardPhotos, newArray[i].offer.photos);
    // console.log(getArray(10, getAd)[i])
  }
}
createRandomMapPoints(getArray(10, getAd));
