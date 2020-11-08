class Game{
    constructor(){

    } 

    getGameState(){
        console.log("hello")
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val()
        })
        console.log(gameState);

    }
    updateGameState(state){
        //ref(/)is a reference to the main car racing database 

        database.ref('/').update({
            gameState:state
        })

    }
    start(){
        console.log(gameState);
        if (gameState===0){
            form = new Form();
            form.display();
            player = new Player();
            player.getPlayerCount();

        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        cars = [car1,car2];
    }
    play(){
        //this function calls when all the four players have logged in.
        form.hide();
       var index = 0;
       var x = 200;
       var y ;
        Player.getPlayerInfo();

        if (allPlayers!==undefined){
          
            for(var plr in  allPlayers){
                index = index+1;
                x = x+250;
                y = displayHeight-allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
               if (index===player.index){
                   cars[index-1].shapeColor = "red";

               }
               
            }
            if (keyIsDown(UP_ARROW)&&player.index!==null){
                player.distance = player.distance+10;
                player.update();


            }
            drawSprites();

        }
    }
}