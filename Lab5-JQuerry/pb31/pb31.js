$(document).ready(function() {
  var cells = $("td");

  var values = [];
  cells.each(function() {
    values.push($(this).html());
  });

  function shuffle(values) {
    values.sort(function() {
      return 0.5 - Math.random();
    });

    cells.each(function(i) {
      $(this).html(values[i]);
    });
  }

  shuffle(values);

  var selectedCount = 0;
  var canSelect = true;
  var matchedValues = 0;

  cells.on("click", verify);

  function verify() {
    if (canSelect && selectedCount < 2 && !$(this).hasClass("selected") && !$(this).hasClass("matched")) {
      $(this).addClass("selected");
      selectedCount++;
    }
    if (selectedCount == 2) {
      var selectedCells = $(".selected");
      if (selectedCells.eq(0).html() == selectedCells.eq(1).html()) {
        matchedValues++;
        selectedCells.each(function() {
          $(this).removeClass("selected");
          $(this).addClass("matched");
        });
        setTimeout(function() {
          if (matchedValues == 8) {
            alert("You won!");
            return;
          }
        }, 400);
      } else {
        setTimeout(function() {
          selectedCells.each(function() {
            $(this).removeClass("selected");
          });
        }, 500);
      }
      selectedCount = 0;
      canSelect = false;
      setTimeout(function() {
        canSelect = true;
      }, 501);
    }
  }
});
