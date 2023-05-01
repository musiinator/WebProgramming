var cells = document.querySelectorAll("#tableID td");

var values = [];
for (var i = 0; i < cells.length; i++) {
    values.push(cells[i].innerHTML);
}

function shuffle(values){

    values.sort(function () {
        return 0.5 - Math.random();
    });

    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = values[i];
    }
}

shuffle(values);

var selectedCount = 0;
var canSelect = true;
var matchedValues = 0;

function verify() {
    if (canSelect && selectedCount < 2 && !this.classList.contains("selected") && !this.classList.contains("matched")) {
      this.classList.add("selected");
      selectedCount++;
    }
    if (selectedCount == 2) {
      var selectedCells = document.querySelectorAll(".selected");
      if (selectedCells[0].innerHTML == selectedCells[1].innerHTML) {
        matchedValues++;
        selectedCells.forEach(function (cell) {
          cell.classList.remove("selected");
          cell.classList.add("matched");
        });
        setTimeout(function () {
            if(matchedValues == 8){
                alert("You won!");
                return;
            }
        }, 400);
      } else {
        setTimeout(function () {
          selectedCells.forEach(function (cell) {
            cell.classList.remove("selected");
          });
        }, 500);
      }
      selectedCount = 0;
      canSelect = false;
      setTimeout(function () {
        canSelect = true;
      }, 501);
    }
}
  
cells.forEach(function (cell) {
    cell.addEventListener("click", verify);
});

