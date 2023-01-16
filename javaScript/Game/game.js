let player_x = 'x';
let player_o = 'o'
const winnigMatch = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

const cellElements = document.querySelectorAll('[data-cell]');
const boardElement = document.getElementById('board');
const winDisplay = document.getElementById('display');
const restartBtn = document.getElementById('restart');
const win = document.getElementById('win');

let playerTurn = false;

startGame()
restartBtn.addEventListener('click', startGame);

function startGame(){
    playerTurn = false;
    cellElements.forEach
}

const xhr =new XMLHttpRequest();

xhr.open('Get','https://jsonplaceholder.typicode.com/posts');

xhr.send();