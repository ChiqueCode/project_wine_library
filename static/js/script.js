const dataset = [
    ["US", 235, 96], ["Spain", 110, 96], ["US", 90, 96], ["US", 65, 96], ["France", 66, 95], ["Spain", 73, 95], ["Spain", 65, 95], ["Spain", 110, 95], ["US", 65, 95]
];

// var url = "/d3";
// d3.json(url, function(dataset) {
//   console.log(dataset);
// });

// Constracting an SVG element
const width = 1000;
const height = 800;
const padding = 60;
const marginTop = 120;

// legend svg
const legendRectSize = 18;
const legendSpacing = 8;

// currency save in const with dollars formatting
const formatCurrency = d3.format("$,");

// Min and max for y axis for Price values
const maxLE = d3.max(dataset, d => d[1]);
const minLE = d3.min(dataset, d => d[1]);
// console.log(minLE); //50

const yScale = d3
  .scaleLinear()
  .domain([minLE, maxLE])
  .range([height - padding, marginTop]);

// Where Gini is x axis numbers for Quality values
const maxGini = d3.max(dataset, d => d[2]); // was d[3]
const minGini = d3.min(dataset, d => d[2]); // was d[3]
// console.log(maxGini); //13k

const xScale = d3
  .scaleLinear()
  .domain([minGini, maxGini])
  .range([padding, width - padding]);

// And GDp is x axis values, d[2] is a third value in a list which is going to be the quality
const maxGDP = d3.max(dataset, d => d[2]);
const minGDP = d3.min(dataset, d => d[2]);
console.log(maxGDP);

const rScale = d3
  .scaleLinear()
  .domain([minGDP, maxGDP])

  // .range is the size of the circle
  .range([5, 25]);

const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

const tip = d3
  .tip()
  .attr("class", "d3-tip")
  // .offset is for the bindpopup distance from a circle
  .offset([-10, 0])
  .html(d => {
    return (
      "<div class='tip-name'>" +
      d[0] +
      "</div><div class='tip-gdp'>Price per bottle of Wine:<br>" +
      formatCurrency(d[1]) +
      //   "<br><div class='tip-gdp'>Life Expectancy: " +
      //   d[1] +
      "</div><div class='tip-gdp'>Quality of Wine: " +
      d[2] +
      "</div>"
    );
  });

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "chart")
  .attr("id", "chart");

svg.call(tip);

const color = d3.scaleOrdinal(d3.schemeCategory20);

svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", d => xScale(d[2]))
  .attr("cy", d => yScale(d[1]))
  .attr("r", d => rScale(d[2]))

  // This is where the circle get filled based on country
  .attr("fill", d => color(d[0])) // was d[4] before for continent
  .attr("id", d => d[0])
  .attr("class", d => `circle ${d[0]}`) // was d[4] before for continent
  .on("mouseover", d => {
    // only show tooltips for visible plots
    if (!document.getElementById(d[0]).classList.contains("hidden")) {
      tip.show(d);
    }
  })
  .on("mouseout", tip.hide);

// TODO: Break down the code below

svg
  .append("g")
  .attr("transform", `translate(0, ${height - padding})`)
  .call(xAxis);

// add titles to the axes
svg
  .append("text")
  .attr("text-anchor", "middle")
  .attr(
    "transform",
    "translate(" + padding / 2 + "," + height / 2 + ")rotate(-90)"
  )
  .text("Price per Bottle of Wine");

svg
  .append("text")
  .attr("text-anchor", "middle")
  .attr(
    "transform",
    "translate(" + width / 2 + "," + (height - padding / 3) + ")"
  )
  .text("Quality of Wine");

svg
  .append("g")
  .attr("transform", `translate(${padding}, 0)`)
  .call(yAxis);

const legend = svg
  .selectAll(".legend")
  .data(color.domain())
  .enter()
  .append("g")
  .attr("class", "legend")
  .attr("id", d => d)
  .attr("transform", function(d, i) {
    var height = legendRectSize + legendSpacing;
    var offset = (height * color.domain().length) / 2;
    // var horz = -2 * legendRectSize;
    let row = i <= 5 ? 1 : 2;
    let horz = i <= 5 ? 30 + (i * width) / 6 : 30 + ((i - 6) * width) / 6;
    const vert = height * row;
    return "translate(" + horz + "," + vert + ")";
  })
  .on("click", d => {
    const allCircles = Array.from(document.getElementsByClassName("circle"));
    const otherContinents = allCircles.filter(el => !el.classList.contains(d));
    const continentMatches = Array.from(document.getElementsByClassName(d));
    otherContinents.forEach(el => {
      el.classList.remove("visible");
      el.classList.add("hidden");
    });
    continentMatches.forEach(el => {
      el.classList.remove("hidden");
      el.classList.add("visible");
    });
    document.getElementById("btn").classList.add("btn-show");
    document.getElementById("btn").classList.remove("btn-hide");
  });

legend
  .append("circle")
  .attr("r", legendRectSize / 2)
  .style("fill", color)
  .style("stroke", color);

legend
  .append("text")
  .attr("x", legendRectSize)
  .attr("y", legendRectSize - legendSpacing * 1.5)
  .text(function(d) {
    return d;
  });

const showAll = () => {
  const allCircles = Array.from(document.getElementsByClassName("circle"));
  allCircles.forEach(el => {
    el.classList.remove("hidden");
    el.classList.add("visible");
  });
  document.getElementById("btn").classList.add("btn-hide");
  document.getElementById("btn").classList.remove("btn-show");
};

// document.getElementById("btn").addEventListener("click", showAll);
