let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let symbols = ["o", "X"];
let gameOver = false;
let Winners = [0,0];

let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


function handleMove(position){

    if(gameOver){return;}

    if(board[position] == ''){
    board[position] = symbols[playerTime];

    gameOver = isWin();

    if(gameOver == false){
        playerTime = (playerTime == 0) ? 1: 0;
    }
}
return gameOver;
}

function isWin(){
    for(var i = 0; i < winStates.length; i++){
        
        let seq = winStates[i];
        let p1 = seq[0];
        let p2 = seq[1];
        let p3 = seq[2];

        if(board[p1] == board[p2] && board[p1] == board[p3] 
            && board[p1] != ''){
            if(board[p1] == 'o'){
                Winners[0] += 1
            }
            else{
                Winners[1] +=1
            }
            return true;
        }
    }
    return false;
}