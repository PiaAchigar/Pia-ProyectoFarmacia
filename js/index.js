let arrayCarrito = []
//$(document).ready(function(){------------- Todo lo q tiene rayita es lo q quiero q funcione pero no anda
 // $('.productoAlCarrito').click (agregar)-------------
//$('#eliminar').click(eliminarCarrito) -----
//------------------------
let btnComprarArray = document.querySelectorAll('.productoAlCarrito') // creo un array ( NodeList) de los botones que tienen la clase productoAlCarrito

localStorage.setItem('elCarrito', arrayCarrito)
btnComprarArray.forEach(button => {  //recorrre el array para obtener cada uno de los botones y asignarle el evento on click y la funcion agregar
  button.addEventListener('click', function(event) {
      agregar(event.currentTarget.value)// event.target.value me trae undefined, no se porque
})
})
document.getElementById("eliminar").addEventListener("click", eliminarCarrito)


//})----------------------

  window.onscroll = function () { myFunction() };

  // Get the header
  var header = document.getElementById("myHeader");// devuelve una coleccion HTML

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

//--------- Lista de Tareas -----
// - Agregar https://sweetalert2.github.io/
// - Base de Datos de Clientes, Login
// - Agregar metodos de pago