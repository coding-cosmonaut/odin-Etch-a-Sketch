const canvasContainer = document.querySelector(".canvas");
const gridSizeInput = document.querySelector("input[name=gridSize]");
const randomColorsRGB = document.querySelector("#randomize");
const grandientBttn = document.querySelector('#gradient');
const resetBttn = document.querySelector('#reset');

//global variables
let isColorsClicked = false;
let isGradientClicked = false;
let gradientStartArr = [255,255,255];

function createGrid(row = gridSizeInput.value, column = gridSizeInput.value) {
  if (canvasContainer.hasChildNodes()) {
    while (canvasContainer.firstChild) {
      canvasContainer.removeChild(canvasContainer.firstChild);
    }
  }
  for (let i = 0; i < row; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("gridDivs");

    canvasContainer.append(newDiv);

    for (let j = 0; j < column; j++) {
      const columnDiv = document.createElement("div");
      columnDiv.classList.add("gridDivs");
      //events
      columnDiv.addEventListener("mouseover", (e) => {
        if (isColorsClicked) {
          columnDiv.style["backgroundColor"] = randomColor();
        } else if (isGradientClicked) {
          columnDiv.style["backgroundColor"] = gradients();
        } else {
          columnDiv.style["backgroundColor"] = "black";
        }
      });

      //events
      newDiv.append(columnDiv);
    }
  }
}

createGrid();

gridSizeInput.addEventListener("input", () => {
  createGrid();
});

randomColorsRGB.addEventListener("click", () => {
  isGradientClicked = false;
  isColorsClicked = !isColorsClicked;
});

grandientBttn.addEventListener("click", () => {
  isColorsClicked = false;
  isGradientClicked = !isGradientClicked;
});

resetBttn.addEventListener('click', (() => {
  window.location.reload()
}))

function randomColor() {
  let randomRed = Math.floor(Math.random() * 255);
  let randomGreen = Math.floor(Math.random() * 255);
  let randomBlue = Math.floor(Math.random() * 255);
  return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

function gradients() {
  let color = gradientStartArr.map((item) => {
    if (item === 0) {
      return item = 255
    } else {
      return item - 25.5
    }
  });
  gradientStartArr = color;
  return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}
