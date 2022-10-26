//bienvenida
function bienvenida (usuario) {
    alert("Hola " + usuario + ", somos una página dedicada a vender teclados!" );
};
bienvenida(prompt("Bienvenido a GoroCaps para registarse ingrese su nombre"));


//menu de interacción
menuPrincipal();

function menuPrincipal (menu){
    let teclado100Precio = 18000;
    let teclado75Precio = 15000;
    let teclado60Precio = 12000;
    let totalCompra = 0;

    console.log(teclado100Precio + teclado60Precio)

    let productos = Number( prompt("Para comprar un teclado 100% ingrese 1, Para comprar un teclado 75% ingrese 2, Para comprar un teclado 60% ingrese 3"));

    if (productos == 1) {
        console.log("compraste teclado 100%, su valor es de $" + teclado100Precio);
    } else if (productos == 2) {
        console.log("compraste teclado 75%, su valor es de $" + teclado75Precio);
    } else if (productos == 3)
    console.log("compraste teclado 60%, su valor es de $" + teclado60Precio);
    else{
        menuPrincipal(alert("No elegiste nada"));
    };
};




