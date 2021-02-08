function Carrito(producto, cantidad, precio){
    this.producto = producto
    this.cantidad = cantidad
    this.precio = precio
    this.getMonto = function(){return  precio * cantidad}
  }