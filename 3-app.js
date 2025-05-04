//access from html
let boxes = document.querySelectorAll(".box");
let btnContainer = document.querySelector(".btn-container");
let msg = document.querySelector(".msg");
let newButton = document.querySelector(".new-btn");
let resetButton = document.querySelector(".reset-btn");

//game logic
let turnX = true;
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

let checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
      }
    }
  }
};

let showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msg.classList.remove("hide");
  newButton.classList.remove("hide");
  disableBoxes();
};

let disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

//reset game & new game logic
let resetGame = () => {
  turnX = true;
  msg.classList.add("hide");
  newButton.classList.add("hide");
  enableBoxes();
};

let enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

resetButton.addEventListener("click", resetGame);
newButton.addEventListener("click", resetGame);
