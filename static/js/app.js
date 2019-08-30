// Grab the data with d3
var url = "/country";

d3.json(url, { crossOrigin: "anonymous" }).then(function(response) {
  console.log(response);
});
