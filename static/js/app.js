// PSEUDOCODE:

// Put this list of unique countries in an array for the leaflet part
// Need to sum the point & price and find the average (how to find an average of all the values of the same object)
// Create a list of dictionaries with objects and keys, where country, points, prices are objects and avg are keys
// Get the latitude and longitude for each country
// Convert it to df or save in csv - upload to sqlite and grab with d3 from flask route afterwards

// // Grab the data with d3
// var url = "/country";

// d3.json(url, { crossOrigin: "anonymous" }).then(function(response) {
//   console.log(response);
// });