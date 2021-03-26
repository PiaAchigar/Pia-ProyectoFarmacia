const d = document
function printHtml(Json){
  
  const cards = d.querySelector(".cards"),
        fragmento = d.createDocumentFragment(),
        figure = d.createElement("figure"),
        mujer = d.createTextNode("Mujer"),
        divTitulo = d.createElement("div"),
        h3DivTitulo = d.createElement("h3"),
        divPerfumes1 = d.createElement("div")
        
        

        //todo Select...https://stackoverflow.com/questions/16676679/javascript-html-object-htmlselectelement/16676714
        //https://stackoverflow.com/questions/11418384/how-to-get-current-htmlselectelements-id
        //https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions
        
        console.log(Json.productosJson.length)
        Json.productosJson.forEach((e)=>{
          const divPerfumes2 = d.createElement("div"), 
                selectTamanioPerfu = d.createElement("select"),
                img = d.createElement("img"),
                p = d.createElement("p"),
                p2 = d.createElement("p"),
                pMarcaPerfu = d.createTextNode(e.marca),
                pNombrePerfu = d.createTextNode(e.nombre)

          //de p al  div2
          p.appendChild(pMarcaPerfu)
          p2.appendChild(pNombrePerfu)
          img.setAttribute("src",e.foto)
          img.setAttribute("alt",e.nombre)
          divPerfumes2.classList.add("card")
          divPerfumes2.appendChild(img)
          divPerfumes2.appendChild(p)
          divPerfumes2.appendChild(p2)
          divPerfumes1.classList.add("row")//tengo q ponerle mas classes
          divPerfumes1.appendChild(divPerfumes2)
          
          //Selects
          selectTamanioPerfu.setAttribute("id", e.nombre)
          console.log("nombre de las presentacio:"+e.nombre)
          for(let k=0;k<e.presentacion.length;k++){
            const optionDeSelect = d.createElement("option")
            console.log("presentacion:"+ e.presentacion[k].tamanio)
            optionDeSelect.setAttribute("value",e.presentacion[k].tamanio)
            optionDeSelect.innerHTML = e.presentacion[k].tamanio + "ml"
            selectTamanioPerfu.appendChild(optionDeSelect)
          }
          divPerfumes2.appendChild(selectTamanioPerfu)
          
        })             
        //div1 a divTitulo
        divTitulo.classList.add("row")
        h3DivTitulo.appendChild(mujer)
        divTitulo.appendChild(h3DivTitulo)
        divTitulo.setAttribute("id","fondoDegradeGris")
        cards.appendChild(divTitulo)
        cards.appendChild(divPerfumes1)
        cards.setAttribute("class", "container")
      
}

function agregar(productoClicCod, productosJson, tamanio) {
  //console.log("agregar tamanio:"+ tamanio)
  if(!existeEnCarrito(productoClicCod,tamanio)){//todo: corroborar el tamaño tb
    let productoItem = new Item(productoClicCod,1,tamanio,productosJson)
    console.log(productoItem)
    arrayCarrito.push(productoItem)
  }
  $('.agregarAlCarrito').text("")
  for(let k =0 ; k<arrayCarrito.length; k++){
    //console.log(arrayCarrito[k].codigo + " "+arrayCarrito[k].tamanio + " k:"+ k)
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