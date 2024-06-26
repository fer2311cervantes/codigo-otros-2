/**
 * Ten a consideración que el programa debe hacer lo siguiente: 
 * - Esta aplicación crea una lista de invitados.
 * - Los invitados pueden ser agregados a través de un formulario.
 * - Se pueden borrar invitados de la lista usando el botón.
 */

/* Chaged all var for lets in variable creations */
let formulario = document.querySelector("form") //no necesita el selector de clase #, la clase se llama formulario

formulario.onsubmit = function(e) {

  console.log("form submit");
  e.preventDefault();  //syntaxis "prvent()" was wrong

  //changed this elements to get value using id
  let n = document.getElementById("name"); //formulario.elements[0]
  let a = document.getElementById("age"); //change the variable to not mistake with argument e , formulario.elements[1]
  let na = document.getElementById("nationality"); //formulario.elements[2]

  let nombre = n.value
  let edad = a.value

  let i = na.selectedIndex
  let nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    a.classList.add("error")
  }

  if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
      agregarInvitado(nombre, edad, nacionalidad) //
  }
}

function agregarInvitado(nombre, edad, nacionalidad) {

  console.log("agregar invitado: " + nombre + edad + nacionalidad);

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }
  console.log("agregar invitado: " + nombre + edad + nacionalidad);

  crearElemento(nombre, edad, nacionalidad)

}

function crearElemento(nombre, edad, nacionalidad) {
  let lista = document.getElementById("lista-de-invitados")
  let elementoLista = document.createElement("li")  //list element must be li
  elementoLista.classList.add("elemento-lista")
  lista.appendChild(elementoLista)

  let spanNombre = document.createElement("span")
  let inputNombre = document.createElement("input")
  let espacio = document.createElement("br")

  spanNombre.textContent = `Nombre: ${nombre} Edad: ${edad} Nacionalidad: ${nacionalidad}`
  inputNombre.value = nombre
  elementoLista.appendChild(spanNombre)
  //elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)

  let botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  elementoLista.appendChild(espacio)
  elementoLista.appendChild(botonBorrar);
  botonBorrar.onclick = function() {
  // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}

/* Removed repeated code */
