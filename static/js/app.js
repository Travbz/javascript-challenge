// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

// Step 1: Use d3 to update each cell's text with
// UFO report values (Datetime, City, State, Country, Shape, Duration, Comments)
data.forEach(function(ufoReport) {
  console.log(ufoReport);

  //append row (array) to table body
  var row = tbody.append("tr");

  //return Array, output to web console
  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);

    // Append a cell to the row for each value
    // in the ufoReport report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// filter button
var button = d3.select("#filter-btn");
button.on("click", function() {
    
    // group body content
    tbody.html("");

    // select input element and get raw HTML code,
    // get value property of input element,
    // print to console
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    //filter data, loop over array elements and test if values of datetime equal inputValue
    let inputDate = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].datetime == inputValue) {
        inputDate.push(data[i]);
      }
    }
    console.log(inputDate);

    // write data to the console
    inputDate.forEach(function(selections) {
    console.log(selections);

    // append table row (array) to table body
    var row = tbody.append("tr");

    



