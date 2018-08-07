const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const pKey = require('../secrets.js')

mapboxgl.accessToken = pKey.key;

var map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10'
});

console.log("index.js running");
