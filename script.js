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
    var red = 128
    var green = 128
    var blue = 128
    for (var i =0; i<numOfTiles; i++){
            var red = 128+i;
            var blue = 128+i;
            var green = 128-i;
            if(i%2===0){
            var colorString = "rgb("+ (20+red) + ","+ (30+green) + "," + (90+blue)+ ")";
            createTile(colorString)
        }
            else{
            var colorString = "rgb("+ red + ","+ green + "," + blue+ ")";
            createTile(colorString)
        }
    }
}

createBoard()


//"rgb(255, 0, 0)""
