function Item(codigoProd, cant){
  for(let i = 0; i<productosJson.length ;i++){
    if(productosJson[i].codigo==codigoProd){
          this.marca = productosJson[i].marca
          this.nombre=productosJson[i].nombre
          this.tamanio=productosJson[i].tamanio
          this.precio=productosJson[i].precio
          this.codigo=parseInt(productosJson[i].codigo)
          this.stock=productosJson[i].stock 
          this.cantidad = cant
        break
    }
  }
  this.getMonto=function(){return precio * cantidad}
}