class Operacion {
    constructor(id_operacion, monto_operacion, usuario_origen, usuario_destino, moneda, fecha) {
        this.id_operacion = id_operacion;
        this.monto_operacion = monto_operacion;
        this.usuario_origen = usuario_origen;
        this.usuario_destino = usuario_destino;
        this.moneda = moneda;
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

ejecutarTransferencia();
function ejecutarTransferencia() {
    let celularOrigen = prompt("Ingrese su celular: ");
    let origen = buscarUsuario(celularOrigen);

    let rpta = '';
    do {
        celularDestinatario = prompt("Ingrese el celular del destinatario: ");
        destino = buscarUsuario(celularDestinatario);
        rpta = prompt("Enviara dinero al usuario "+JSON.stringify(destino.nombreCompleto)+"de numero "+JSON.stringify(destino.celular)
        +"\nEs correcto el destinatario (si/no)? ");
    } while (rpta.toLowerCase()=='no');

    console.log("Saldos iniciales:")
    console.log("Usuario origen: \nNombre completo: "+origen.nombreCompleto+", Saldo: S/."+origen.saldo+", Celular: "+origen.celular);
    console.log("Usuario destino: \nNombre completo: "+destino.nombreCompleto+", Saldo: S/."+destino.saldo+", Celular: "+destino.celular);

    let monto = parseFloat(prompt("Ingrese monto a transferir: "));
    enviarDinero(origen, destino, monto);

    console.log("Actualización de saldos:");
    console.log("Usuario origen: \nNombre completo: "+origen.nombreCompleto+", Saldo: S/."+origen.saldo+", Celular: "+origen.celular);
    console.log("Usuario destino: \nNombre completo: "+destino.nombreCompleto+", Saldo: S/."+destino.saldo+", Celular: "+destino.celular);
    console.log("Operación realizada:")
    operaciones.forEach(op => {
        console.log(`ID: ${op.id_operacion}, Origen: ${op.usuario_origen.celular}, Destino: ${op.usuario_destino.celular}, Monto: $${op.monto_operacion}, Moneda:  ${op.moneda}, Fecha: ${op.fecha}`);
    });
}

function buscarUsuario(celular) {
    while (true) {
        for (let item of arrUsuarios.usuarioArreglo) {
            if (item.celular == celular) {
                return item;
            }
        }
        celular = prompt("Número no encontrado. Ingrese un número válido: ");
    }
}

function enviarDinero(origen, destino, monto) {
    const cambio = 3.740;
    const cambioASoles = dolar => dolar * cambio;
    let moneda

    // Verificar si la opción ingresada es válida
    while (true) {
        moneda = parseInt(prompt("Tipo de moneda: \n1. Soles\n2. Dólares"));
        if (moneda == 1 || moneda == 2) {
            break; 
        } else {
            console.log("La moneda ingresada no es válida. Intente de nuevo.");
        }
    }

    switch (moneda) {
        case 1:
            if (origen.saldo >= monto) {
                origen.saldo -= monto;
                destino.saldo += monto;
        
                id_operacion++;
                operaciones.push(new Operacion(id_operacion, monto, origen, destino, "soles", new Date()));
            } else {
                console.log("Saldo insuficiente. Necesita recargar.");
            }
            break;
    
        case 2:
            let montoSoles = cambioASoles(monto);
            if (origen.saldo >= montoSoles) {
                origen.saldo -= montoSoles;
                destino.saldo += montoSoles;
    
                id_operacion++;
                operaciones.push(new Operacion(id_operacion, monto, origen, destino, "dolares", new Date()));
            } else {
                console.log("Saldo insuficiente");
            }
            break;
    
        default:
            console.log("La moneda ingresada no es válida.")
            break;
    }
}
