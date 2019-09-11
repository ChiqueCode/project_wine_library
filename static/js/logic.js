// leaflet providers link to pick the tileLayer => https://leaflet-extras.github.io/leaflet-providers/preview/

// Creating map object
var myMap = L.map("map", {
  center: [52.7954791, -0.5402403],
  zoom: 4
});

L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
  accessToken: API_KEY
}).addTo(myMap);

// Turning off Zoom on the map
myMap.scrollWheelZoom.disable();
myMap.on('focus', () => { myMap.scrollWheelZoom.enable(); });
myMap.on('blur', () => { myMap.scrollWheelZoom.disable(); });

var geojson;

// Grab the data with d3
d3.json("static/js/wine_polygon.json").then(function(data) {
  L.geoJson(data).addTo(myMap);

  // Create a new choropleth layer
  geojson = L.choropleth(data, {
    // Define what  property in the features to use
    valueProperty: "polygon",

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#540e33",
      weight: 2,
      fillOpacity: 0.7
    },

    // Binding a pop-up to each layer
    onEachFeature: function(feature, layer) {
      layer.bindPopup(
        feature.properties.country +
          "<br>Quality of Wine: " +
          feature.properties.points +
          " points" +
          "<br>Price per bottle of Wine: " +
          "$" +
          feature.properties.price
      );
    }
  }).addTo(myMap);
});
