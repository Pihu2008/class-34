var ball;
var database, position;
var pos;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    position = database.ref("ball/position");
    position.on("value",readData,error);
}

function draw(){
    background("white");

if(pos !== undefined){

    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }


    drawSprites();
}
}
function writePosition(x,y){
database.ref("ball/position").set({
    'x': pos.x + x,
    'y': pos.y + y 
})
    
}
function readData(data){
 pos = data.val();
  ball.x = pos.x;
  ball.y = pos.y;
}
function error(){
    console.log("error");
}