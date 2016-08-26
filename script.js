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
    var red = 128
    var green = 128
    var blue = 128
    for (var i =0; i<numOfTiles; i++){
            var red = 128+i;
            var blue = 128+i;
            var green = 128-i;
            if(i%2===0){
            var colorString = "rgb("+ (10+red) + ","+ (120+green) + "," + (150+blue)+ ")";
            createTile(colorString)
        }
            else{
            var colorString = "rgb("+ red + ","+ green + "," + blue+ ")";
            createTile(colorString)
        }
    }
}

createBoard()
