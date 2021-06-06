class Producto{
    constructor(datos){
        this.id = parseInt(datos.id);
        this.nombre = datos.nombre;
        this.cantidad = parseInt(datos.cantidad);
        this.precio = parseInt(datos.precio);
        this.subtotal = 0;
    }

    sumarCantidad(){
        this.cantidad ++;
    }
    subTotal(){
        this.subtotal = this.precio * this.cantidad;
    }
    restablecerCantidad(){
        this.cantidad = 1;
    }
}