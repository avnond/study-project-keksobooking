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
getArray(getArray(10, getAd));

// // Задание 5
export let containerMap = document.getElementById('map-canvas');
let newCardTemplate = document.querySelector('#card').content;
let cardAvatar = newCardTemplate.querySelector('.popup__avatar');
let cardTitle = newCardTemplate.querySelector('.popup__title');
let cardAddress = newCardTemplate.querySelector('.popup__text--address');
let cardPrice = newCardTemplate.querySelector('.popup__text--price');
let cardType = newCardTemplate.querySelector('.popup__type');
let cardRoomsGuests = newCardTemplate.querySelector('.popup__text--capacity');
let cardTime = newCardTemplate.querySelector('.popup__text--time');
let cardFeatures = newCardTemplate.querySelector('.popup__features');
let featureClasses = [
  'popup__feature--wifi',
  'popup__feature--dishwasher',
  'popup__feature--parking',
  'popup__feature--washer',
  'popup__feature--elevator',
  'popup__feature--conditioner',
];

let cardDescription = newCardTemplate.querySelector('.popup__description');
let cardPhotos = newCardTemplate.querySelector('.popup__photos');

createAvatarScr(newArray[0].author.avatar, cardAvatar);
addStringToElement(newArray[0].offer.title, cardTitle);
addStringToElement(newArray[0].offer.address, cardAddress);
addStringToElement(newArray[0].offer.price + ' ₽/ночь', cardPrice);
defineHouseType(newArray[0].offer.type, cardType);
addStringToElement(newArray[0].offer.rooms + ' комнаты для ' + newArray[0].offer.guests + ' гостей', cardRoomsGuests);
addStringToElement('Заезд после ' + newArray[0].offer.checkin + ' ,выезд до ' + newArray[0].offer.checkout, cardTime);
addChildWithTwoClasses('li', 'popup__feature', featureClasses, cardFeatures, newArray[0].offer.features);
addStringToElement(newArray[0].offer.description, cardDescription);
addImgChildWithAttributes('img', '.popup-photo', cardPhotos, newArray[0].offer.photos);
