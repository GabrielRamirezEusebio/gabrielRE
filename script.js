//Pide al usuario que ingrese informacion
const nombre = prompt("Ingresa tu nombre:");
const apellido = prompt("Ingresa tu apellido:");
const edad = prompt("Ingresa tu edad:");
const lugarNacimiento = prompt("Ingresa tu lugarNacieminto:");
const fecha = prompt("Ingresa tu fecha:");
const comidaFavorita = prompt("Ingresa tu comidaFavorita:");
const carrera = prompt("Ingresa tu carrera:");
const diaFavorito = prompt("Ingresa tu diaFavorito:");

//construye una lista con la informacion ingresada 
const lista = document.createElement("ul");

//Agrega cada dato como un elemento de lista 
const agregarDato = (etiqueta,valor) =>{
const elementoLista = document.createElement("li");
elementoLista.innerHTML = `<strong>${etiqueta}:</strong>${valor}`;
lista.appendChild(elementoLista);
};

agregarDato("Nombre", `${nombre}${apellido}`);
agregarDato("Edad",edad );
agregarDato("Lugar de Nacimiento", lugarNacimiento);
agregarDato("Fecha de Nacimiento", fecha);
agregarDato("Comida Favorita", comidaFavorita)
agregarDato("Carrera", carrera);
agregarDato("Dia Favorito de la semana", diaFavorito);

// Crea un contenedor div para mostrar la lista
const resultadoDiv = document.createElement("div");
resultadoDiv.appendChild(lista);

//Agrega el nuevo div al cuerpo del documento 
document.body.appendChild(resultadoDiv);
