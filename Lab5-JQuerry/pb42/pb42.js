$(document).ready(function() {

  let sortType = "asc";
  let headers = $("th");

  headers.each((index, header) => {
    $(header).click(() => {
      sortTable(index);
    });
  });

  var cells = $("td");
  let noOfColumns = cells.length / 3;
  let values = cells;
  let valuesArray = [];

  for(let i = 0; i < noOfColumns; i++) {
    let obj = {
      Fruit: values[i].textContent,
      Price: values[i+noOfColumns].textContent,
      Quantity: values[i+noOfColumns*2].textContent
    };
    valuesArray.push(obj);
  }


  function sortTable(columnIndex) {

    if(columnIndex === 0) {
      valuesArray.sort((obj1, obj2) => {
        if (sortType === "asc") {
          if (obj1.Fruit < obj2.Fruit) { return -1; }
          if (obj1.Fruit > obj2.Fruit) { return 1; }
          return 0;
        } else {
          if (obj1.Fruit > obj2.Fruit) { return -1; }
          if (obj1.Fruit < obj2.Fruit) { return 1; }
          return 0;
        }
      });
    }
    else if(columnIndex === 1) {
      valuesArray.sort((obj1, obj2) => {
        if (sortType === "asc") {
          return obj1.Price - obj2.Price;
        } else {
          return obj2.Price - obj1.Price;
        }
      });
    }
    else {
      valuesArray.sort((obj1, obj2) => {
        if (sortType === "asc") {
          return obj1.Quantity - obj2.Quantity;
        } else {
          return obj2.Quantity - obj1.Quantity;
        }
      });
    }

    valuesArray.forEach((obj, index) => {
      values[index].textContent = obj.Fruit;
      values[index+noOfColumns].textContent = obj.Price;
      values[index+noOfColumns*2].textContent = obj.Quantity;
    });


    if (sortType === "asc") {
      sortType = "desc";
    } else {
      sortType = "asc";
    }
  }

});
