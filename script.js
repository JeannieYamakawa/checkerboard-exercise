// Each tile should be a div
// Each tile's width is 11.1%
// Set each tile's float property to left
// Each tile's paddingBottom is 11.1%

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


//"rgb(255, 0, 0)""
