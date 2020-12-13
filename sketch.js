var dog,happydog;
var database;
var FoodS,FoodStock;

function preload()
{
  dogImage=loadImage("sprites/dogimg.png");
  happydogImage=loadImage("sprites/dogimg1.png");
}

function setup() {
	createCanvas(500,500);
  dog= createSprite(250,250,10,10);
  dog.addImage(dog);
  FoodStock=database.ref('Food');
  FoodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(KeyWentDown(UP_ARROW)){
writeStock(FoodS);
dog.addImage(dogHappy);
}
drawSprites();
Text("Note: Press UP_ARROW Key To Feed Dargo Milk!")
  textSize("2");
  fill("white");
stroke()
}

function readStock(data){
FoodS=data.val();
}

function writeStock(x){


database.ref('/').update({
  Food:x
})
}
