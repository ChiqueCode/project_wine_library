var url = "/data";

d3.json(url, { crossOrigin: "anonymous" }).then(function(response) {
  console.log(response);
});