// sort the data by countries 
// find the average point for each country
// average price for each country

// Grab the data with d3
var url = "/country";

d3.json(url, { crossOrigin: "anonymous" }).then(function(response) {
  // console.log(response);
});

// countryArray = [];
// create a for loop if the country[i] = country[i+1], then create an object "country": "countryName", and key "points": "points" => += sum
// countryArray.push(country[i])
// and price += sum

// avgArray = [];
// for loop for countries and sums of price and points
// for country in countryArray:
// function for avg points and price
// var avgPrice = sumPrice / country[i].length;

// Percentage instead of averages? 