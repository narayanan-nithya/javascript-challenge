// from data.js
var tableData = data;

// YOUR CODE HERE!

// hold the table body data

var tbody = d3.select("tbody");   

//function to hold the ufo sightings
function ufoTable(data){
//loop through sightings 
data.forEach((Rows) => {
    var row = tbody.append("tr");
    Object.entries(Rows).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.html(value);
    });
  })
}
//log the sighting data
console.log(tableData);
ufoTable(tableData);

//declare the button selection variable.
var fbtn = d3.select("#filter-btn");

//function that will display the filtered ufo sighting data
function handleClick(){

    // Prevent the page from refreshing
    d3.event.preventDefault();
    var datetimeElement = d3.select("#datetime");

    // Get input element
    var datetimeValue = datetimeElement.property("value");
  
    //variable to hold the filtered data
    var ufofilteredsighting = tableData;

    console.log(datetimeValue);

    if (datetimeValue){

    var filteredData = ufofilteredsighting.filter(row => row.datetime === datetimeValue);
    }
  
    console.log(filteredData);  
    ufoTable(filteredData);
};
d3.selectAll("#filter-btn").on("click",handleClick);
