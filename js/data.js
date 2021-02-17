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

const HOUSE_DESCRIPTIONS = ['Чистые помещения, открытая веранда, вежливые соседи', 'Крыша немного подтекает, но это создаёт особый шарм' , 'Дом для приятного отдыха. Можно с детьми и животными', 'Развитая инфраструктура: рядом лес, парк и Пятёрочка'];
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

export {
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
};
