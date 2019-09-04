// Plotly chart for reviews 
function reviewsChart() {
    reviewsURL = "/reviews";

    d3.json(reviewsURL).then(function(data) {
      var data = [data];
      var layout = {
        title: "Reviews count per Country"
      };
      Plotly.plot("ReviewsCount", data, layout);
    });
  }

  reviewsChart();