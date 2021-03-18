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

export let coordinatesArrayX = [];
export let coordinatesArrayY = [];

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
  }
  let x = getRandomForSign(MIN_COORDINATES_X, MAX_COORDINATES_X, COORDINATES_PRECISION);
  let y = getRandomForSign(MIN_COORDINATES_Y, MAX_COORDINATES_Y, COORDINATES_PRECISION);
  coordinatesArrayX.push(x);
  coordinatesArrayY.push(y);
  ad.offer.address = x + ' , ' + y;
  return ad;
};

let newArray;
const getArray = (length = 0, cb) => {
  newArray= Array.from({ length: length }, cb);
  return newArray;
}
export let randomAdsArray = getArray(10, getAd);

