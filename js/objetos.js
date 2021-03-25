function Item(codigoProd, cant, tamanio,Json){
  //console.log(Json)
  for(var clave in Json){
      if (Json.hasOwnProperty(clave)){
        Json[clave].forEach(element => {
          //console.log("obj:"+ element.tamanio + tamanio )
          if(element.codigo==codigoProd && element.tamanio == tamanio){
                    this.marca = element.marca
                    this.nombre=element.nombre
                    this.tamanio=element.tamanio
                    this.precio=element.precio
                    this.codigo=parseInt(element.codigo)
                    this.stock=element.stock 
                    this.cantidad = cant
                    this.precioTotal = parseInt(element.precio) * parseInt(this.cantidad)
              }
        })
        }
  }
 
}
    
function Cliente (nombre,apellido,mail,contrasenia){
  this.nombre = nombre
  this.apellido = apellido
  this.mail= mail
  this.contrasenia = contrasenia
}