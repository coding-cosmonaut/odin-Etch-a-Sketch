const canvasContainer = document.querySelector(".canvas");

//global variables
let rows = 16;
let columns = 16;

function createGrid(row, column) {
  for (let i = 0; i < row; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("gridDivs");

    canvasContainer.append(newDiv);

    for (let j = 0; j < column; j++) {
      const columnDiv = document.createElement("div");
      columnDiv.classList.add("gridDivs");
      columnDiv.addEventListener("mouseover", () => {
        columnDiv.style["backgroundColor"] = "white";
        columnDiv.style["border"] = "0.5px solid black";
      });
      newDiv.append(columnDiv);
    }
  }
}

createGrid(rows, columns);
