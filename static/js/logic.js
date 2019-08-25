// sort the data by countries 
// find the average point for each country
// average price for each country

// Grab the data with d3
var url = "/country";

d3.json(url, { crossOrigin: "anonymous" }).then(function(response) {
  console.log(response);
});