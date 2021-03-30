import {createFilterAds} from './map-card.js';
import {createCustomPopups, removeAllMarkers} from './map.js';

let houseTypesFilter = document.querySelector('#housing-type');
let housePriceFilter = document.querySelector('#housing-price');
let houseRoomsFilter = document.querySelector('#housing-rooms');
let houseGuestsFilter = document.querySelector('#housing-guests');

const removeAndCreateNewMapPoints = (arrayTypeOnly) => {
  removeAllMarkers();
  createCustomPopups(arrayTypeOnly, createFilterAds(arrayTypeOnly));
}

const getAdsTypeFiltration = (arrayTypeOnly, data, type) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].offer.type === type){
      arrayTypeOnly.push(data[i]);
    }
  }
  removeAndCreateNewMapPoints(arrayTypeOnly);
}

const filterAdsByType = (list) => {
  if (houseTypesFilter.value === 'bungalow'){
    const onlyBungalows = [];
    getAdsTypeFiltration(onlyBungalows, list, 'bungalow');
  }
  if (houseTypesFilter.value === 'flat'){
    const onlyFlats = [];
    getAdsTypeFiltration(onlyFlats, list, 'flat');
  }
  if (houseTypesFilter.value === 'house'){
    const onlyHouses = [];
    getAdsTypeFiltration(onlyHouses, list, 'house');
  }
  if (houseTypesFilter.value === 'palace'){
    const onlyPalaces = [];
    getAdsTypeFiltration(onlyPalaces, list, 'palace');
  }
};

const filterAdsByPrice = (list) => {
  if (housePriceFilter.value === 'any'){
    removeAndCreateNewMapPoints(list);
  }

  if (housePriceFilter.value === 'middle'){
    const middlePrice = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].offer.price >= 10000 && list[i].offer.price < 50000){
        middlePrice.push(list[i]);
      }
    }
    removeAndCreateNewMapPoints(middlePrice);
  }

  if (housePriceFilter.value === 'low'){
    const lowPrice = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].offer.price < 10000){
        lowPrice.push(list[i]);
      }
    }
    removeAndCreateNewMapPoints(lowPrice);
  }

  if (housePriceFilter.value === 'high'){
    const highPrice = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].offer.price >= 50000){
        highPrice.push(list[i]);
      }
    }
    removeAndCreateNewMapPoints(highPrice);
  }
}

const filterAdsByRooms = (list) => {
  if (houseRoomsFilter.value === 'any'){
    removeAndCreateNewMapPoints(list);
  }
  if (houseRoomsFilter.value === '1'){
    const oneRoom = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].offer.rooms === 1){
        oneRoom.push(list[i]);
      }
    }
    removeAndCreateNewMapPoints(oneRoom);
  }
  if (houseRoomsFilter.value === '2'){
    const twoRooms = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].offer.rooms === 2){
        twoRooms.push(list[i]);
      }
    }
    removeAndCreateNewMapPoints(twoRooms);
  }
  if (houseRoomsFilter.value === '3'){
    const threeRooms = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].offer.rooms === 3){
        threeRooms.push(list[i]);
      }
    }
    removeAndCreateNewMapPoints(threeRooms);
  }
}

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((data) => {
    houseTypesFilter.addEventListener('change', function() {
      filterAdsByType(data);
    });
    housePriceFilter.addEventListener('change', function() {
      filterAdsByPrice(data);
    });
    houseRoomsFilter.addEventListener('change', function() {
      filterAdsByRooms(data);
    });
  });
