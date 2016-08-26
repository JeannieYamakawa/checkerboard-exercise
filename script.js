function createTile(color) {

    var newDiv = document.createElement( "div" );

    newDiv.style.setProperty("width", "11.1%");
    newDiv.style.setProperty("background-color", color);
    newDiv.style.setProperty("padding-bottom","11.1%");
    newDiv.style.setProperty("float","left");
    document.body.appendChild(newDiv);

}

var width = 9;
var length = 9;

var numOfTiles = width * length;

function createBoard (){
    var color = ''
    for (var i =0; i<numOfTiles; i++){
            var randomRed = Math.floor(Math.random()*255);
            var randomGreen = Math.floor(Math.random()*255);
            var randomBlue = Math.floor(Math.random()*255);
            var colorString = "rgb("+ randomRed + ","+ randomGreen + "," + randomBlue+ ")";
            color = colorString
            createTile(color)
        }
}

createBoard()




function flashing(){
    for (var i = 0; i<document.getElementsByTagName("div").length; i++){
        var randomRed = Math.floor(Math.random()*255);
        var randomGreen = Math.floor(Math.random()*255);
        var randomBlue = Math.floor(Math.random()*255);
        var myDivs = document.getElementsByTagName("div")
        myDivs[i].style.backgroundColor = "rgb("+ randomRed + ","+ randomGreen + "," + randomBlue+ ")";
    }
}


setInterval(flashing, 2000);
