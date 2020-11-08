var database,game,form,player,allPlayers;
var playerCount = 0;
 var gameState = 0;
 var car1,car2,cars = [];

function setup(){
    database = firebase.database();
    
    createCanvas(displayWidth,displayHeight);
    game = new Game();
    game.getGameState();
  
    game.start();
   
}

function draw(){
    background("white");
    if(playerCount === 2){
         game.updateGameState(1); 
        }
     if(gameState === 1){
         console.log("hello");
          clear(); game.play(); 
        }

  
   
}

