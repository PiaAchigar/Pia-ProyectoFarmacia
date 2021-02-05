function crearNodo(tipoNodo, texto) { //tipoNodo = elemento o texto -- 1ro) lo creo
    if (tipoNodo == "elemento") {
        return document.createElement(texto)
    }
    if (tipoNodo == "texto") {
        return document.createTextNode(texto)
    }
}

function crearAtributo(nodo, clave, valor) {//le doy estilo a mi nodo
    return nodo.setAttribute(clave, valor)
}

function atarNodo(nodoPadre, nodoHijo) {// 2do) lo hago aparecer en pantalla "atandolo a un div"
    nodoPadre.appendChild(nodoHijo)
}

function Total(productos){
    let suma = 0
    productos.forEach(function(item) {
      suma += item.precio * item.cantidad;
    })
   return suma.toFixed(2)
  }