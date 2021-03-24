import {tokioCenterLat, tokioCenterLng, mainPinMarker} from './map.js';
import {showSubmitMessage, successSubmitMessage, errorSubmitMessage} from './submit-messages.js';

let adForm = document.querySelector('.ad-form');
let adButtonRemove = adForm.querySelector('.ad-form__reset');

let adTitleInput = adForm.querySelector('#title');
let adAddressInput = adForm.querySelector('#address');
let adDescriptionInput = adForm.querySelector('#description');

let adTypeInput = document.querySelector('#type');
let adPriceInput = document.querySelector('#price');

let adTimeinInput = document.querySelector('#timein');
let adTimeoutInput = document.querySelector('#timeout');

let adRoomsInput = document.querySelector('#room_number');
let adCapacityInput = document.querySelector('#capacity');
let valuesOfCapacity = adCapacityInput.querySelectorAll('option');
const valuesOfPriceAndRooms = {
  bungalow: '0',
  flat: '1000',
  house: '5000',
  palace: '10000',
};
const roomsType = {
  oneRoom: 1,
  twoRoom: 2,
  threeRoom: 3,
  oneHundredRoom: 100,
};

let adFeatures = document.querySelectorAll('.feature__checkbox');

const defineValuesAndPrice = function (types) {
  if (adTypeInput.value === 'bungalow'){
    adPriceInput.setAttribute('placeholder', types.bungalow);
    adPriceInput.min = types.bungalow;
  }
  if (adTypeInput.value === 'flat'){
    adPriceInput.setAttribute('placeholder', types.flat);
    adPriceInput.min = types.flat;
  }
  if (adTypeInput.value === 'house'){
    adPriceInput.setAttribute('placeholder', types.house);
    adPriceInput.min = types.house;
  }
  if (adTypeInput.value === 'palace'){
    adPriceInput.setAttribute('placeholder', types.palace);
    adPriceInput.min = types.palace;
  }
};

export const clearForm = () => {
  adTitleInput.value = '';
  adDescriptionInput.value = '';
  adPriceInput.value = '';
  adAddressInput.value = tokioCenterLat + ' , ' + tokioCenterLng;
  mainPinMarker.setLatLng([tokioCenterLat, tokioCenterLng]).update();
  for (let i = 0; i < adFeatures.length; i++){
    if (adFeatures[i].checked){
      adFeatures[i].checked = false;
    }
  }
};

export const setAdFormSubmit = (onSuccess, onError) => {
  adForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch(
      ' https://22.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then(() => onSuccess())
      .catch(() => onError())
  })
}

export const showSuccessSubmitActions = () => {
  clearForm();
  showSubmitMessage(successSubmitMessage);
}

export const showError = () => {
  showSubmitMessage(errorSubmitMessage);
}

adTypeInput.addEventListener('click', function() {
  defineValuesAndPrice(valuesOfPriceAndRooms)
});

adTimeinInput.addEventListener('click', function() {
  adTimeoutInput.value = adTimeinInput.value;
});

adTimeoutInput.addEventListener('click', function() {
  adTimeinInput.value = adTimeoutInput.value;
});

const defineRoomsAndCapacity = function () {
  if (adRoomsInput.value == roomsType.oneRoom){
    for (let i = 0; i <valuesOfCapacity.length; i++){
      valuesOfCapacity[i].setAttribute('disabled', 'disabled');
    }
    valuesOfCapacity[2].setAttribute('selected', 'selected')
    valuesOfCapacity[2].removeAttribute('disabled', 'disabled');
  }
  if (adRoomsInput.value == roomsType.twoRoom){
    valuesOfCapacity[1].setAttribute('selected', 'selected');
    valuesOfCapacity[0].setAttribute('disabled', 'disabled');
    valuesOfCapacity[3].setAttribute('disabled', 'disabled');
  }
  if (adRoomsInput.value == roomsType.threeRoom){
    for (let i = 0; i <valuesOfCapacity.length; i++){
      valuesOfCapacity[i].removeAttribute('selected', 'selected');
      valuesOfCapacity[i].removeAttribute('disabled', 'disabled');
    }
    valuesOfCapacity[2].setAttribute('selected', 'selected');
    valuesOfCapacity[3].setAttribute('disabled', 'disabled');
  }
  if (adRoomsInput.value == roomsType.oneHundredRoom){
    for (let i = 0; i <valuesOfCapacity.length; i++){
      valuesOfCapacity[i].setAttribute('disabled', 'disabled');
    }
    valuesOfCapacity[3].setAttribute('selected', 'selected');
    valuesOfCapacity[3].removeAttribute('disabled', 'disabled');
  }
};

adRoomsInput.addEventListener('click', function() {
  defineRoomsAndCapacity();
});

adButtonRemove.addEventListener('click', function(evt) {
  evt.preventDefault();
  clearForm();
});


