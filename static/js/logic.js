// Creating map object
var myMap = L.map("map", {
  center: [52.7954791, -0.5402403],
  zoom: 4
});

// Adding tile layer
L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
  }
).addTo(myMap);


var geojson;

// Grab the data with d3
d3.json("static/js/top_five.json").then(function(data) {

  L.geoJson(data).addTo(myMap);
  // console.log(data);
  // Create a new choropleth layer
  geojson = L.choropleth(data, {
    // Define what  property in the features to use
    valueProperty: "points",

    // Set color scale
    scale: ["#ffffb2", "#b10026"],

    // Number of breaks in step range
    steps: 10,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },

    // Binding a pop-up to each layer
    onEachFeature: function(feature, layer) {
      layer.bindPopup(
        feature.properties.country +
          ", " +
          feature.properties.points+
          "<br>Median Price per bottle of wine:<br>" +
          "$" +
          feature.properties.price
      );
    }
  }).addTo(myMap);

  var wineIcon = L.icon({
    iconUrl: '../images/noun_wine.png',
  
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  L.marker([51.5, -0.09], {icon: wineIcon}).addTo(myMap);

});
