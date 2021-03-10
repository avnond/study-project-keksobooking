/* global L:readonly */
const map = L.map('map-canvas')
  .setView({
    lat: 35.68951,
    lng: 139.69171,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [40, 50],
  iconAnchor: [20, 50],
});

const marker = L.marker(
  {
    lat: 35.68951,
    lng: 139.69171,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
marker.addTo(map);

let addressInput = document.querySelector('#address');
addressInput.value = map._lastCenter.lat + ' , ' + map._lastCenter.lng;

marker.on('moveend', () => {
  let coordinateX = marker._latlng.lat;
  let coordinateY = marker._latlng.lng;
  addressInput.value = coordinateX.toFixed(5) + ' , ' + coordinateY.toFixed(5);
});
