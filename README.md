# JavaScript-Challenge UFO Report Table!



## Technologies Used;
---------------------

1. Visual Studio Code

2. Javascript

### Task
Append data to an HTML table and create a filter feature
### Processes involved

1. Build a function to load data array to an existing html table using [d3.select](https://www.geeksforgeeks.org/d3-js-d3-select-function/) to get a reference to the table body, looping through the array's keys and values using [.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries), then appending them to the table rows/cells.
```javascript
function loadHTML(loadTableData) {
  var tbody = d3.select("tbody");
  console.log(loadTableData);
  loadTableData.forEach(function(ufoObject) {
      console.log(ufoObject);
      var row = tbody.append("tr");
      Object.entries(ufoObject).forEach(function([key, value]) {
          console.log(key, value);
          var cell = row.append("td");
          cell.text(value);
      });
  });
};
loadHTML(data);
```
2. I used [.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) to handle a change everytime a key is released, that change will log the released keyboard keys value in the console and passes that value to a const called searchString which returns the value [.toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase). I then .[filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) each value in the data set that [.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) any values present in the searchString. After this process runs i pass the results back into the first function i described to append that data to the table.
 ```javascript
var searchBar = document.getElementById("search-input");
searchBar.addEventListener("keyup", (e) => {
  var tbody2 = d3.select("tbody");
  tbody2.html("");
  const searchString = e.target.value.toLowerCase();
  console.log(searchBar);
  console.log(e.target.value)
  const displayResult = data.filter((reports) => {
      return (
          reports.datetime.includes(searchString) ||
          reports.city.toLowerCase().includes(searchString) ||
          reports.state.toLowerCase().includes(searchString) ||
          reports.country.toLowerCase().includes(searchString) ||
          reports.shape.toLowerCase().includes(searchString) ||
          reports.comments.toLowerCase().includes(searchString)
      );
  });
  loadHTML(displayResult);
});
```
By Travbz
