function formularioLista(){
	var listaActual=document.getElementById("anadir");
	//creo los elementos de la nueva lista
	var listaNueva= document.createElement('div');
	var contenido=document.createElement('textarea');
	var botonIngreso=document.createElement('button');
	
	//agrego los atributos
	contenido.setAttribute("class", "newList");
	contenido.setAttribute("id", "texto");
	botonIngreso.setAttribute("class","btn");
	//asignacion de los nodos
	var botonText=document.createTextNode("Guardar");
	botonIngreso.appendChild(botonText);
	listaNueva.appendChild(contenido);
	listaNueva.appendChild(botonIngreso);
	listaActual.appendChild(listaNueva);
	var recuperar = document.getElementById("anadir");
	recuperar.classList.toggle("hidden");
}

 //function agregaLista(){
 	//crear nodos para la nueva lista

 	//setear los atributos 
 	//crear los padres  
 
// function click,funcion anonima
//