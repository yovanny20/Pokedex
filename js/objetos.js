var pos, cl; //controlan la posicion y cuando la imagen sera eliminada de la pantalla
var img, bloq; // controlan el objeto imagen y la etiqueta en la cual se almacenara la imagen
var listPokemon,listEvolucion; //defino dos listas, para los pokemons y sus respectivas evoluciones

//=================================================================================================
//Defino un Objeto general para los Pokemons
//con los siguientes atributos
function Pokemon(i,n,v,a,t){
	this.imagen = i;
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.tipo = t;
}
//=================================================================================================
//función ejecutada despues de haber cargado
//todas las etiquetas en HTML
function inicio(){
	cl = 1;
	pos = 0;
	lmay = 10; //define el tamaño de la lista o array

	//Creo dos listas o arrays de tipo Pokemon

	listPokemon = new Array(lmay);
	listPokemon[0]= new Pokemon("pokemon/Pikachu.png","Pikachu",100,55,"Trueno");
	listPokemon[1]= new Pokemon("pokemon/Charmander.png","Charmander",100,40,"Fuego");
	listPokemon[2]= new Pokemon("pokemon/Bulbasaur.png","Bulbasaur",80,30,"Planta/Veneno");
	listPokemon[3]= new Pokemon("pokemon/Squirtle.png","Squirtle",85,25,"Agua");
	listPokemon[4]= new Pokemon("pokemon/Vulpix.png","Vulpix",100,60,"Fuego");
	listPokemon[5]= new Pokemon("pokemon/Psyduck.png","Psyduck",40,30,"Agua");
	listPokemon[6]= new Pokemon("pokemon/Meowth.png","Meowth",70,20,"Normal");
	listPokemon[7]= new Pokemon("pokemon/Pidgey.png","Pidgey",90,60,"Normal/Volador");
	listPokemon[8]= new Pokemon("pokemon/Seel.png","Seel",50,45,"Agua");
	listPokemon[9]= new Pokemon("pokemon/Growlithe.png","Growlithe",87,70,"Fuego");
	listPokemon[10]= new Pokemon("pokemon/Ekans.png","Ekans",50,35,"Veneno");

	listEvolucion = new Array(lmay);
	listEvolucion[0]= new Pokemon("evolucion/Raichu.png","Raichu",200,110,"Trueno");
	listEvolucion[1]= new Pokemon("evolucion/Charmeleon.png","Charmeleon",200,80,"Fuego");
	listEvolucion[2]= new Pokemon("evolucion/Ivysaur.png","Ivysaur",160,60,"Planta/Veneno");
	listEvolucion[3]= new Pokemon("evolucion/Wartortle.png","Wartortle",170,50,"Agua");
	listEvolucion[4]= new Pokemon("evolucion/Ninetales.png","Ninetales",200,120,"Fuego");
	listEvolucion[5]= new Pokemon("evolucion/Golduck.png","Golduck",80,60,"Agua");
	listEvolucion[6]= new Pokemon("evolucion/Persian.png","Persian",140,40,"Normal");
	listEvolucion[7]= new Pokemon("evolucion/Pidgeotto.png","Pidgeotto",180,120,"Normal/Volador");
	listEvolucion[8]= new Pokemon("evolucion/Dewgong.png","Dewgong",100,90,"Agua");
	listEvolucion[9]= new Pokemon("evolucion/Arcanine.png","Arcanine",174,140,"Fuego");
	listEvolucion[10]= new Pokemon("evolucion/Arbok.png","Arbok",100,70,"Veneno");
	
	//dibujo el primer pokemon en la posicion [0]
	Dibujar(pos,listPokemon);

	//capturo los eventos de los siguientes botones
	var btnRegresar = document.getElementById("btnR");
 	var btnAvanzar = document.getElementById("btnA");
 	var btnEvolucinar = document.getElementById("btnE");

 	btnRegresar.addEventListener("click",Regresa);
 	btnAvanzar.addEventListener("click",Avanza);
 	btnEvolucinar.addEventListener("click",Evoluciona);
}
//=================================================================================================
// Controlo el avance y el retroseso de la lista
// con la variable pos y dibujo el pokemon de la nueva posicion
function Avanza(){
	if(pos == lmay) pos = 0;
	else pos ++;
	Dibujar(pos,listPokemon);
}

function Regresa(){
	if(pos == 0) pos = lmay;
	else pos--;
	Dibujar(pos,listPokemon);
}
//=================================================================================================
// Dibujo la evolucion del pokemon seleccionado
// con el boton evolucionar en la posicion actual 
// sin modificar pos
function Evoluciona(){
	Dibujar(pos,listEvolucion);
}
//=================================================================================================
// dibujo el pokemon con base en la lista y la posicion 
// enviadas como parametros
function Dibujar(p,list){
	//condicion que me permite borrar una imagen cuando
	// ya haya sido mostrada en pantalla
	if(cl == 2){
		bloq.removeChild(img);
		cl=1;
	}
	cl++;

	var dat = document.getElementById("datosPokemon");
	dat.innerHTML = "Nombre: "+list[p].nombre+
	                "</br>Vida: "+list[p].vida+
	                "</br>Ataque: "+list[p].ataque+
	                "</br>Tipo: "+list[p].tipo;	

	//creamos la imagen con un tamaño predefinido
	img = document.createElement("img");
	img.setAttribute("src",list[p].imagen);
	img.width = "250";
	img.height = "250";
	
	//asignamos a la etiqueta "imgPokemon" la nueva imagen
	bloq = document.getElementById("imgPokemon");
	bloq.appendChild(img);
}