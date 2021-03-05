const valuesOfPriceAndRooms = {
  bungalow: '0',
  flat: '1000',
  house: '5000',
  palace: '10000',
}

let adTypeInput = document.querySelector('#type');
let adPriceInput = document.querySelector('#price');

let adTimeinInput = document.querySelector('#timein');
let adTimeoutInput = document.querySelector('#timeout');

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
