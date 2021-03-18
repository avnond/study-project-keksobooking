
import './form.js';
import './page-conditions.js';
import {createCustomPopups} from './map.js';
import {
  containers
} from './map-card.js';
import {
  randomAdsArray
} from './generate-cards.js';


createCustomPopups(randomAdsArray, containers);
console.log(containers);
