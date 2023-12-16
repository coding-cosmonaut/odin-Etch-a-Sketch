const canvasContainer = document.querySelector(".canvas");
const gridSizeInput = document.querySelector('input[name=gridSize]');

function createGrid(row = gridSizeInput.value, column = gridSizeInput.value) {
  if (canvasContainer.hasChildNodes()) {
    while(canvasContainer.firstChild) {
      canvasContainer.removeChild(canvasContainer.firstChild)
    }
  }
  for (let i = 0; i < row; i++) {
    console.log('hellop')
    const newDiv = document.createElement("div");
    newDiv.classList.add("gridDivs");

    canvasContainer.append(newDiv);

    for (let j = 0; j < column; j++) {
      const columnDiv = document.createElement("div");
      columnDiv.classList.add("gridDivs");
      columnDiv.addEventListener("mouseover", () => {
        columnDiv.style["backgroundColor"] = "black";
        //columnDiv.style["border"] = "0.5px solid black";
      });
      newDiv.append(columnDiv);
    }
  }
}

createGrid();


gridSizeInput.addEventListener('input', (() => {
  createGrid()
}))

