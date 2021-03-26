const arrayCarrito = []
const arrayJson = []


// if(typeof value!=="number"){ return Promise.reject("eroor el valor....")} (si le paso algo distinto a un numero, entra )//Curso JavaScript: 48. Async - Await - #jonmircha

$(document).ready(function(){ // $(windows).load(function (){para todo lo q quiera q se ejecute despues de cargado img})
  $.ajax({
    url: "./js/productos.json", 
    type: "GET",
    dataType: "json"
  })
  .done(function(res){ // (premisa done) (si el get funciona bien, se ejecuta ésta) -> Callback : f(x) que se ejecuta luego de finalizada la f(x) primaria / resultado = json
      printHtml(res)
  
    //agregar(el.currentTarget.value, resultado,e.target.value)
  
      //const tamanioValue = $(".tamanio option:selected" ).text(); // usa insertadjacentHTML
      //$('.tamanio').on('change', function(este) {
       //const tamanioTexto = $("#tamanio option:selected" ).text();
    //const t = tamanioTexto.replace('ml','')
    })
    .fail(function (xhr, status, error){// (premisa fail) (si hay falla en el get, se ejecuta ésta) xhr =xml http recuest , o sea la recuest completa de lo que pasó / status= ej:400(sig q no se encontro el cliente) - numero de error/ error = descripcion del error
      console.log(xhr), console.log(status), console.log(error), console.log(productosJson[0])
   })
$('.productoAlCarrito').click (function(el){
    el.preventDefault();
    //console.log(e.currentTarget.value)
   
})
})
  $('.dark-mode-btn').click(function(e){
    darkMode(e,".dark-mode-btn", "dark-mode")
  })
    //scrollTopButton (".scroll-top-btn")
    
    //mostrarCarrito("#carrito-toggle")
  //   $("#carrito-toggle").click(function() {// todo: mirar en la docu swal como agrego un nodo
  //     //$("#exampleModal").slideToggle(2000)
  //     Swal.fire({
  //       position: 'top-end',
  //       title: 'Su Carrito',
  //       width: 50%, //box-sizing: border-box
  //       showConfirmButton: true,
  //       showDenyButton: true,
  //       denyButtonText: `Eliminar`,
  //       keydownListenerCapture: true,
  //       text: `Su saldo es ${total()}`
  //     }).then((result) => {
  //       /* Read more about isConfirmed, isDenied below */
  //       if (result.isConfirmed) {
  //         //tengo q mandarlo a mercadopago
  //       } else if (result.isDenied) {
  //         Swal.fire('Carrito Vacio')
  //         arrayCarrito = []
  //       }
  //     })
  //  })

//hacer https://es.stackoverflow.com/questions/91187/evento-onchange-jquery-html/91191
$('#eliminar').click(eliminarCarrito)





$('#notas').click(function(){
  $('#notaMostrar').slideToggle(1500, function(){
  })
})
$('#notasRL').click(function(){//todo: agregarle a todos los perfumes las Notas, simplificarlo
  $('#notaMostrarRL').slideToggle(1500, function(){
  })
})
$('#notasBX').click(function(){
  $('#notaMostrarBX').slideToggle(1500, function(){
  })
})
$('#notasI').click(function(){
  $('#notaMostrarI').slideToggle(1500, function(){
  })
})
$('#notasYO').click(function(){
  $('#notaMostrarYO').slideToggle(1500, function(){
  })
})
$('#notasNR').click(function(){
  $('#notaMostrarNR').slideToggle(1500, function(){
  })
})
$('#notasCA').click(function(){
  $('#notaMostrarCA').slideToggle(1500, function(){
  })
})
$('#notasCE').click(function(){
  $('#notaMostrarCE').slideToggle(1500, function(){
  })
})
$('#notasTHG').click(function(){
  $('#notaMostrarTHG').slideToggle(1500, function(){
  })
})
$('#notasGL').click(function(){
  $('#notaMostrarGL').slideToggle(1500, function(){
  })
})
$('#notasDJ').click(function(){
  $('#notaMostrarDJ').slideToggle(1500, function(){
  })
})
$('#notasKL').click(function(){
  $('#notaMostrarKL').slideToggle(1500, function(){
  })
})

//DARk MODE * Curso JavaScript: 88. DOM: Ejercicios Prácticos | Tema Dark/Light
//todo: ponerle un evento Clic (icono de luna y sol) con toggle (Curso JavaScript: 65. DOM: Clases CSS - #jonmircha (minuto 8))
const $html = document.documentElement,
$body = document.body
let varDarckColor = getComputedStyle($html).getPropertyValue("--dark-color"), // todo: ir a css y poner el :root{--dark-color:#222  --wight-color:}
  varLetrasBlancas = getComputedStyle($html).getPropertyValue("--wight-color")

$body.style.backgroundColor = varDarckColor
$body.style.color = varLetrasBlancas



$("#carrito-toggle").click(function() {// todo: mirar en la docu swal como agrego un nodo
    //$("#exampleModal").slideToggle(2000)
    Swal.fire({
      position: 'top-end',
      title: 'Su Carrito',
      showConfirmButton: true,
      showDenyButton: true,
      denyButtonText: `Eliminar`,
      keydownListenerCapture: true,
      text: `Su saldo es ${total()}`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        //tengo q mandarlo a mercadopago
      } else if (result.isDenied) {
        Swal.fire('Carrito Vacio')
        arrayCarrito = []
      }
    })
 })
 function imprimirElArray(){
   arrayCarrito.forEach(function(i) {
    i.insertAdjacentHTML(
      "afterend",
      `${i.cantidad} ${i.nombre} $ ${i.precio*i.cantidad}`
    );
  });
  // arrayCarrito.forEach(i=> console.log(i.cantidad + " "+ i.nombre + " $"+ i.precio*i.cantidad))
 }

$("#comprar").click(function() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Compra realizada con Exito!',
      showConfirmButton: false,
      timer: 2000,
      keydownListenerCapture: true
    })
    arrayCarrito=[]
    // $.ajax({
    //   url: ""
    //   type: "GET",
    //   dataType: "json"
    // })
 })
 $("#eliminar").click(function() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Carrito vacio',
    showConfirmButton: false,
    timer: 2000,
    keydownListenerCapture: true
  })
  arrayCarrito = []
})
//})
 // $('#boton').click(function{
//   $.ajax[{
//     //url:,// signo de pregunta (?) = significa "parámetro"
//     type: "GET",
//     dataType: "json"
//   }].done(function(resultado){// (premisa done) (si el get funciona bien, se ejecuta ésta) -> Callback : f(x) que se ejecuta luego de finalizada la f(x) primaria / resultado = json
//     console.log(resultado)
//   })
//   .fail(function (xhr, status, error){// (premisa fail) (si hay falla en el get, se ejecuta ésta) xhr =xml http recuest , o sea la recuest completa de lo que pasó / status= ej:400(sig q no se encontro el cliente) - numero de error/ error = descripcion del error
//     console.log(xhr), console.log(status), console.log(error)
//   }) // puedo reemplazar .done y .fail -> .then (function , function)
// })
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
// ver Curso JavaScript: 101. DOM: Ejercicios Prácticos | Validación de Formularios con HTML5
//https://www.youtube.com/watch?v=dHqK4Rc6Bbk&t=4745s  25.08 (funcion Expresada)
//https://www.youtube.com/watch?v=07rCZkwMkB0