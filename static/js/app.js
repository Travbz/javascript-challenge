
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each UFO report object
data.forEach(function(ufoReport) {
  console.log(ufoReport);
});

// Step 2:  Use d3 to append one table row `tr` for each ufo report object
data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");
});

// Step 3:  Use `Object.entries` to console.log each ufo report value
data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");

  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
  });
});

// Step 4: Use d3 to append 1 cell per UFO report value (Datetime, City, State, Country, Shape, Duration, Comments)
data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");

  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the UFO report object
    var cell = row.append("td");
  });
});

// Step 5: Use d3 to update each cell's text with
// UFO report values (Datetime, City, State, Country, Shape, Duration, Comments)
data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});




// YOUR CODE HERE!
