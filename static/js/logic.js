// Creating map object
var myMap = L.map("map", {
  center: [40.7128, -74.0059],
  zoom: 2.5
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// var geojsonLayer = new L.GeoJSON.AJAX("geojson.json");

// var geojsonLayer = L.geoJson.ajax("static/js/wine.json",{
//   middleware:function(data){
//       return esri2geoOrSomething(json);
//   }
// });



// Grab the data with d3

// var geojson;

d3.json("static/js/wine.json").then(function(data) {
  L.geoJson(data).addTo(myMap);
  // console.log(data);


  // Create a new choropleth layer
  // geojson = L.choropleth(data, {   
  // })
});

