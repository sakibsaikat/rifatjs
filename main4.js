
let options = ["ROCK","SCISSOR","PAPER"];
let playAgain = true;

while(playAgain){


    let computer =Math.floor(Math.random()*3); 
    console.log(computer);

    let player1 = options[computer];
    let player2 = prompt("Enter ROCK / PAPER / SCISSOR: ");

    switch(player2){
        case "ROCK":{
            if(player1=="ROCK"){
                alert(`The match is Draw. Computer Move - ${player1}.`);
            }
            else if(player1=="PAPER"){
                alert(`Computer Wins. And You Lose. Computer Move - ${player1}.`);
            }
            else if(player1=="SCISSOR"){
                alert(`Congrats! You Win ! Computer Move - ${player1}.`);
            }
            break;
        }
        case "PAPER":{
            if(player1=="PAPER"){
                alert(`The Match is Draw. Computer Move - ${player1}.`);
            }
            else if(player1=="SCISSOR"){
                alert(`Computer Wins. And You Lose. Computer Move - ${player1}.`);
            }
            else if(player1=="ROCK"){
                alert(`Congrats! You Win ! Computer Move - ${player1}.`);
            }
            break;
        }
        case "SCISSOR":{
            if(player1=="SCISSOR"){
                alert(`The Match is Draw. Computer Move - ${player1}.`);
            }
            else if(player1=="ROCK"){
                alert(`Computer Wins. And You Lose. Computer Move - ${player1}.`);
            }
            else if(player1=="PAPER"){
                alert(`Congrats! You Win ! Computer Move - ${player1}.`);
            }
            break;
        }
        default:{
            alert("Wrong Input");
        }
    }


    let playoption = parseInt(prompt("Do You Want To Play Again?(1/0)"));
    
    if(playoption==1){
        playAgain=true;
    }
    else{
        playAgain=false;
    }


    // template String
    // let y = `Now
    // i 
    // can 
    // write in
    // multiple line`;

}