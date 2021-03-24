
/* global L:readonly */
export let tokioCenterLat = 35.68951;
export let tokioCenterLng = 139.69171;

export const map = L.map('map-canvas')
  .setView({
    lat: tokioCenterLat,
    lng: tokioCenterLng,
  }, 10);

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

export const mainPinMarker = L.marker(
  {
    lat: tokioCenterLat,
    lng: tokioCenterLng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

let addressInput = document.querySelector('#address');
addressInput.value = map._lastCenter.lat + ' , ' + map._lastCenter.lng;

mainPinMarker.on('moveend', () => {
  let coordinateX = mainPinMarker._latlng.lat;
  let coordinateY = mainPinMarker._latlng.lng;
  addressInput.value = coordinateX.toFixed(5) + ' , ' + coordinateY.toFixed(5);
});

mainPinMarker.addTo(map);

export const createCustomPopups = (dataArray, cardsArray) => {
  for (let i = 0; i < dataArray.length; i++) {
    const extraPoint = L.marker(
      {
        lat: dataArray[i].location.lat,
        lng: dataArray[i].location.lng,
      },
      {
        icon: extraPinIcon,
      },
    );
    extraPoint.bindPopup(cardsArray[i]);
    extraPoint.addTo(map);
  }
};
