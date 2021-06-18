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