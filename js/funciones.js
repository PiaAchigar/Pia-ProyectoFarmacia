function agregar(productoClicCod) {
    if(!existeEnCarrito(productoClicCod)){
      let productoItem = new Item(productoClicCod, 1)
      arrayCarrito.push(productoItem)
    }
    $('.agregarAlCarrito').text("")
    for(let k =0 ; k<arrayCarrito.length; k++){
      let id = arrayCarrito[k].codigo
      $(".agregarAlCarrito").append('<p style = "color:green;" id = ' + id + '></p>') 
      $("#" + id).text(arrayCarrito[k].cantidad + " "+ arrayCarrito[k].nombre + " $"+ arrayCarrito[k].precio*arrayCarrito[k].cantidad)
    }
    localStorage.setItem('elCarrito', JSON.stringify(arrayCarrito))// quiero hacer una f(x) que recupere el carrito si se cerro el navegador/ para recuperarlo tengo que hacer JSON.parse(arrayCarrito)
}
function existeEnCarrito(productoCodigo){
  if(arrayCarrito.length == 0){
    return existe = false
  }else{
    for(let i = 0; i<arrayCarrito.length;i++){
      if(productoCodigo == arrayCarrito[i].codigo){
        arrayCarrito[i].cantidad+=1
        return existe = true
      }
    }
  }
}

function total(){
  let total = 0
  for(let i = arrayCarrito.length; i>=0 ; i--){
    total += arrayCarrito[i].precioTotal
  }
  return total
}
function eliminarCarrito(){
  arrayCarrito = []
  let caja = $('#agregarAlCarrito');
    while (caja.firstChild){
          caja.removeChild(caja.firstChild);
      }
  localStorage.clear()
}
