const operaciones = [
    {
        id_operacion: 1,
        monto_operacion: 50,
        usuario_origen: '999999999',
        usuario_destino: '999999997',
        fecha: "2024-09-24"
    },
    {
        id_operacion: 2,
        monto_operacion: 30,
        usuario_origen: '999999998',
        usuario_destino: '999999996',
        fecha: "2024-07-20"
    },
    {
        id_operacion: 3,
        monto_operacion: 20,
        usuario_origen: '999999998',
        usuario_destino: '999999999',
        fecha: "2024-09-17"
    },
    {
        id_operacion: 4,
        monto_operacion: 30,
        usuario_origen: '999999994',
        usuario_destino: '999999996',
        fecha: "2024-03-23"
    },
    {
        id_operacion: 5,
        monto_operacion: 30,
        usuario_origen: '999999998',
        usuario_destino: '999999999',
        fecha: "2024-09-03"
    }
];

let numeroCelular;
let usarFiltros;
let detalleOperacionId;
let deseaCompartir;
let operacionesDelUsuario;

numeroCelular = prompt("Ingrese su numero de celular: ");
mostrarOperaciones();

function mostrarOperaciones() {
    operacionesDelUsuario = operaciones.filter(op => ((op.usuario_origen==numeroCelular) || (op.usuario_destino==numeroCelular)));
    console.log("Operaciones realizadas del usuario "+numeroCelular+":");
    if (operacionesDelUsuario.length == 0) {
        console.log('No hay operaciones registradas');
    } else {
        operacionesDelUsuario.forEach(op => {
            if (numeroCelular == op.usuario_origen) {
                console.log(`ID: ${op.id_operacion}, Yapeaste un monto de: ${op.monto_operacion}, Usuario destino: ${op.usuario_destino}, Fecha: ${op.fecha} `);
            } else {
                console.log(`ID: ${op.id_operacion}, Te yapearon un monto de: ${op.monto_operacion}, Usuario origen: ${op.usuario_origen}, Fecha: ${op.fecha} `);
            }
        });
        
        usarFiltros = confirm("¿Filtrar operaciones por periodo?");
        if (usarFiltros) {
            elegirFiltro();
        }
        detalleOperacionId = prompt("Ingrese el id_operacion que desea ver en detalle: ");
        verDetalleMovimiento(detalleOperacionId);
        deseaCompartir = confirm("¿Deseas compartir comprobante?");
        compartir(deseaCompartir);
    }
}

function elegirFiltro() {
    console.log("Seleccionando el filtro de movimiento por período.");
    let filtro;
    let dias=0;

    do {
        filtro = parseInt(prompt("1. Últimos 7 días\n2. Últimos 15 días\n3. Últimos 30 días\n4. Últimos 90 días"));
        switch(filtro) {
            case 1: dias=7; break;
            case 2: dias=15; break;
            case 3: dias=30; break;
            case 4: dias=90; break;
            default: console.log("Filtro inválido."); break;
        }
    } while(filtro>4 || filtro<1);

    let fechaActual = new Date();
    let fechaLimite = restarDias(fechaActual, dias);
    let operacionesFiltradasDelUsuario = operacionesDelUsuario.filter(op => new Date(op.fecha) >= fechaLimite);
    console.log(`Operaciones de los últimos ${dias} días:`, operacionesFiltradasDelUsuario);
    
}

function restarDias(fechaActual, dias) {
    let fecha = new Date(fechaActual);
    fecha.setDate(fecha.getDate() - dias);
    return fecha;
}

function verDetalleMovimiento(detalleOperacionId) {
    let operacionElegida;
    while (true) {
        operacionElegida = operacionesDelUsuario.filter(op => op.id_operacion == detalleOperacionId);
    
        if (operacionElegida.length > 0) {
            console.log("Viendo detalle de la operación "+detalleOperacionId);
            console.log(operacionElegida);
            break;
        } else {
            console.log("El id ingresado es incorrecto. Intente de nuevo.");
            detalleOperacionId = prompt("Ingrese el id_operacion que desea ver en detalle: ");
        }
    }
}



function compartir(deseaCompartir) {
    if (deseaCompartir) {
        console.log("Comprobante enviado de la operación "+detalleOperacionId);
        regresarPantallaPrincipal();
    } else {
        regresarPantallaPrincipal();
    }
}

function regresarPantallaPrincipal() {
    console.log("Regresó a la pantalla principal.");
}