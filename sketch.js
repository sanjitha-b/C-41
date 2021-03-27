var database
var gamestate=0, playercount
var form, player, game
var allplayers
var distance = 0
var car1, car2, car3, car4, cars
var trackImg,car1Img,car2Img,car3Img,car4Img

function preload(){
trackImg = loadImage("track.jpg")
car1Img = loadImage("car1.png")
car2Img = loadImage("car2.png")
car3Img = loadImage("car3.png")
car4Img = loadImage("car4.png")

}

function setup(){
database = firebase.database()
createCanvas(displayWidth-20,displayHeight)

game = new Game()
game.readstate()
game.start()
}

function draw(){
if(playercount ==4){
game.updatestate(1)

}
 if (gamestate == 1 ) {
//background("white")
clear()
game.play()

 }
 if(gamestate ==2) {
     game.end()
 }
}
