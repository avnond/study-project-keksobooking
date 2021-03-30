import './page-conditions.js';
import {setAdFormSubmit, showSuccessSubmitActions, showError} from './form.js';
import {createCustomPopups} from './map.js';
import {generatePointMapContainers, createRandomMapPoints} from './map-card.js'
import {
  containers,
  SIMILAR_ADS_COUNT
} from './map-card.js';
import './filter.js';

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((data) => {
    generatePointMapContainers(SIMILAR_ADS_COUNT, containers);
    createRandomMapPoints(data);
    createCustomPopups(data, containers);
  });

setAdFormSubmit(showSuccessSubmitActions, showError);
