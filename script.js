var board = [
    [null, null, null, "S", null],
    [null, "S", null, "S", null ],
    ["S", null, null, null, null ],
    [null, "S", null, null, null],
    [null, null, null, null, "S"],
   ];
   
   for (var i = 0; i < 10; i++){
    var row = getRandomNum();
    var column = getRandomNum();
   
    var randomSquare = board[row][column];
   
    if (randomSquare === "S"){
        console.log("Hit on: " + row + ", " + column);
        board[row][column] = "alreadyHit";
    }
    else if (randomSquare === "alreadyHit"){
        console.log("You have already shot here, try somewhere else" + row + ", " + column);
        i--;
        //this resets attempt
    }
    else{
        console.log("Miss on: " + row + ", " + column);
        board[row][column] = "alreadyHit";
    }
   }
   
   function getRandomNum(){
    return Math.floor(Math.random() * 5);
   }
