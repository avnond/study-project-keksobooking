
import {
  coordinatesArrayX,
  coordinatesArrayY
} from './generate-cards.js';

/* global L:readonly */
const map = L.map('map-canvas')
  .setView({
    lat: 35.68951,
    lng: 139.69171,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const extraPinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.68951,
    lng: 139.69171,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.on('moveend', () => {
  let coordinateX = mainPinMarker._latlng.lat;
  let coordinateY = mainPinMarker._latlng.lng;
  addressInput.value = coordinateX.toFixed(5) + ' , ' + coordinateY.toFixed(5);
});

mainPinMarker.addTo(map);

let addressInput = document.querySelector('#address');
addressInput.value = map._lastCenter.lat + ' , ' + map._lastCenter.lng;


export const createCustomPopups = (dataArray, cardsArray) => {
  console.log(cardsArray[1])
  for (let i = 0; i < dataArray.length; i++) {
    const extraPoint = L.marker(
      {
        lat: coordinatesArrayX[i],
        lng: coordinatesArrayY[i],
      },
      {
        icon: extraPinIcon,
      },
    );
    extraPoint.bindPopup(cardsArray[i]);
    extraPoint.addTo(map);
  }
};
