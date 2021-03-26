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

function CreateArrayJson(Json){
  
  for(var clave in Json){
    if (Json.hasOwnProperty(clave)){
      console.log(Json[clave].length)
      const long = Json[clave].length
      Json[clave].forEach(e => {
        console.log("esta es la clave:"+clave)
         
            console.log("dentro:" + e.marca)
                  const p = new ObjProducto(e.marca,e.nombre,e.tamanio,e.precio,e.codigo,e.stock,e.foto)
                  arrayJson.push(p)
            
      })
      }
}
  for(let i = 0 ; i < arrayJson.length; i++){
    console.log(arrayJson[i].nombre + "veces:"+i)
  }
}
    
function ObjProducto(m,n,t,p,c,s,f){
  this.marca=m
  this.nombre=n
  this.tamanio=t
  this.precio=p
  this.codigo=parseInt(c)
  this.stock=s
  this.foto=f
}

function Cliente (nombre,apellido,mail,contrasenia){
  this.nombre = nombre
  this.apellido = apellido
  this.mail= mail
  this.contrasenia = contrasenia
}