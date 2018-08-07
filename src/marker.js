const mapboxgl = require('mapbox-gl');

function buildMarker(type, coordinates) {
  const markerElement = document.createElement("div");
  markerElement.style.width = "32px";
  markerElement.style.height = "39px";
  if(type === 'hotel') {
    markerElement.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  }
  else if(type === 'activity') {
    markerElement.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }
  else if(type === 'restaurant') {
    markerElement.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  }

  const marker = new mapboxgl.Marker(markerElement)
  .setLngLat(coordinates);

  return marker;
}

module.exports = buildMarker;
