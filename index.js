const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  let left = parseInt(dodger.style.left.replace("px", ""), 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`; // Moves 1px left
  }
}

function moveDodgerRight() {
  let left = parseInt(dodger.style.left.replace("px", ""), 10);
  let gameWidth = 400; // Adjust according to game container width
  let dodgerWidth = 40; // Width of the dodger

  if (left + dodgerWidth < gameWidth) {
    dodger.style.left = `${left + 1}px`; // Moves 1px right
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
