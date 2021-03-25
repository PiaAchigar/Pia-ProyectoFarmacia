const d = document;

function agregar(productoClicCod, productosJson, tamanio) {
  //console.log("agregar tamanio:"+ tamanio)
  if(!existeEnCarrito(productoClicCod,tamanio)){//todo: corroborar el tamaño tb
    let productoItem = new Item(productoClicCod,1,tamanio,productosJson)
    console.log(productoItem)
    arrayCarrito.push(productoItem)
  }
  $('.agregarAlCarrito').text("")
  for(let k =0 ; k<arrayCarrito.length; k++){
    console.log(arrayCarrito[k].codigo + " "+arrayCarrito[k].tamanio + " k:"+ k)
    let id = arrayCarrito[k].codigo + arrayCarrito[k].tamanio
    $(".agregarAlCarrito").append('<p style = "color:green;" id = ' + id + '></p>') 
    $("#" + id).text(arrayCarrito[k].cantidad + "  "+ arrayCarrito[k].nombre+"  "+ " x "+ arrayCarrito[k].tamanio+"ml "+" $"+ arrayCarrito[k].precio*arrayCarrito[k].cantidad)
  }
  localStorage.setItem('elCarrito', JSON.stringify(arrayCarrito))// quiero hacer una f(x) que recupere el carrito si se cerro el navegador/ para recuperarlo tengo que hacer JSON.parse(arrayCarrito)
}
function existeEnCarrito(productoCodigo, tamanio){
  //const existe = true
  if(arrayCarrito.length === 0){
    console.log(arrayCarrito.length +"entro al primer if")
    
    return existe = false
    
  }else{
    for(let i = 0; i<arrayCarrito.length;i++){
      console.log("entro"+ "i:"+ i + " "+ arrayCarrito[i].tamanio + " el tamaño q mando :"+ tamanio + "codigo:"+arrayCarrito[i].codigo+"cod q entra:"+ productoCodigo)
      if((tamanio == arrayCarrito[i].tamanio) && (productoCodigo == arrayCarrito[i].codigo)){
        
        arrayCarrito[i].cantidad+=1
        existe = true
        return existe
      }else{
        existe = false
        return existe
      }
    }
  }
}

function total(){
  let total = 0
  for(let i = arrayCarrito.length; i>=0 ; i--){
    total += arrayCarrito[i].precioTotal
  }
  return total
}
function eliminarCarrito(){
  arrayCarrito = []
  let caja = $('#agregarAlCarrito');
    while (caja.firstChild){
          caja.removeChild(caja.firstChild);
      }
  localStorage.clear()
}
function darkMode(e, btn, classDark){
  const themeBtn = d.querySelector(btn),
      selectores = d.querySelectorAll("[data-dark]")
  let luna="🌙",
      sol="☀️"
  //d.addEventListener("click", (e)=>{
      if(e.target.matches(btn)){
          if(themeBtn.textContent === luna){
              selectores.forEach(el=> el.classList.add(classDark))
              themeBtn.textContent = sol
          }else{
              selectores.forEach(el=> el.classList.remove(classDark))
              themeBtn.textContent = luna
          }
      }
  //})

}

function mostrarCarrito(btn){
  const btnSelect = d.querySelector(btn)

  d.addEventListener("click", (e)=>{
    if(e.target.matches(btnSelect.value)){
      Swal.fire({
        position: 'top-end',
        title: 'Su Carrito',
        showConfirmButton: true,
        showDenyButton: true,
        denyButtonText: `Eliminar`,
        keydownListenerCapture: true,
        text: `Su saldo es ${total()}`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          //tengo q mandarlo a mercadopago
        } else if (result.isDenied) {
          Swal.fire('Carrito Vacio')
          arrayCarrito = []
        }
       })
    }
  })
}