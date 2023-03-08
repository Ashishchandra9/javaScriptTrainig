// import { checkWin } from "./win.js";
// import { cellClicked } from "./displayController.js";

let resetBtn = document.querySelector('#Reset')
let cells = document.querySelectorAll('.box');
let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');
let result = document.querySelector('.result');
let resultText = document.querySelector('.result h1');
let restartBtn = document.querySelector('.result button')
// let win =checkWin()

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', cellClicked);
}


let Player1 = 'X';
let Player2 = 'O';
let turn = true;
let currentPlayer;

function cellClicked(e) {
  const cell = e.target;
  currentTurn(cell);
  
  if (checkWin(currentPlayer)) {
    addInactive()
    resultText.innerHTML = currentPlayer + " Won The Game"
  }else if (Draw()) {
    addInactive()
    resultText.innerHTML = "Game Draw"
  }


}
function currentTurn(cell) {
  currentPlayer = turn ? Player1 : Player2;
  cell.classList.add("disabled");
  cell.classList.add(currentPlayer);
  cell.textContent = currentPlayer;
  changePlayer(currentPlayer);
}

function changePlayer(currentPlayer) {

  turn = !turn;
  if (currentPlayer) {
    player1.classList.add('active')
    player2.classList.remove('active')
  }
  else {
    player2.classList.add('active');
    player1.classList.remove('active')
  }
}

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function checkWin(currentPlayer) {
  return WINNING_COMBINATIONS.some(condition => {
    return condition.every(index => {
      return cells[index].classList.contains(currentPlayer);
    });
  });
}


function Draw() {
  return [...cells].every(cell => {
    return cell.classList.contains(player1) || cell.classList.contains(player2);
  });
}

function addInactive(){
  result.classList.remove('inactive');
}


resetBtn.addEventListener('click', () => location.reload())
