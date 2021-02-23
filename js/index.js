let arrayCarrito = []
let btnComprarArray = document.querySelectorAll('.productoAlCarrito')

btnComprarArray.forEach(button => {
  button.addEventListener('click', function(event) {
      agregar(event.currentTarget.value)
})
})
document.getElementById("eliminar").addEventListener("click", eliminarCarrito)













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