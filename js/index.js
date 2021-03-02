let arrayCarrito = []
$(document).ready(function(){
  $('.productoAlCarrito').click (function(e){
    e.preventDefault();
    agregar(e.currentTarget.value)
  })
  $('#eliminar').click(eliminarCarrito)

$('#notas').click(function(){
  $('#notaMostrar').slideToggle(1500, function(){
  })
})
$('#notasRL').click(function(){//quiero agregarle a todos los perfumes las Notas, pero no se como simplificarlo
  $('#notaMostrarRL').slideToggle(1500, function(){
  })
})

$("#carrito-toggle").click(function() {
    //$("#exampleModal").slideToggle(2000)
    Swal.fire({
      position: 'top-end',
      title: 'Su Carrito',
      showConfirmButton: true,
    })
 })

$("#comprar").click(function() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Compra realizada con Exito!',
      showConfirmButton: false,
      timer: 2000
    })
 })
 $("#eliminar").click(function() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Carrito vacio',
    showConfirmButton: false,
    timer: 2000
  })
})
})

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