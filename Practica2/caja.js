console.log("Sistema de Pedidos");

//es el array lista para guardar los pedidos
let pedidos = [];

// se inicia el total acumulado con un let en 0 or que va a cambiar cuando hagamos pedidos
let totalAcumulado = 0;

// agregarPedido donde creo la constante 
function agregarPedido(producto, precio) {

    // objeto pedido para crearlo
    const pedido = {
        producto: producto,
        precio: precio
    };

    //se guarda en el array pedido
    pedidos.push(pedido);

    totalAcumulado += precio;

    console.log("Pedido agregado: " + producto);
}

// Agregar pedidos
agregarPedido("Hamburguesa", 120);
agregarPedido("Pizza", 250);
agregarPedido("Refresco", 35);

// tabla de pedidos
console.log("Lista de pedidos:");
console.table(pedidos);

// total acumulado
console.log("Total acumulado: $" + totalAcumulado);