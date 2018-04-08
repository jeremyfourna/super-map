const R = require('ramda');
const L = require('leaflet');

const franceRegions = require('./public/FRA_adm1.json');
const germanRegions = require('./public/DEU_adm1.json');

function buildMap(selector) {
  const map = L.map(selector).setView([48.864715, 2.345581], 5);
  map.on('click', onMapClick);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  return map;
}

function onMapClick(event) {
  return console.log('You clicked the map at ', event.latlng);
}

function addGeojsonToMap(geojsonData, map) {
  return L.geoJson(geojsonData).addTo(map);
}

const map = buildMap('app');

addGeojsonToMap([franceRegions, germanRegions], map);
