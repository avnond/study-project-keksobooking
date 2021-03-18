export const valuesOfPriceAndRooms = {
  bungalow: '0',
  flat: '1000',
  house: '5000',
  palace: '10000',
}

export let adTypeInput = document.querySelector('#type');
export let adPriceInput = document.querySelector('#price');

export let adTimeinInput = document.querySelector('#timein');
export let adTimeoutInput = document.querySelector('#timeout');

export let adRoomsInput = document.querySelector('#room_number');
export let adCapacityInput = document.querySelector('#capacity');
export let valuesOfRooms = adRoomsInput.querySelectorAll('option');
export let valuesOfCapacity = adCapacityInput.querySelectorAll('option');

export const defineValuesAndPrice = function (types) {
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

export const defineRoomsAndCapacity = function () {
  if (adRoomsInput.value === '1'){
    for (let i = 0; i <valuesOfCapacity.length; i++){
      valuesOfCapacity[i].setAttribute('disabled', 'disabled');
    }
    valuesOfCapacity[2].setAttribute('selected', 'selected')
    valuesOfCapacity[2].removeAttribute('disabled', 'disabled');
  }
  if (adRoomsInput.value === '2'){
    valuesOfCapacity[1].setAttribute('selected', 'selected');
    valuesOfCapacity[0].setAttribute('disabled', 'disabled');
    valuesOfCapacity[3].setAttribute('disabled', 'disabled');
  }
  if (adRoomsInput.value === '3'){
    for (let i = 0; i <valuesOfCapacity.length; i++){
      valuesOfCapacity[i].removeAttribute('selected', 'selected');
      valuesOfCapacity[i].removeAttribute('disabled', 'disabled');
    }
    valuesOfCapacity[2].setAttribute('selected', 'selected');
    valuesOfCapacity[3].setAttribute('disabled', 'disabled');
  }
  if (adRoomsInput.value === '100'){
    for (let i = 0; i <valuesOfCapacity.length; i++){
      valuesOfCapacity[i].setAttribute('disabled', 'disabled');
    }
    valuesOfCapacity[3].setAttribute('selected', 'selected');
    valuesOfCapacity[3].removeAttribute('disabled', 'disabled');
  }
}

adRoomsInput.addEventListener('click', function() {
  defineRoomsAndCapacity();
});
