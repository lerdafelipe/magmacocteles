let total = 0;
///////////////////////////////////////////////////
//   Creando las cards de producto con JSON     //
$.getJSON("data/robots.json", function(datos, estado){
    ///////////////////////////////////////////////////
    //   Creando las cards de producto con JSON     //
    for(let producto of datos){
        $(".cocteles").append(crearProducto(producto));
    }
    ////////////////////////////////////////
    //    Creando y abriendo el popup    //
    $(".btn-ver").on("click", (e) =>{
    let encontrado = datos.find((elemento) =>{ return elemento.id == e.target.id});
    SELECCIONADOS.push(encontrado);
    for (const vista of SELECCIONADOS) {
        $(".popup-container").addClass("open");
        $(".popup-container").empty();
        $(".popup-container").append(crearPopup(vista));
        }
    ////////////////////////////////////////
    //          Cerrando el popup        //
    $(".btn-cerrarPopup").on("click", () =>{
        $(".popup-container").removeClass("open");
    });
        //////////////////////////////////////////
        ////////////////////////////////////////
        //      Agregando al carrito         //
        $(".btn-addCart").on("click", (c)=>{
            let buscarCantidad = COMPRA.find((elemento) =>{ return elemento.id == c.target.id});
            if(buscarCantidad == undefined){
                total = 0;
                let encontrarComprar = datos.find((elemento) =>{ return elemento.id == c.target.id});
                let nuevoProducto = new Producto(encontrarComprar);
                nuevoProducto.subTotal();
                COMPRA.push(nuevoProducto);
                compraGuardada = localStorage.setItem("compraGuardada", JSON.stringify(COMPRA));
                CompraGuardada = JSON.parse(localStorage.getItem("compraGuardada"));
                cargarCarrito();
            }
            else{
                total = 0;
                buscarCantidad.sumarCantidad();
                buscarCantidad.subTotal();
                compraGuardada = localStorage.setItem("compraGuardada", JSON.stringify(COMPRA));
                CompraGuardada = JSON.parse(localStorage.getItem("compraGuardada"));
                cargarCarrito();
            }
            $(".respuestas").empty();
            activarRtasAdd();
            /////////////////////////////////////////
            $(".productos-pv-cart").append(productoCarritoPvTotal()); 

        });
    });
});
//////////////////////////////////////////////////////
//    Abriendo y cerrando el preview de carrito    //
$(".btn-ver-pv").on("click", () =>{
    $(".popup-container-pv").addClass("open");

    $(".btn-cerrar-pv").on("click", () =>{
        $(".popup-container-pv").removeClass("open");
    });
});

carritoInicial()