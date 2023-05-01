let sortType = "asc";
let table = document.querySelector("table");
let tbody = table.querySelector("tbody");
let rows = tbody.querySelectorAll("tr");

let headers = table.querySelectorAll("th");
headers.forEach((header, index) => {
  header.addEventListener("click", () => sortTable(index));
});

function sortTable(columnIndex) {
  let cellIndex = columnIndex;
  let rowsArray = Array.from(rows);
  if(isNaN(rowsArray[0].cells[cellIndex].textContent)) {

    rowsArray.sort((row1, row2) => {
      let cell1 = row1.cells[cellIndex];
      let cell2 = row2.cells[cellIndex];
      if (sortType === "asc") {
        if (cell1.textContent < cell2.textContent) { return -1; }
        if (cell1.textContent > cell2.textContent) { return 1; }
        return 0;
      } else {
        if (cell1.textContent > cell2.textContent) { return -1; }
        if (cell1.textContent < cell2.textContent) { return 1; }
        return 0;
      }
    });
  }
  else {
    rowsArray.sort((row1, row2) => {
      let cell1 = row1.cells[cellIndex];
      let cell2 = row2.cells[cellIndex];
      if (sortType === "asc") {
        return cell1.textContent - cell2.textContent;
      } else {
        return cell2.textContent - cell1.textContent;
      }
    });
  }
  rowsArray.forEach((row) => tbody.appendChild(row));

  if (sortType === "asc") {
    sortType = "desc";
  } else {
    sortType = "asc";
  }
}
