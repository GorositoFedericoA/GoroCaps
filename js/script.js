const products = [
    {nombre:"Teclado 100%", precio:18000},
    {nombre:"Teclado 75%", precio:15000},
    {nombre:"Teclado 60%", precio:12000},
    {nombre:"Switch Brown", precio:1800},
    {nombre:"Switch Blue", precio: 1500},
    {nombre:"Switch Red", precio: 1200},
    {nombre:"Keycap 3", precio: 1300},
    {nombre:"Keycap Personalizado", precio: 1000},
];

let carrito = [];
let usuario = prompt("Bienvenido a GoroCaps para registarse ingrese su nombre");
let selection = prompt("Hola " + usuario + ", somos una página dedicada a vender teclados, switchs y keycaps, si desea comprar algún producto ingrese si o no" );

while(selection != "si" && selection != "no"){
    alert("Por favor ingrese si o no")
    selection = prompt("Si desea comprar algún producto ingrese si o no")
}

if(selection == "si"){
    alert("A continuacion nuestra lista de productos disponibles");
    let productsAvailable = products.map((products2) => products2.nombre + " " + "$" + products2.precio);
         alert(productsAvailable.join(" - ")); 
    }else if(selection == "no"){
        alert("Gracias por su visita, la proxima será");
}

while(selection != "no"){
    let products2 = prompt("Agrega un producto a tu carrito");
    let precio = 0;

if (products2 == "Teclado 100%" || products2 == "Teclado 75%" || products2 == "Teclado 60%" || products2 == "Switch Brown"|| products2 == "Switch Blue"|| products2 == "Switch Red" || products2 == "Keycap 3D"|| products2 == "Keycap personalizado"){
    switch(products2){
        case "Teclado 100%":
            precio = 18000
            break;
         case "Teclado 75%":
            precio = 15000
            break;
         case "Teclado 60%":
            precio = 12000
            break;
         case "Switch Brown":
            precio = 1800
            break;
         case "Switch Blue":
            precio = 1500
            break; 
        case "Switch Red":
            precio = 1200
            break;
         case "Keycap 3D":
            precio = 1300
            break;
         case "Keycap personalizado":
            precio = 1000
            break;
        }

        let unidades = parseInt(prompt("Cuantas unidades vas a llevar?"));
        carrito.push({products2, unidades, precio})
        console.log(carrito)
        
    } else {
        alert("No contamos con este producto")
    }

    selection = prompt("Queres seguir comprando?")
    while (selection === "no") {
        alert("Gracias por la compra")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.products2}, unidades: ${carritoFinal.unidades}, Total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
        })

    break;
    }
}

    const total = carrito.reduce((acumulador, elem) => acumulador + elem.precio * elem.unidades,0)
    alert(`El total a pagar es de: ${total}`);



//menu de interacción
/*
let productos;
let teclado100Precio = 18000;
let teclado75Precio = 15000;
let teclado60Precio = 12000;
let switchBrownPrecio = 1800;
let switchBluePrecio = 1500;
let switchRedPrecio = 1200;
let keycap3dPrecio = 1300;
let keycapPersonalizadoPrecio = 1000;
let totalCompra = 0;*/









/*
function comprarTeclado(){
        productos = parseInt(prompt("Para comprar un teclado 100% ingrese 1, Para comprar un teclado 75% ingrese 2, Para comprar un teclado 60% ingrese 3"));
        if(productos==1){
            totalCompra = totalCompra + teclado100Precio
            console.log("compro teclado 100%")
        }else if (productos==2){
            totalCompra = totalCompra + teclado75Precio
            console.log("compro teclado 75%")
        }else if (productos==3){
            totalCompra = totalCompra + teclado60Precio
            console.log("compro teclado 60%")
        }else{
            alert("elegí uno de los números indicados")
        }
    }


    function comprarSwitchs(){
        productos = parseInt(prompt("Para comprar un switch brown ingrese 1, Para comprar un switch blue ingrese 2, Para comprar un un switch red ingrese 3"));
        if(productos==1){
            totalCompra = totalCompra + switchBrownPrecio
            console.log("compro switch brown")
        }else if (productos==2){
            totalCompra = totalCompra + switchBluePrecio
            console.log("compro switch blue")
        }else if (productos==3){
            totalCompra = totalCompra + switchRedPrecio
            console.log("compro switch red")
        }else{
            alert("elegí uno de los números indicados")
        }
    }

    function comprarKeycaps(){
        productos = parseInt(prompt("Para comprar un keycap 3D ingrese 1, Para comprar un keycap personalizable ingrese 2"));
        if(productos==1){
            totalCompra = totalCompra + keycap3dPrecio
            console.log("compro keycap 3D")
        }else if (productos==2){
            totalCompra = totalCompra + keycapPersonalizadoPrecio
            console.log("compro personalizado")
        }else{
            alert("elegí uno de los números indicados")
        }
    }

let opcion;
do{
    opcion = parseInt(prompt("Que es lo que querés comprar hoy?  1-comprar teclado 2-comprar switchs 3-comprar keycaps 4-salir"))

    switch(opcion){
        case 1:
            console.log("comprar teclado")
            comprarTeclado();
            break
        case 2:
            console.log("comprar switch")
            comprarSwitchs()
            break
        case 3:
            console.log("comprar keycap")
            comprarKeycaps()
            break
        case 4:
                console.log("salir")
                break
        default:
            console.log("no ha elegido ninguna opcion")
            alert("no ha elegido ninguna opcion")
        break
    }
}while(opcion!=4)

alert("El valor total de su compra es de: $" + totalCompra)


*/