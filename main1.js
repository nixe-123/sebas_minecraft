var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height=30;
player_x = 10;
player_y = 10;
var player_object="";
var block_image_object= "";
function player_update()
{
    fabric.image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
        

        });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_image_object);
    
});
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keypressed = e.KeyCode;
    console.log(keypressed);
    if(e.shifkey == true && keypressed == '80')
    {
        console.log( "se presiona p y shift al mismo tiempo");
        block_image_width=block_image_width + 10; 
        block_image_height = block_image_height+ 10;
        document.getElementById("current_width").innerHTML= block_image_width;
        document.getElementById("curent_height").innerHTML= block_image_height;
}
if(e.shifkey == true && keypressed == '77')
    {
        console.log( "se presiona m y shift al mismo tiempo");
        block_image_width=block_image_width -10; 
        block_image_height = block_image_height-10;
        document.getElementById("current_width").innerHTML= block_image_width;
        document.getElementById("curent_height").innerHTML= block_image_height;
}
if(keypressed== '38')
{
    up();
        console.log("up");
}
if(keypressed== '40')
{
    down();
        console.log("down");
}
if(keypressed== '37')
{
    left();
        console.log("left");
}
if(keypressed== '39')
{
    right();
        console.log("right");
}
if(keypressed== '87')
{
    new_image('wall.jpg');
        console.log("w");
}
if(keypressed== '71')
{
    new_image('ground.png');
        console.log("g");
}
if(keypressed== '76')
{
    new_image('light_green.png');
        console.log("l");
}
if(keypressed== '84')
{
    new_image('trunk.jpg');
        console.log("t");
}
if(keypressed== '82')
{
    new_image('roof.jpg');
        console.log("r");
}
if(keypressed== '89')
{
    new_image('yellow_wall.png');
        console.log("y");
}
if(keypressed== '68')
{
    new_image('dark_green.png');
        console.log("d");
}
if(keypressed== '85')
{
    new_image('different.png');
    console.log("u");
}
if(keypressed== '67')
{
    new_image('cloud.jpg');
    console.log("c");
}
 }
 function up()
 {
    if (player_y >=0)
    {
        player_y=player_y - block_image_height;
        console.log("altura del bloque de la imagen = "+ block_image_height);
        console.log("Cuando se presiona la tecla arriba, X =" + player_x + ";Y=" +player_x);
        canvas.remove(player_object);
        player_update();
    }
     
 }

 function down()
 {
    if (player_y <=500)
    {
        player_y=player_y + block_image_height;
        console.log("altura del bloque de la imagen = "+ block_image_height);
        console.log("Cuando se presiona la tecla abajo, X =" + player_x + ";Y=" +player_x);
        canvas.remove(player_object);
        player_update();
    }
     
 }

 function left()
 {
    if (player_x >0)
    {
        player_x=player_x - block_image_width;
        console.log("ancho del bloque de la imagen = "+ block_image_width);
        console.log("Cuando se presiona la tecla izquierda, X =" + player_x + ";Y=" +player_x);
        canvas.remove(player_object);
        player_update();
    }
     
 }

 function right()
 {
    if (player_x <=850)
    {
        player_x=player_x + block_image_width;
        console.log("ancho del bloque de la imagen = "+ block_image_width);
        console.log("Cuando se presiona la tecla arriba, X =" + player_x + ";Y=" +player_x);
        canvas.remove(player_object);
        player_update();
    }
     
 }
 

 







 
