

const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  
export  function checkWin(currentPlayer){
    WINNING_COMBINATIONS.forEach((condition,cells)=>{
        let check = condition.every((index) =>{
            cells[index].innerHTML == currentPlayer}
        )
        if(check){
          alert(currentPlayer +" has won");
        }
    })
}