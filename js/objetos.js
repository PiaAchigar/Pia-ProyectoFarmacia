function Item(codigoProd, cant, Json){
  console.log(Json)
  for(var clave in Json){
      if (Json.hasOwnProperty(clave)){
        Json[clave].forEach(element => {
          if(element.codigo==codigoProd){
                    this.marca = element.marca
                    this.nombre=element.nombre
                    this.tamanio=element.tamanio// hay varios tamaños :( 
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