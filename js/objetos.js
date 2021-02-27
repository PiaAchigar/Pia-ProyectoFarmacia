function Item(codigoProd, cant){
  for(let i = 0; i<productosJson.length ;i++){
    if(productosJson[i].codigo==codigoProd){
          this.marca = productosJson[i].marca
          this.nombre=productosJson[i].nombre
          this.tamanio=productosJson[i].tamanio// hay varios tamaños :( )
          this.precio=productosJson[i].precio
          this.precioTotal = parseInt(this.precio) * parseInt(this.cantidad)
          this.codigo=parseInt(productosJson[i].codigo)
          this.stock=productosJson[i].stock 
          this.cantidad = cant
        break
    }
  }
  this.getMonto=function(){return this.precioTotal}
}

function Cliente (nombre,apellido,mail,contrasenia){
  this.nombre = nombre
  this.apellido = apellido
  this.mail= mail
  this.contrasenia = contrasenia
}