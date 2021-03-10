import {templateContainer} from './main.js';

export const addToContainer = function (element) {
  templateContainer.appendChild(element);
}

export const addStringToElement = function (str, element) {
  element.textContent = str;
  addToContainer(element);
}

export const defineHouseType = function (type, element) {
  if (type === 'flat') {
    element.textContent = 'Квартира';
  }
  if (type === 'bungalow') {
    element.textContent = 'Бунгало';
  }
  if (type === 'house') {
    element.textContent = 'Дом';
  }
  if (type === 'palace') {
    element.textContent = 'Дворец';
  }
  addToContainer(element);
}

export const createAvatarScr = function (randomSrc, element) {
  element.src = randomSrc;
  addToContainer(element);
}

export const addChildWithTwoClasses = function (childElement, childClass1, classArray, parent, randomArr) {
  removeAllChildren(parent);
  for (let i = 0; i < randomArr.length; i++){
    let newChild = document.createElement(childElement);
    newChild.classList.add(childClass1);
    for (let j = 0; j < classArray.length; j++) {
      newChild.classList.add(classArray[i]);
    }
    parent.appendChild(newChild);
  }
  addToContainer(parent);
}

export const addImgChildWithAttributes = function (childElement, childClass, parent, randomSrcArr) {
  removeAllChildren(parent);
  for (let i = 0; i < randomSrcArr.length; i++){
    let newChild = document.createElement(childElement);
    newChild.classList.add(childClass);
    newChild.src = randomSrcArr[i];
    newChild.width = '45';
    newChild.height = '40';
    newChild.alt = 'Фотография жилья';
    parent.appendChild(newChild);
  }
  addToContainer(parent);
}

export const removeAllChildren = function (parent) {
  parent.innerHTML = '';
}

