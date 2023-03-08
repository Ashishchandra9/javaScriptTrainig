import { checkWin } from "./win.js";

let win =checkWin


let player1 ='x';
let player2 ='o';
let turn = true;

export function cellClicked(e) {
    const cell = e.target;
    const currentPlayer = turn ? player1 : player2;
    cell.textContent = currentPlayer;
    changePlayerTurn(cell, currentPlayer);
    win(currentPlayer)
   
  }
  
  function changePlayerTurn(cell, currentPlayer) {
    cell.classList.add(currentPlayer);
    if (currentPlayer) {
      turn = !turn;
    }
  }