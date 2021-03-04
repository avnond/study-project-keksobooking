let adTypeInput = document.querySelector('#type');
let adPriceInput = document.querySelector('#price');

let adTimeinInput = document.querySelector('#timein');
let adTimeoutInput = document.querySelector('#timeout');

adTypeInput.addEventListener('click', function() {
  if (adTypeInput.value === 'bungalow'){
    adPriceInput.setAttribute('placeholder', 0);
    adPriceInput.min = 0;
  }
  if (adTypeInput.value === 'flat'){
    adPriceInput.setAttribute('placeholder', 1000);
    adPriceInput.min = 1000;
  }
  if (adTypeInput.value === 'house'){
    adPriceInput.setAttribute('placeholder', 5000);
    adPriceInput.min = 5000;
  }
  if (adTypeInput.value === 'palace'){
    adPriceInput.setAttribute('placeholder', 10000);
    adPriceInput.min = 10000;
  }
});

adTimeinInput.addEventListener('click', function() {
  adTimeoutInput.value = adTimeinInput.value;
  console.log(adTimeoutInput, adTimeinInput);
});

adTimeoutInput.addEventListener('click', function() {
  adTimeinInput.value = adTimeoutInput.value;
});
