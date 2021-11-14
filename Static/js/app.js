// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
let filteredData = tableData;

// 3. Use this function to update the filters. 
function updateFilters() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  };   


    // 4a. Save the element that was changed as a variable.
    var c_element = d3.select(this)

    // 4b. Save the value that was changed as a variable.
    var v_element = c_element.property("value")

    // 4c. Save the id of the filter that was changed as a variable.
    var f_id = c_element.attr("id")

  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (v_element) {
    filtersTrack[f_id] = v_element
    }
    else {
    delete filtersTrack[f_id]
}
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
} 
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filtersTrack).forEach(([key, value]) => {
      filteredData = filteredData.filter(ufo => ufo[key] == value)
    });
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData)
  }
  
  // 2. Attach an event to listen for changes to each filter
  
  
  // Build the table when the page loads
buildTable(filteredData);
