var dog,sadDog,happyDog;

var food;
var feed,addfood;
var foodObj;
var database

function preload(){

  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  //drink  =loadImage("Images/milkimage.png");

}

function setup() {
 
  database = firebase.database();
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  var feed = createButton("feed the dog")
  feed.position(600,100);
  feed.mousePressed(feedDog);
  
  var addfood = createButton("add the food")
   addfood.position(700,100);
   addfood.mousePressed(addFood);

 food = new Food();
  
}

function draw() {
  background(46,139,87);


 food.display();

  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog(){

dog.addImage(happyDog);

if(foodObj.getFoodStock()>=0){

  foodObj.updateFoodStock(foodObj.getFoodStock()*0);

}else{

  foodObj.updateFoodStock(foodObj.deductFood()-1);

}



}

//function to add food in stock

function addFood(){

  foodS++


database.ref('/').update({

  food : foodS

})



}



 
