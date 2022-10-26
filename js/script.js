function bienvenida (usuario) {
    alert("Hola " + usuario + " bienvenido a GoroCaps" )
}

bienvenida(prompt("Ingrese su nombre"))

menuPrincipal()

function menuPrincipal (menu){
    let productos = Number( prompt("Para comprar un teclado ingrese 1, Para comprar un switch ingrese 2, Para comprar un keycap ingrese 3"))

let tiposTeclados 
let tiposSwitchs
let tiposKeycaps
let teclado100


switch (productos) {
    case 1:
        tiposTeclados = Number( prompt("Para comprar teclado 100% ingrese 1, Para comprar teclado 75% ingrese 2,Para comprar teclado 60% ingrese 3"))

        switch (tiposTeclados) {
            case 1:
                teclado100 = prompt ("El teclado 100% vale $ 18.000 desea comprarlo? si o no")

                if (teclado100 === "si" || "Si" || "SI") {
                    alert("compraste teclado 100%")
                }else {
                    menuPrincipal()
                }
            break;
        
            case 2:
                console.log ("El teclado 75% vale $12.000")
            break;
        
            case 3:
                console.log("El teclado 60% vale $10.000")
            break;
        
            default:
                menuPrincipal(prompt("Ingresó mal el número, para continuar presione cualquier tecla y enter"))
                break;
        }
        
    break;

    case 2:
        tiposSwitchs = Number( prompt("Para comprar un switch brown ingrese 1, Para comprar un switch blue ingrese 2,Para comprar un switch red ingrese 3"))

        switch (tiposSwitchs) {
            case 1:
                console.log("El swicth brown vale $3.500 el pack de 20 unidades")
            break;
        
            case 2:
                console.log("El swicth blue vale $2.500 el pack de 20 unidades")
            break;
        
            case 3:
                console.log("El swicth brown vale $2.900 el pack de 20 unidades")
            break;
        
            default:
                menuPrincipal(prompt("Ingresó mal el número, para continuar presione cualquier tecla y enter"))
            break;
        }
    break;

    case 3:
        tiposKeycaps = Number( prompt("Para comprar los keycaps customs 3D ingrese 1, Para comprar los keycaps personalizados ingrese 2"))

        switch (tiposKeycaps) {
            case 1:
                console.log("Los keycaps 3D valen $2.200 por unidad")
            break;
        
            case 2:
                console.log("Los keycaps personalizados valen $1.000 por unidad")
            break;
            
            default:
                console.log("Ingresó mal el número")
            break;
        }
    break;

    default:
        menuPrincipal(prompt("Ingresó mal el número, para continuar presione cualquier tecla y enter"))
        break;
}
}


