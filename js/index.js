
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
function Total(productos){
  var suma = 0
  productos.forEach(function(item) {
    suma += item.precio * item.cantidad;
  })
 return suma
}
let cantidadProd;

var agregar = prompt("Desea agregar productos al carrito? SI/NO");

if(agregar.toLowerCase() === 'si') {
   
  cantidadProd = parseInt(prompt("Cuantos productos desea agregar?", "Numérico"));
  console.log(cantidadProd);
   
  for(var i = cantidadProd; i != 0; i--){
    let cod = parseInt(prompt("Ingrese el codigo del producto", "Ej: 1"))
    let cantid = prompt("Cantidad de unidades?", "Ej: 1")
     item = {
      perfume:perfumeMujerImportado[cod],
      cantidad: parseInt(cantid),
      precio: precioPerfumeMujerInt[i]
    }
    productos.push(item)
    console.log(productos)
  }
  var precioTotal = Total(productos);
   
  alert("El monto a pagar seria " + precioTotal);
  console.log(precioTotal);
  alert("Gracias por confiar en ´La Perfumeria´");
   
} else {
  alert('Vuelve pronto!')
}