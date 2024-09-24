// class Operacion {
//     constructor (id_operacion, monto_operacion, usuario_origen, usuario_destino, fecha) {
//         this.id_operacion = id_operacion;
//         this.monto_operacion = monto_operacion;
//         this.usuario_origen = usuario_origen;
//         this.usuario_destino = usuario_destino;
//         this.fecha = fecha;
//     }
    
// }

// const operaciones = [];
// let id_operacion=0;


// let usuariosJson = '{"usuarioArreglo":['+
// '{"nombreCompleto":"Marisol Pachauri",'+
// '"saldo": 100,'+
// '"celular":"999999999"},'+

// '{"nombreCompleto":"Christian Soto",'+
// '"saldo": 100,'+
// '"celular":"999999998"},'+

// '{"nombreCompleto":"Boris Pichihua",'+
// '"saldo": 100,'+
// '"celular":"999999997"},'+

// '{"nombreCompleto":"Jean Quico",'+
// '"saldo": 100,'+
// '"celular":"999999996"},'+

// '{"nombreCompleto":"Alexia Flores",'+
// '"saldo": 100,'+
// '"celular":"999999995"}'+

// ']}';

// const arrUsuarios= JSON.parse(usuariosJson);
// let celularEmisor = prompt("Ingrese su celular: ");

// let celularDestinatario = prompt("Ingrese numero de celular del destinatario: ");
// let monto = parseFloat(prompt("Ingrese monto a transferir: "));

// const cambio = 3.740;

// const cambioASoles = dolar => dolar*cambio; 


// function buscarUsuario(celular) {

//     for(item of arrUsuarios.usuarioArreglo){
//         if (item.celular == celular) {
//             //console.log(item);
//             return item;
//         } 
//     }
    
// }

// console.log("Emisor");
// let origen = buscarUsuario(celularEmisor);
// console.log(origen);
// console.log("Destinatario");
// let destino = buscarUsuario(celularDestinatario);
// console.log(destino);

// function enviarDinero (origen, destino, monto) {
//     let moneda = parseInt(prompt("Tipo de moneda: \n1. Soles\n2. Dólares"));
//     if (moneda == 1) {
//         if (origen.saldo > monto) {
//             origen.saldo = origen.saldo - monto;
//             destino.saldo = destino.saldo + monto;

//             id_operacion++;
//             operaciones.push(new Operacion(id_operacion,monto,origen,destino,new Date()));
//         } else {
//             console.log("Saldo insuficiente");
//         }

//     } else {
//         let montoSoles = cambioASoles(monto);
//         if (origen.saldo > montoSoles) {
//             origen.saldo = origen.saldo - montoSoles;
//             destino.saldo = destino.saldo + montoSoles;

//             id_operacion++;
//             operaciones.push(new Operacion(id_operacion,monto,origen,destino,new Date()));
//         } else {
//             console.log("Saldo insuficiente");
//         }
//     }
    
// }

// enviarDinero(origen, destino, monto);

// console.log("Actualizacion de saldos: ")
// console.log(origen);
// console.log(destino);

// console.log(operaciones);

// //nuevo yapeo
// //monto maximo de yapeo=500
// //detectar nro no registrado
class Operacion {
    constructor(id_operacion, monto_operacion, usuario_origen, usuario_destino, fecha) {
        this.id_operacion = id_operacion;
        this.monto_operacion = monto_operacion;
        this.usuario_origen = usuario_origen;
        this.usuario_destino = usuario_destino;
        this.fecha = fecha;
    }
}

const operaciones = [];
let id_operacion = 0;

let usuariosJson = '{"usuarioArreglo":[' +
    '{"nombreCompleto":"Marisol Pachauri",' +
    '"saldo": 100,' +
    '"celular":"999999999"},' +

    '{"nombreCompleto":"Christian Soto",' +
    '"saldo": 100,' +
    '"celular":"999999998"},' +

    '{"nombreCompleto":"Boris Pichihua",' +
    '"saldo": 100,' +
    '"celular":"999999997"},' +

    '{"nombreCompleto":"Jean Quico",' +
    '"saldo": 100,' +
    '"celular":"999999996"},' +

    '{"nombreCompleto":"Alexia Flores",' +
    '"saldo": 100,' +
    '"celular":"999999995"}' +

    ']}';

const arrUsuarios = JSON.parse(usuariosJson);
const cambio = 3.740;

const cambioASoles = dolar => dolar * cambio;

function buscarUsuario(celular) {
    // Iterar hasta encontrar un celular válido
    while (true) {
        for (let item of arrUsuarios.usuarioArreglo) {
            if (item.celular == celular) {
                return item;
            }
        }
        celular = prompt("Número no encontrado. Ingrese un número válido: ");
    }
}

let celularEmisor = prompt("Ingrese su celular: ");
let origen = buscarUsuario(celularEmisor);

let celularDestinatario = prompt("Ingrese número de celular del destinatario: ");
let destino = buscarUsuario(celularDestinatario);

let monto = parseFloat(prompt("Ingrese monto a transferir: "));

function enviarDinero(origen, destino, monto) {
    let moneda = parseInt(prompt("Tipo de moneda: \n1. Soles\n2. Dólares"));
    
    if (moneda == 1) {
        if (origen.saldo >= monto) {
            origen.saldo -= monto;
            destino.saldo += monto;

            id_operacion++;
            operaciones.push(new Operacion(id_operacion, monto, origen, destino, new Date()));
        } else {
            console.log("Saldo insuficiente");
        }

    } else {
        let montoSoles = cambioASoles(monto);
        if (origen.saldo >= montoSoles) {
            origen.saldo -= montoSoles;
            destino.saldo += montoSoles;

            id_operacion++;
            operaciones.push(new Operacion(id_operacion, monto, origen, destino, new Date()));
        } else {
            console.log("Saldo insuficiente");
        }
    }
}

enviarDinero(origen, destino, monto);

console.log("Actualización de saldos:");
console.log(origen);
console.log(destino);

console.log(operaciones);
