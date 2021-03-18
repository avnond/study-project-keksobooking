let form = document.querySelector('.ad-form');
let formFieldsets = form.querySelectorAll('fieldset');
let mapFliters = document.querySelector('.map__filters');
let mapFlitersElements = mapFliters.children;

export const makePageDisabled = function () {
  form.classList.add('ad-form--disabled');
  mapFliters.classList.add('ad-form--disabled');
  for (let i = 0; i < formFieldsets.length; i++){
    formFieldsets[i].setAttribute('disabled', 'disabled');
  }
  for (let j = 0; j < mapFliters.children.length; j++){
    mapFlitersElements[j].setAttribute('disabled', 'disabled');
  }
}

export const makePageActive = function () {
  form.classList.remove('ad-form--disabled');
  mapFliters.classList.remove('ad-form--disabled');
  for (let i = 0; i < formFieldsets.length; i++){
    formFieldsets[i].removeAttribute('disabled');
  }
  for (let j = 0; j < mapFliters.children.length; j++){
    mapFlitersElements[j].removeAttribute('disabled');
  }
}
makePageDisabled();

window.onload = function() {
  makePageActive();
}

