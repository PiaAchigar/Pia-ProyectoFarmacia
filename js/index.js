let arrayCarrito = []
let btnComprarArray = document.querySelectorAll('.productoAlCarrito') // creo un array de los botones que tienen la clase productoAlCarrito
// window.onload = function(){
//   cargaProductos()
// }
//document.getElementById("productoAlCarrito").addEventListener("click",  agregar)
btnComprarArray.forEach(button => {  //recorrre el array para obtener cada uno de los botones y asignarle el evento on click y la funcion agregar
  button.addEventListener('click', function(event) {
      agregar(event.target.value)//le paso el elemento cliqueado (string)
      console.log(event.target.value)//imprime el numero perfectamente
  } )
  
})

//codigo util
// a = document.getElementById("algunID");
// a.addEventListener("mouseover", (event) => {event.target.setAttribute("style", "border-color: red;");});
// a.addEventListener("mouseout", (event) => {event.target.setAttribute("style", "border: 1px solid rgba(0, 0, 0, 0.8);");});








	// When the user scrolls the page, execute myFunction
  window.onscroll = function () { myFunction() };

  // Get the header
  var header = document.getElementById("myHeader");

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