
var perfumeMujerImportado = ["Good Girl-CH","Ralph Lauren-EDT","Paco Rabanne-Black XS","Lancome-Idole","Yves Saint Laurent-Opium Black","Nina Ricci-Rouge","Cacharel-Anais Anais","Calvin Klein-Eternity","Tommy Hilfiger-Tommy Girl","Givenchy-Linterdit","Dior-Jador","Kenzo-Leau Kenzo","Armani-Si"]
var precioPerfumeMujerInt = [9000,7800,8800,9800,9500,7800,7100,6800,7200,7800,9900,7800,8500]
var productos = [];
var item = {};
let cantidadProd;
let agregar = prompt("Desea agregar productos al carrito? SI/NO");

while (agregar == "" || agregar == null) {
  agregar = prompt("Desea agregar productos al carrito? SI/NO")
}
console.log (agregar + "este")
if(agregar.toLowerCase() == 'si') {
  console.log (agregar + "adentro")
  cantidadProd = parseInt(prompt("Cuantos productos desea agregar?", "Numérico"));
  console.log (agregar + "paso")
  for(var i = cantidadProd; i >= 0; i--){
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
  
  let nodoElemento = crearNodo("elemento", "h3")
  let nodoTexto = crearNodo("texto", "El monto a pagar seria $" + Total(productos))
  atarNodo(nodoElemento, nodoTexto)
  atarNodo(document.getElementById("desafio7-JS"), nodoElemento)

  alert("Gracias por confiar en ´La Perfumeria´");
   
} else {
  alert('Vuelve pronto!')
}


	// When the user scrolls the page, execute myFunction
  window.onscroll = function () { myFunction() };

  // Get the header
  var header = document.getElementById("myHeader");

  // Get the offset position of the navbar
  //var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }