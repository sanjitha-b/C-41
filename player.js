class Player{
constructor(){
this.index = 0
this.distance = 0
this.name = 0
this.rank = 0
}
readcarend(){
var carendref= database.ref("carend")
carendref.on("value", function(data){
this.rank = data.val()

})

}
static updatecarend(rank){
database.ref("/").update({
    carend: rank
})

}
readcount(){
    var playercountRef = database.ref("playercount")
    playercountRef.on("value", function(data){
playercount = data.val()


    })
}
updatecount(count){
database.ref("/").update({
    playercount:count
})

}
update(){
var playerindex = "players/player"+ this.index
database.ref(playerindex).set({
name:this.name, 
distance:this.distance

})


}
static
getplayerInfo(){
var inforef= database.ref("players")
inforef.on("value", function(data){
    allplayers = data.val()
})
}
}