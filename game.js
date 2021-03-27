class Game {
constructor(){}
readstate(){
    var gamestateRef = database.ref("gamestate")
    gamestateRef.on("value", function(data){
gamestate = data.val()


    })
}
updatestate(state){
database.ref("/").update({
    gamestate:state
})

}
start(){
if (gamestate==0){
    player = new Player()
    player.readcount()
    form = new Form()
    form.display()

}
car1 = createSprite(100,200)
car1.addImage(car1Img)
car2 = createSprite(300,200)
car2.addImage(car2Img)
car3 = createSprite(500,200)
car3.addImage(car3Img)
car4 = createSprite(700,200)
car4.addImage(car4Img)

cars = [car1,car2,car3,car4]

}
play(){
form.hide()
//textSize(30)
//text("gamestart",400,200)
Player.getplayerInfo()
player.readcarend()
if(allplayers!= undefined){
    image(trackImg,0,-displayHeight*3.75,displayWidth,displayHeight*4.85)
    
    var index = 0
    var x = 140
    var y 
    for (var plr in allplayers){
    index = index +1
    x = x+220
    y = displayHeight-allplayers[plr].distance
    cars[index-1].x = x
    cars[index-1].y = y
if(index == player.index){
fill("white")
ellipse(x,y,60,60)
   // cars[index-1].shapeColor = "red"
    camera.position.x = displayWidth/2
    camera.position.y = cars[index-1].y


}
    }}
    if(keyDown(UP_ARROW)&& player.index != null){

        player.distance = player.distance + 10
        player.update()
    }
    //console.log(player.distance)
if(player.distance > 3720){
gamestate = 2
player.rank = player.rank +1
Player.updatecarend(player.rank)
}
drawSprites()
}
end(){
    console.log("gameEnd")
    console.log(player.rank)

}
}
