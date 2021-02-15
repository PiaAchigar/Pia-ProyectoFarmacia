function agregar(productoClicCod) {// Agrega a mi arrayCarrito el producto Cliqueado, productoClic es el codigo
    if(!existeEnCarrito(productoClicCod)){//entra si aun no hizo click nunca en ese producto
    let productoItem = new Item(productoClicCod, 1)
    console.log("entro al if..." + productoItem.codigo + productoItem.nombre)
    arrayCarrito.push(productoItem)//me guardo en un arrayCarrito los productos que va cliqueando
    }else{//entra si el usu ya habia cliqueado antes el producto
      for(let i = 0; i<arrayCarrito.length ; i++){
        console.log("entra al for")
        if(arrayCarrito[i].codigo == productoCodigo){
        arrayCarrito[i].cantidad+=1
      }
    }
    }
    for(let k =0 ; k<arrayCarrito.length; k++){
      let nodoTexto = ""
      let nodoElemento = document.createElement("p") //creo el elemento que voy a atar
      nodoElemento.setAttribute("style", "color:green")// le ato un atto a mi elemento
      nodoTexto = document.createTextNode(arrayCarrito[k].cantidad + " "+ arrayCarrito[k].producto)// creo un nodo tipo Texto
      nodoElemento.appendChild(nodoTexto)// ato el nodo texto al elemento html
      document.getElementById("agregarAlCarrito").appendChild(nodoElemento)// hago aparecer el producto que agrego en pantalla
    }  
    
    localStorage.setItem('elCarrito', arrayCarrito)
}
  //control, si ya existe en el carrito
function existeEnCarrito(productoCodigo){
  console.log("existe en carrito" + productoCodigo)
  if(arrayCarrito.length == 0){
    return existe = false
    console.log("if de f existe" + productoCodigo)
  }else{
    console.log("else de existe en carrito")
    for(let i = 0; i>arrayCarrito.length;i++){
      console.log ("for de existeEnCarrito"+arrayCarrito[i].codigo)
      if(productoCodigo == arrayCarrito[i]){
        return existe = true
      }
      return existe = false
    }
  }
}

function total(){
  let total = 0
  for(let i = arrayCarrito.length; i>=0 ; i--){
    total += arrayCarrito[i].getMonto()
  }
  return total
}