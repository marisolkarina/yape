let usuariosJson = '{"usuarioArreglo":[' +
'{"id_usuario": 1,'+
'"nombreCompleto":"Marisol Pachauri",' +
'"saldo": 100,' +
'"celular":"999999999"},' +

'{"id_usuario": 2,'+
'"nombreCompleto":"Christian Soto",' +
'"saldo": 100,' +
'"celular":"999999998"},' +

'{"id_usuario": 3,'+
'"nombreCompleto":"Boris Pichihua",' +
'"saldo": 100,' +
'"celular":"999999997"},' +

'{"id_usuario": 4,'+
'"nombreCompleto":"Jean Quico",' +
'"saldo": 100,' +
'"celular":"999999996"},' +

'{"id_usuario": 5,'+
'"nombreCompleto":"Alexia Flores",' +
'"saldo": 100,' +
'"celular":"999999995"}' +

']}';

const arrUsuarios = JSON.parse(usuariosJson);
function buscarUsuarioPorCelular(celular) {
    for (let item of arrUsuarios.usuarioArreglo) {
        if (item.celular == celular) {
            return item;
        }
    }  
    return null;
}
function buscarUsuarioPorId(id) {
    for (let item of arrUsuarios.usuarioArreglo) {
        if (item.id_usuario == id) {
            return item;
        }
    }  
    return null;
}

const operaciones = [
    {
        id_operacion: 1,
        monto: 50,
        id_usuario_emisor: 1,
        id_usuario_receptor: 3,
        id_cambio: 0,
        id_moneda: 1,
        fecha: "2024-09-24"
    },
    {
        id_operacion: 2,
        monto: 30,
        id_usuario_emisor: 2,
        id_usuario_receptor: 4,
        id_cambio: 0,
        id_moneda: 1,
        fecha: "2024-07-20"
    },
    {
        id_operacion: 3,
        monto: 20,
        id_usuario_emisor: 2,
        id_usuario_receptor: 1,
        id_cambio: 0,
        id_moneda: 2,
        fecha: "2024-10-02",
    },
    {
        id_operacion: 4,
        monto: 30,
        id_usuario_emisor: 5,
        id_usuario_receptor: 4,
        id_cambio: 1,
        id_moneda: 2,
        fecha: "2024-10-01",
    },
    {
        id_operacion: 5,
        monto: 30,
        id_usuario_emisor: 2,
        id_usuario_receptor: 1,
        id_cambio: null,
        id_moneda: 1,
        fecha: "2024-09-03"
    },
    {
        id_operacion: 6,
        monto: 80,
        id_usuario_emisor: 1,
        id_usuario_receptor: 4,
        id_cambio: 0,
        id_moneda: 1,
        fecha: "2024-03-23"
    }
];

const arrTipoCambio = [
    { id_tipo_cambio: 1, fecha: "2024-10-01", valor_cambio: 3.68 },
    { id_tipo_cambio: 2, fecha: "2024-10-02", valor_cambio: 3.69 },
    { id_tipo_cambio: 3, fecha: "2024-10-03", valor_cambio: 3.70 },
    { id_tipo_cambio: 4, fecha: "2024-10-04", valor_cambio: 3.71 },
    { id_tipo_cambio: 5, fecha: "2024-10-05", valor_cambio: 3.72 },
    { id_tipo_cambio: 6, fecha: "2024-10-06", valor_cambio: 3.73 },
    { id_tipo_cambio: 7, fecha: "2024-10-07", valor_cambio: 3.74 },
    { id_tipo_cambio: 8, fecha: "2024-10-08", valor_cambio: 3.75 },
    { id_tipo_cambio: 9, fecha: "2024-10-09", valor_cambio: 3.76 },
    { id_tipo_cambio: 10, fecha: "2024-10-10", valor_cambio: 3.77 },
    { id_tipo_cambio: 11, fecha: "2024-10-11", valor_cambio: 3.78 },
    { id_tipo_cambio: 12, fecha: "2024-10-12", valor_cambio: 3.79 },
    { id_tipo_cambio: 13, fecha: "2024-10-13", valor_cambio: 3.80 },
    { id_tipo_cambio: 14, fecha: "2024-10-14", valor_cambio: 3.81 },
    { id_tipo_cambio: 15, fecha: "2024-10-15", valor_cambio: 3.82 },
    { id_tipo_cambio: 16, fecha: "2024-10-16", valor_cambio: 3.83 },
    { id_tipo_cambio: 17, fecha: "2024-10-17", valor_cambio: 3.84 },
    { id_tipo_cambio: 18, fecha: "2024-10-18", valor_cambio: 3.85 },
    { id_tipo_cambio: 19, fecha: "2024-10-19", valor_cambio: 3.86 },
    { id_tipo_cambio: 20, fecha: "2024-10-20", valor_cambio: 3.87 },
    { id_tipo_cambio: 21, fecha: "2024-10-21", valor_cambio: 3.88 },
    { id_tipo_cambio: 22, fecha: "2024-10-22", valor_cambio: 3.89 },
    { id_tipo_cambio: 23, fecha: "2024-10-23", valor_cambio: 3.90 },
    { id_tipo_cambio: 24, fecha: "2024-10-24", valor_cambio: 3.91 },
    { id_tipo_cambio: 25, fecha: "2024-10-25", valor_cambio: 3.92 },
    { id_tipo_cambio: 26, fecha: "2024-10-26", valor_cambio: 3.93 },
    { id_tipo_cambio: 27, fecha: "2024-10-27", valor_cambio: 3.94 },
    { id_tipo_cambio: 28, fecha: "2024-10-28", valor_cambio: 3.95 },
    { id_tipo_cambio: 29, fecha: "2024-10-29", valor_cambio: 3.96 },
    { id_tipo_cambio: 30, fecha: "2024-10-30", valor_cambio: 3.97 },
    { id_tipo_cambio: 31, fecha: "2024-10-31", valor_cambio: 3.98 }
]

const tipo_moneda = [
    { id_moneda: 1, nombre_moneda: "soles" },
    { id_moneda: 2, nombre_moneda: "dolares" }
]



let operacionesDelUsuario;
let operacionesFiltradasDelUsuario;

function mostrarOperaciones() {
    document.getElementById("operacionesFiltradas").innerHTML = "";
    document.getElementById("mensajeDetalle").innerHTML = "";
    document.getElementById("operacionDetallada").innerHTML = "";
    document.getElementById("compartir").innerHTML = "";

    let numeroCelular = document.getElementById("celularEmisor").value;
    let usuarioLogueado = buscarUsuarioPorCelular(numeroCelular);

    operacionesDelUsuario = operaciones.filter(op => 
        ((op.id_usuario_emisor==usuarioLogueado.id_usuario) || (op.id_usuario_receptor==usuarioLogueado.id_usuario))
    );

    console.log("Operaciones realizadas del usuario "+numeroCelular+":");
    if (operacionesDelUsuario.length == 0) {
        console.log('No hay operaciones registradas');
        document.getElementById("operacionesRegistradas").innerHTML = "<p>No hay operaciones registradas.</p>";
    } else {
        let impresionOperaciones = "";
        operacionesDelUsuario.forEach(op => {
            if (usuarioLogueado.id_usuario == op.id_usuario_emisor) {

                let usuarioDestino = buscarUsuarioPorId(op.id_usuario_receptor);

                impresionOperaciones = impresionOperaciones + "<p>id_operacion: "+op.id_operacion+", monto: -"+op.monto+
                ", id_moneda: "+ op.id_moneda + ", receptor: "+usuarioDestino.nombreCompleto+", fecha: "+op.fecha+
                " <button onClick='verDetalleMovimiento("+op.id_operacion+")'>Ver detalle</button> </p>";    
            } else {

                let usuarioOrigen = buscarUsuarioPorId(op.id_usuario_emisor);

                impresionOperaciones = impresionOperaciones + "<p>id_operacion: "+op.id_operacion+", monto: +"+op.monto+
                ", id_moneda: "+ op.id_moneda + ", emisor: "+usuarioOrigen.nombreCompleto+", fecha: "+op.fecha+
                " <button onClick='verDetalleMovimiento("+op.id_operacion+")'>Ver detalle</button> </p>";            
            }
        });
        console.log(operacionesDelUsuario);

        document.getElementById("operacionesRegistradas").innerHTML = impresionOperaciones;
    }

}


function obtenerOperacionesPorFiltro() {
    document.getElementById("mensajeDetalle").innerHTML = "";
    document.getElementById("operacionDetallada").innerHTML = "";
    document.getElementById("compartir").innerHTML = "";

    let dias=0;
    let filtroSeleccionado = filtro.value; //opcion 1, 2, 3, 4
    switch(filtroSeleccionado) {
        case "1": dias=7; break;
        case "2": dias=15; break;
        case "3": dias=30; break;
        case "4": dias=90; break;
        default: console.log("Filtro inválido."); break;
    }

    let fechaActual = new Date();
    let fechaLimite = restarDias(fechaActual, dias);
    operacionesFiltradasDelUsuario = operacionesDelUsuario.filter(op => new Date(op.fecha) >= fechaLimite);
    let numeroCelular = document.getElementById("celularEmisor").value;
    let usuarioLogueado = buscarUsuarioPorCelular(numeroCelular);

    if (operacionesFiltradasDelUsuario.length != 0) {

        let impresionOperacionesFiltradas = "";
        operacionesFiltradasDelUsuario.forEach(op => {
            if (usuarioLogueado.id_usuario == op.id_usuario_emisor) {

                let usuarioDestino = buscarUsuarioPorId(op.id_usuario_receptor);

                impresionOperacionesFiltradas = impresionOperacionesFiltradas + "<p>id_operacion: "+op.id_operacion+
                ", monto: -"+op.monto+ ", id_moneda: "+ op.id_moneda + ", receptor: "+usuarioDestino.nombreCompleto+", fecha: "+op.fecha+
                " <button onClick='verDetalleMovimiento("+op.id_operacion+")'>Ver detalle</button> </p>";
            } else {

                let usuarioOrigen = buscarUsuarioPorId(op.id_usuario_emisor);

                impresionOperacionesFiltradas = impresionOperacionesFiltradas + "<p>id_operacion: "+op.id_operacion+
                ", monto: +"+op.monto+ ", id_moneda: "+ op.id_moneda +", emisor: "+usuarioOrigen.nombreCompleto+", fecha: "+op.fecha+
                " <button onClick='verDetalleMovimiento("+op.id_operacion+")'>Ver detalle</button> </p>";
            }
        });

        document.getElementById("operacionesFiltradas").innerHTML = impresionOperacionesFiltradas;

    } else {
        document.getElementById("mensajeDetalle").innerHTML = "";
        document.getElementById("operacionDetallada").innerHTML = "";
        document.getElementById("operacionesFiltradas").innerHTML = "No hay operaciones en los últimos "+dias+" dias";
    }

}

let filtro = document.getElementById("filtro");
filtro.addEventListener("change", obtenerOperacionesPorFiltro);


function restarDias(fechaActual, dias) {
    let fecha = new Date(fechaActual);
    fecha.setDate(fecha.getDate() - dias);
    return fecha;
}

function verDetalleMovimiento(detalleOperacionId) {
    document.getElementById("compartir").innerHTML = "";
    let numeroCelular = document.getElementById("celularEmisor").value;
    let usuarioLogueado = buscarUsuarioPorCelular(numeroCelular);

    let operacionElegida;
    
    operacionElegida = operacionesDelUsuario.filter(op => op.id_operacion == detalleOperacionId);
    document.getElementById("mensajeDetalle").innerHTML = "<strong>Viendo detalle de la operacion "+detalleOperacionId+"</strong>";
    let impresionDetalle = "";
    operacionElegida.forEach(op => {
        let tipoCambio = arrTipoCambio.find(tc => tc.fecha === op.fecha);
        let valorCambio = tipoCambio ? tipoCambio.valor_cambio : null;

        if (usuarioLogueado.id_usuario == op.id_usuario_emisor) {
            
            let usuarioDestino = buscarUsuarioPorId(op.id_usuario_receptor);

            if (op.id_moneda == 1) {
                impresionDetalle = impresionDetalle + `<tr><td>ID:</td><td>${op.id_operacion}</td></tr>
                <tr><td>Yapeaste un monto de:</td><td>${op.monto}</td></tr>
                <tr><td>Moneda:</td><td>Soles</td></tr>
                <tr><td>ID receptor:</td><td>${op.id_usuario_receptor}</td></tr>
                <tr><td>Celular receptor:</td><td>${usuarioDestino.celular}</td></tr>
                <tr><td>Nombre receptor:</td><td>${usuarioDestino.nombreCompleto}</td></tr>
                <tr><td>Fecha:</td><td>${op.fecha}</td></tr>
                <tr><td colspan="2"><button onClick='compartir(${op.id_operacion})'>Compartir</button></td></tr>`;
            } else {
                
                
                impresionDetalle = impresionDetalle + `<tr><td>ID:</td><td>${op.id_operacion}</td></tr>
                <tr><td>Yapeaste un monto de:</td><td>${op.monto}</td></tr>
                <tr><td>Moneda:</td><td>Dolares</td></tr>
                <tr><td>Valor de cambio:</td><td>${valorCambio}</td></tr>
                <tr><td>ID receptor:</td><td>${op.id_usuario_receptor}</td></tr>
                <tr><td>Celular receptor:</td><td>${usuarioDestino.celular}</td></tr>
                <tr><td>Nombre receptor:</td><td>${usuarioDestino.nombreCompleto}</td></tr>
                <tr><td>Fecha:</td><td>${op.fecha}</td></tr>
                <tr><td colspan="2"><button onClick='compartir(${op.id_operacion})'>Compartir</button></td></tr>`;
            }

            
        } else {

            let usuarioOrigen = buscarUsuarioPorId(op.id_usuario_emisor);

            if (op.id_moneda == 1) {
                impresionDetalle = impresionDetalle + `<tr><td>ID:</td><td>${op.id_operacion}</td></tr>
                <tr><td>Te yapearon un monto de:</td><td>${op.monto}</td></tr>
                <tr><td>Moneda:</td><td>Dolares</td></tr>
                <tr><td>ID emisor:</td><td>${op.id_usuario_emisor}</td></tr>
                <tr><td>Celular emisor:</td><td>${usuarioOrigen.celular}</td></tr>
                <tr><td>Nombre emisor:</td><td>${usuarioOrigen.nombreCompleto}</td></tr>
                <tr><td>Fecha:</td><td>${op.fecha}</td></tr>
                <tr><td colspan="2"><button onClick='compartir(${op.id_operacion})'>Compartir</button></td></tr>`;
            } else {
                impresionDetalle = impresionDetalle + `<tr><td>ID:</td><td>${op.id_operacion}</td></tr>
                <tr><td>Te yapearon un monto de:</td><td>${op.monto}</td></tr>
                <tr><td>Moneda:</td><td>Dolares</td></tr>
                <tr><td>Valor de cambio:</td><td>${valorCambio}</td></tr>
                <tr><td>ID emisor:</td><td>${op.id_usuario_emisor}</td></tr>
                <tr><td>Celular emisor:</td><td>${usuarioOrigen.celular}</td></tr>
                <tr><td>Nombre emisor:</td><td>${usuarioOrigen.nombreCompleto}</td></tr>
                <tr><td>Fecha:</td><td>${op.fecha}</td></tr>
                <tr><td colspan="2"><button onClick='compartir(${op.id_operacion})'>Compartir</button></td></tr>`;
            }
        }
    });
    document.getElementById("operacionDetallada").innerHTML = impresionDetalle;

}

function compartir(idOperacion) {
    document.getElementById("compartir").innerHTML = "Comprobante "+idOperacion+" enviado";
}