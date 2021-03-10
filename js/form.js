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
