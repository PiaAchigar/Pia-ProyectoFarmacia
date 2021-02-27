function agregar(productoClicCod) {
    if(!existeEnCarrito(productoClicCod)){
      let productoItem = new Item(productoClicCod, 1)
      arrayCarrito.push(productoItem)
    }
    $('.agregarAlCarrito').text("")
    //document.getElementById("agregarAlCarrito").innerHTML = ""
      for(let k =0 ; k<arrayCarrito.length; k++){
        let id = arrayCarrito[k].nombre + "_" + arrayCarrito[k].codigo + "_"+ arrayCarrito[k].cantidad
       $(".agregarAlCarrito").append('<p style = "color:green;" id = ' + id + '></p>') // no se si esta bien creado mi id en tiempo de ejecucios (dinámico)
       $(id).text(arrayCarrito[k].cantidad + " "+ arrayCarrito[k].nombre + " $"+ arrayCarrito[k].precioTotal)
        //$(.productoClicCod:selected).val())//tengo que traerme el checkbox seleccionado y agregarlo al atributo "tamanio"... no se como hacerlo
        //y luego asignarsela a arrayCarrito[k].tamanio
        
        // let nodoTexto = ""
        // let nodoElemento = document.createElement("p")
        // nodoElemento.setAttribute("style", "color:green")
        // nodoElemento.setAttribute("id", id )
        // nodoTexto = document.createTextNode(arrayCarrito[k].cantidad + " "+ arrayCarrito[k].nombre + " " + "$"+arrayCarrito[k].precioTotal) //me devuelve un NaN, no me dio tiempo de mirarlo mejor
        // nodoElemento.appendChild(nodoTexto)
        // document.getElementById("agregarAlCarrito").appendChild(nodoElemento)
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
  let caja = document.getElementById('agregarAlCarrito'); // esto seria -> caja = $('.agregarAlCarrito')
    while (caja.firstChild){
          caja.removeChild(caja.firstChild);
      }
  localStorage.clear()
}
