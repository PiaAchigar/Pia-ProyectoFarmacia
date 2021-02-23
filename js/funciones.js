function agregar(productoClicCod) {
    if(!existeEnCarrito(productoClicCod)){//1er clic
      let productoItem = new Item(productoClicCod, 1)
      arrayCarrito.push(productoItem)
    }
      document.getElementById("agregarAlCarrito").innerHTML = ""
      for(let k =0 ; k<arrayCarrito.length; k++){
        console.log(arrayCarrito[k].cantidad + "..."+ arrayCarrito[k].codigo)
        let nodoTexto = ""
        let id = arrayCarrito[k].nombre + "_" + arrayCarrito[k].codigo + "_"+ arrayCarrito[k].cantidad
        let nodoElemento = document.createElement("p")
        nodoElemento.setAttribute("style", "color:green")
        nodoElemento.setAttribute("id", id )
        nodoTexto = document.createTextNode(arrayCarrito[k].cantidad + " "+ arrayCarrito[k].nombre + " " + "$"+arrayCarrito[k].getMonto()) //me devuelve un NaN, no me dio tiempo de mirarlo mejor
        nodoElemento.appendChild(nodoTexto)
        document.getElementById("agregarAlCarrito").appendChild(nodoElemento)
    }
    localStorage.setItem('elCarrito', arrayCarrito)// quiero hacer una f(x) que recupere el carrito si se cerro el navegador
  }
  
function existeEnCarrito(productoCodigo){
  console.log(arrayCarrito + "mi array")
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

function total(){//no me dio tiempo de usarla porque pedi mucho tiempo intentando que funcione la insercion y eliminacion de nodos :(
  let total = 0
  for(let i = arrayCarrito.length; i>=0 ; i--){
    total += arrayCarrito[i].getMonto()
  }
  return total
}
function eliminarCarrito(){
  arrayCarrito = []
  let caja = document.getElementById('agregarAlCarrito');
    while (caja.firstChild){
          caja.removeChild(caja.firstChild);
      }
  localStorage.clear()
}