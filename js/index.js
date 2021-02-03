//alert("Bienvenido a La Perfumeria, para comenzar precione enter")
var perfumeMujerImportado = ["Good Girl-CH","Ralph Lauren-EDT","Paco Rabanne-Black XS","Lancome-Idole","Yves Saint Laurent-Opium Black","Nina Ricci-Rouge","Cacharel-Anais Anais","Calvin Klein-Eternity","Tommy Hilfiger-Tommy Girl","Givenchy-Linterdit","Dior-Jador","Kenzo-Leau Kenzo","Armani-Si"]
var precioPerfumeMujerInt = [9000,7800,8800,9800,9500,7800,7100,6800,7200,7800,9900,7800,8500]
var agregar = prompt("Desea agregar productos al carrito? SI/NO")
var productos = [];
var item = {}
function Carrito(producto, cantidad, precio){
  this.producto = producto
  this.cantidad = cantidad
  this.precio = precio
  this.getMonto = function(){return  precio * cantidad}
}
function Total(cantidadProd){
    var suma = 0
  for (var i= cantidadProd; i>0; i--){
    suma = suma + productos.getMonto() 
  }
  return "EL total a pagar es $" + suma
}
// while(agregar.toString().toLowerCase() == "si") {
    
//   let cantidadProd = parseInt(prompt("Cuantos productos desea agregar?", "Numérico"));
    
//   for(var i = cantidadProd; i != 0; i--){
//     let cod = parseInt(prompt("Ingrese el codigo del producto", "Ej: 1"))
//     let cantid = prompt("Cantidad de unidades?", "Ej: 1")
//      item = {
//         perfume:perfumeMujerImportado[cod],
//         cantidad: parseInt(cantid),
//         precio: precioPerfumeMujerInt[i]
//     }
//       productos.push(item)
//   }
//   alert(Total(cantidadProd))
//   agregar = prompt("Desea agregar otro producto al carrito? SI/NO")
// }
// alert("Gracias por confiar en ´La Perfumeria´")
console.log(window)