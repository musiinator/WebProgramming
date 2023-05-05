$(document).ready(function() {
  let sortType = "asc";
  let tbody = $("tbody");
  let rows = $("tr");

  let headers = $("th");
  headers.each((index, header) => {
    $(header).click(() => {
      sortTable(index);
    });
  });
  
  function sortTable(columnIndex) {
    let cellIndex = columnIndex;
    let rowsArray = rows.toArray();
    rowsArray.shift();
    
    if (isNaN(rowsArray[0].cells[cellIndex].textContent)) {
      rowsArray.sort((row1, row2) => {
        let cell1 = row1.cells[cellIndex];
        let cell2 = row2.cells[cellIndex];
        if (sortType === "asc") {
          if ($(cell1).text() < $(cell2).text()) {
            return -1;
          }
          if ($(cell1).text() > $(cell2).text()) {
            return 1;
          }
          return 0;
        } else {
          if ($(cell1).text() > $(cell2).text()) {
            return -1;
          }
          if ($(cell1).text() < $(cell2).text()) {
            return 1;
          }
          return 0;
        }
      });
    } else {
      rowsArray.sort((row1, row2) => {
        let cell1 = row1.cells[cellIndex];
        let cell2 = row2.cells[cellIndex];
        if (sortType === "asc") {
          return $(cell1).text() - $(cell2).text();
        } else {
          return $(cell2).text() - $(cell1).text();
        }
      });
    }
    rowsArray.forEach((row) => tbody.append(row));
  
    if (sortType === "asc") {
      sortType = "desc";
    } else {
      sortType = "asc";
    }
  }
});
