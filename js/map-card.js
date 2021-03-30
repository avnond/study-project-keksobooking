// generate cards
import {
  addStringToElement,
  defineHouseType,
  addToContainer,
  addChildWithTwoClasses,
  addImgChildWithAttributes
} from './generate-similar-elements.js';

let templateContainer = document.querySelector('#card').content;
export let containers = [];
export const SIMILAR_ADS_COUNT = 10;

export let generatePointMapContainers = function (count, array) {
  for (let j = 0; j < count; j++){
    let newTemplate = document.querySelector('#card').cloneNode(false);
    let popup = templateContainer.querySelector('.popup').cloneNode(false);
    newTemplate.appendChild(popup);
    document.body.append(newTemplate);
    popup.classList.add('popup-new');
    array.push(popup);
  }
};

export let createRandomMapPoints = function (dataArray) {
  for (let i = 0; i < dataArray.length; i++){
    let cardAvatar = templateContainer.querySelector('.popup__avatar').cloneNode(true);
    cardAvatar.src = dataArray[i].author.avatar;
    addToContainer(cardAvatar, containers[i]);
    let cardTitle = templateContainer.querySelector('.popup__title').cloneNode(true);
    addStringToElement(dataArray[i].offer.title, cardTitle);
    addToContainer(cardTitle, containers[i]);
    let cardAddress = templateContainer.querySelector('.popup__text--address').cloneNode(true);
    addStringToElement(dataArray[i].offer.address, cardAddress);
    addToContainer(cardAddress, containers[i]);
    let cardPrice = templateContainer.querySelector('.popup__text--price').cloneNode(true);
    addStringToElement(dataArray[i].offer.price + ' ₽/ночь', cardPrice);
    addToContainer(cardPrice, containers[i]);
    let cardType = templateContainer.querySelector('.popup__type').cloneNode(true);
    defineHouseType(dataArray[i].offer.type, cardType);
    addToContainer(cardType, containers[i]);
    let cardRoomsGuests = templateContainer.querySelector('.popup__text--capacity').cloneNode(true);
    addStringToElement(dataArray[i].offer.rooms + ' комнаты для ' + dataArray[i].offer.guests + ' гостей', cardRoomsGuests);
    addToContainer(cardRoomsGuests, containers[i]);
    let cardTime = templateContainer.querySelector('.popup__text--time').cloneNode(true);
    addStringToElement('Заезд после ' + dataArray[i].offer.checkin + ' ,выезд до ' + dataArray[i].offer.checkout, cardTime);
    addToContainer(cardTime, containers[i]);
    let cardFeatures = templateContainer.querySelector('.popup__features').cloneNode(true);
    let featureClasses = [
      'popup__feature--wifi',
      'popup__feature--dishwasher',
      'popup__feature--parking',
      'popup__feature--washer',
      'popup__feature--elevator',
      'popup__feature--conditioner',
    ];
    addChildWithTwoClasses('li', 'popup__feature', featureClasses, cardFeatures, dataArray[i].offer.features);
    addToContainer(cardFeatures, containers[i]);
    let cardDescription = templateContainer.querySelector('.popup__description').cloneNode(true);
    addStringToElement(dataArray[i].offer.description, cardDescription, containers[i]);
    addToContainer(cardDescription, containers[i]);
    let cardPhotos = templateContainer.querySelector('.popup__photos').cloneNode(true);
    addImgChildWithAttributes('img', '.popup-photo', cardPhotos, dataArray[i].offer.photos);
    addToContainer(cardPhotos, containers[i]);
  }
};


export let createFilterAds = function (dataArray) {
  const currentFilterAds = [];
  generatePointMapContainers(dataArray.length, currentFilterAds);
  for (let i = 0; i < dataArray.length; i++){
    let cardAvatar = templateContainer.querySelector('.popup__avatar').cloneNode(true);
    cardAvatar.src = dataArray[i].author.avatar;
    addToContainer(cardAvatar, currentFilterAds[i]);

    let cardTitle = templateContainer.querySelector('.popup__title').cloneNode(true);
    addStringToElement(dataArray[i].offer.title, cardTitle);
    addToContainer(cardTitle, currentFilterAds[i]);

    let cardAddress = templateContainer.querySelector('.popup__text--address').cloneNode(true);
    addStringToElement(dataArray[i].offer.address, cardAddress, currentFilterAds[i]);
    addToContainer(cardAddress, currentFilterAds[i]);

    let cardPrice = templateContainer.querySelector('.popup__text--price').cloneNode(true);
    addStringToElement(dataArray[i].offer.price + ' ₽/ночь', cardPrice, currentFilterAds[i]);
    addToContainer(cardPrice, currentFilterAds[i]);

    let cardType = templateContainer.querySelector('.popup__type').cloneNode(true);
    defineHouseType(dataArray[i].offer.type, cardType, currentFilterAds[i]);
    addToContainer(cardType, currentFilterAds[i]);

    let cardRoomsGuests = templateContainer.querySelector('.popup__text--capacity').cloneNode(true);
    addStringToElement(dataArray[i].offer.rooms + ' комнаты для ' + dataArray[i].offer.guests + ' гостей', cardRoomsGuests, currentFilterAds[i]);
    addToContainer(cardRoomsGuests, currentFilterAds[i]);

    let cardTime = templateContainer.querySelector('.popup__text--time').cloneNode(true);
    addStringToElement('Заезд после ' + dataArray[i].offer.checkin + ' ,выезд до ' + dataArray[i].offer.checkout, cardTime, currentFilterAds[i]);
    addToContainer(cardTime, currentFilterAds[i]);

    let cardFeatures = templateContainer.querySelector('.popup__features').cloneNode(true);
    let featureClasses = [
      'popup__feature--wifi',
      'popup__feature--dishwasher',
      'popup__feature--parking',
      'popup__feature--washer',
      'popup__feature--elevator',
      'popup__feature--conditioner',
    ];
    addChildWithTwoClasses('li', 'popup__feature', featureClasses, cardFeatures, dataArray[i].offer.features, currentFilterAds[i]);
    addToContainer(cardFeatures, currentFilterAds[i]);

    let cardDescription = templateContainer.querySelector('.popup__description').cloneNode(true);
    addStringToElement(dataArray[i].offer.description, cardDescription, currentFilterAds[i]);
    addToContainer(cardDescription, currentFilterAds[i]);

    let cardPhotos = templateContainer.querySelector('.popup__photos').cloneNode(true);
    addImgChildWithAttributes('img', '.popup-photo', cardPhotos, dataArray[i].offer.photos, currentFilterAds[i]);
    addToContainer(cardPhotos, currentFilterAds[i]);
  }
  return currentFilterAds;
};
