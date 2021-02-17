function agregar(productoClicCod) {
  console.log("1er consol..."+productoClicCod)
    if(!existeEnCarrito(productoClicCod)){//entra si aun no hizo click nunca en ese producto
    let productoItem = new Item(productoClicCod, 1)
    arrayCarrito.push(productoItem)//me guarda los productos que va cliqueando
    }else{//entra si el usu ya habia cliqueado antes el producto
      for(let i = 0; i<arrayCarrito.length ; i++){
        if(arrayCarrito[i].codigo == productoClicCod){
        arrayCarrito[i].cantidad+=1
      //let p = document.getElementBytagName()
      //tengo q borrar los nodos repetidos
      }
    }
    }
    let html = '' //Seteo un string llamado html (puede ser el nombre que sea)
    let cart = document.getElementById("agregarAlCarrito")//Llamo al elemento donde quieres mostrar los productos
    cart.innerHTML = ''//Seteo su html ''
    
    arrayCarrito.forEach(function(producto) {//hago un forEach en lugar del for porque es un array y es mucho mas comodo
        html += `<p style="color:green">${producto.cantidad} ${producto.nombre}</p>` //lo voy sumando a la variable html un string que luego sera un tag de html
        cart.innerHTML = html //aqui se convierte en un tag de html
    })
    // for(let k =0 ; k<arrayCarrito.length; k++){
    //   let nodoTexto = ""
    //   let nodoElemento = document.createElement("p") //creo el elemento que voy a atar
    //   nodoElemento.setAttribute("style", "color:green")// le ato un atto a mi elemento
    //   nodoTexto = document.createTextNode(arrayCarrito[k].cantidad + " "+ arrayCarrito[k].nombre)// creo un nodo tipo Texto
    //   nodoElemento.appendChild(nodoTexto)// ato el nodo texto al elemento html
    //   document.getElementById("agregarAlCarrito").appendChild(nodoElemento)// hago aparecer el producto que agrego en pantalla
    // }  
    
    localStorage.setItem('elCarrito', arrayCarrito)
}
  //control, si ya existe en el carrito
function existeEnCarrito(productoCodigo){
  if(arrayCarrito.length == 0){
    console.log("primer clic" + productoCodigo)
    return existe = false
    
  }else{
    console.log("else de existe en carrito")
    for(let i = 0; i>=arrayCarrito.length;i++){//no lo recorre, no se porque
      console.log ("for de existeEnCarrito"+arrayCarrito[i].codigo)
      if(productoCodigo == arrayCarrito[i].codigo){
        console.log("segundo clic" + productoCodigo + arrayCarrito[i].cantidad)
        return existe = true
      }
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
function eliminarCarrito(){
  arrayCarrito = []
  // var caja = document.getElementById('agregarAlCarrito');      //no funciona por que estan agregados con innerHTML
  // if(caja.contains !== null){                    
  //     while (caja.hasChildNodes()){
  //         caja.removeChild(caja.lastElementChild);
  //     }
  // }
}