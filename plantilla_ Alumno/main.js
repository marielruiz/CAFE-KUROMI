canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.
kuromi_ancho=90;
kuromi_alto=80;


background_image = "cafe.jpg";

kuromi_image = "kuromi.png";

kuromi_x = 10;
kuromi_y = 10;

//Crea la función "add()"
background_imagTag= new Image();
background_imagTag.onload=unload=uploadBackground;
background_imagTag.src= background_image;

kuromi_imgTag= new Image();
kuromi_imgTag.onload=uploadkuromi;
kuromi_imgTag.src= kuromi_image;
 
	                                     //Define la variable con una nueva imagen
	                                     // Define una función para cargar esta variable
	                                     // Carga la imagen

                                         //Define la variable con una nueva imagen
	                                     // Define una función para cargar esta variable
	                                     // Carga la imagen

//Crea una función "uploadBackground()".
function uploadBackground(){
ctx.drawImage(background_imagTag,0,0,canvas.width,canvas.height);
}                                                                //Dibuja la imagen de fondo

//Crea una función "uploadrover()".

function uploadkuromi(){
    ctx.drawImage(kuromi_imgTag,kuromi_x, kuromi_y, kuromi_ancho, kuromi_alto);
}  //Dibuja la imagen del explorador


window.addEventListener( "keydown", my_keydown );
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
	if(keyPressed=='38'){
		up();
	}
    if(keyPressed=='40'){
		down();
	}
if(keyPressed=='37'){
	left();
}
if(keyPressed=='39'){
	right();
}
     //Escribe el codigo si keypressed es down (abajo). El valor ASCIII para "abajo" es 40.
		




    //Actividad adicional
    //Escribe el código para cuando las teclas derecha e izquierda sean presionadas. 
}

function up(){
if(kuromi_y >=0){
kuromi_y= kuromi_y-10;
uploadBackground();//se carga la imagen de fondo
uploadkuromi();//se recarga la imagen del explorador
}
}
function down(){
if(kuromi_y <=1000){
kuromi_y= kuromi_y + 10; //cada que se presiona la tecla flecha 
uploadBackground();//aca se recarga la imagen de fondo
uploadkuromi();
}	
}
function right(){
	if(kuromi_x >=0 ){
kuromi_x= kuromi_x+10;
uploadBackground();
uploadkuromi();
	}
}
function left(){
	if(kuromi_x <=1000){
		kuromi_x= kuromi_x - 10;
		uploadBackground();
		uploadkuromi();
	}
}



