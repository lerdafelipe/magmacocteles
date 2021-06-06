//Crear HTML
function crearProducto(producto){
    return `<div  class="t-33">
                <div class="cocteles_div">
                    <img alt="coctel" src="${producto.imagen}">
                    <div>
                        <h3>${producto.nombre}</h3>
                        <p>$ ${producto.precio}</p>
                        <button id="${producto.id}" type="button" class="btn-ver ing">Ver más</button>
                    </div>
                </div>
            </div>`;
}
//
//CREAR POPUP
function crearPopup(vista){
    return `<div class="popup">
                <div class="popup-img">
                    <img src="${vista.imagen}" alt="">
                </div>
                <div class="popup-content">
                    <div class="popup-titulo"><h2>${vista.nombre}</h2></div>
                    <div class="popup-ingredientes">
                        <h4>ingredientes</h4>
                        <ul>
                            <li>${vista.ingredientes}</li>
                        </ul>
                    </div>
                    <div class="popup-btns">
                        <button type="button" class=" btn btn-cerrarPopup">Cerrar</button>
                        <button id="${vista.id}" type="button" class="btn btn-addCart">Agregar al carrito</button>
                    </div>           
            </div>`
}
//
//
function productoCarritoPv (compra){
    return `<tr>
                <td><b>${compra.nombre}</b></td>
                <td>${compra.cantidad}</td>
                <td>$ ${compra.subtotal}</td>
                <td><button id="${compra.id}" type="button" class="btn btn-danger btn-borrar-producto" onclick=elimnarProducto(${compra.id})>X</button></td>
            </tr>`
}
//
//
function productoCarritoPvTotal(){
    return `<tr>
                <td></td>
                <td><b>Subtotal=</b></td>
                <td><b>$ ${total}</b></td>
                <td></td>
            </tr>`
}
//
//
function cargarCarrito(){
    $(".productos-pv-cart").empty();
    for (const compra of CompraGuardada) {
        total = total + compra.subtotal;
        $(".productos-pv-cart").append(productoCarritoPv(compra));
        $(".popup-container").removeClass("open");
    }

}
//
//
function rtaAdd(){
    return `<p class="parAdd">El producto se agregó correctamente</p>`;
}
//
function activarRtasAdd(){
    $(".respuestas").empty();
    $(".respuestas").append(rtaAdd());
    $(".respuestas").addClass("activar")
    $(".respuestas").fadeIn(1000).fadeOut(2000);
}
//
function rtaDelete(){
    return `<p class="parDelete">El producto se eliminó correctamente</p>`;
}
//
function activarRtasDelete(){
    $(".respuestas").empty();
    $(".respuestas").append(rtaDelete());
    $(".respuestas").addClass("activar")
    $(".respuestas").fadeIn(1000).fadeOut(2500);
}
//
//
function carritoInicial() {
    if (localStorage.compraGuardada != undefined && localStorage.length > 0) {
        CompraGuardada = JSON.parse(localStorage.compraGuardada);
        for (const compra of CompraGuardada) {
            total = total + compra.subtotal;
            $(".productos-pv-cart").append(productoCarritoPv(compra));
        }
        $(".productos-pv-cart").append(productoCarritoPvTotal()); 
    }
  }
  //
  //
function elimnarProducto(id){
    const index = CompraGuardada.findIndex(item => item.id === id);
    CompraGuardada.splice(index, 1);
    localStorage.setItem("compraGuardada", JSON.stringify(CompraGuardada));
    CompraGuardada = JSON.parse(localStorage.getItem("compraGuardada"));
    total = 0;
    cargarCarrito();
    if(CompraGuardada.length>0){
        $(".productos-pv-cart").append(productoCarritoPvTotal()); 
    }
    activarRtasDelete();
}