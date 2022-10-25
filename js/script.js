let teclados1 = "teclado 100% " + "$" + 18000; 
let teclados2 = "teclado 75% " + "$" + 12000;
let teclados3 = "teclado 60% " + "$" + 10000;  

let bienvenida = alert("Bienvidos a GoroCaps")

let compras = prompt("Para comprar un teclado presione 1, para comprar un keycap presione 2, para comprar un switch presione 3")

if(compras == 1){
    console.log(teclados1)
}else if (compras == 2){
    console.log("keycaps")
}else if (compras == 3){
    console.log("switchs")
}else{
    console.log("ingreso mal el numero")
}


