//Transferencia de dinero

class Operacion {
    constructor(id_operacion, monto, id_usuario_emisor, id_usuario_receptor, id_cambio, id_moneda, fecha) {
        this.id_operacion = id_operacion;
        this.monto = monto;
        this.id_usuario_emisor = id_usuario_emisor;
        this.id_usuario_receptor = id_usuario_receptor;
        this.id_cambio = id_cambio,
        this.id_moneda = id_moneda;
        this.fecha = fecha;
    }
}

let operaciones = [];
let id_operacion = 0;

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

function buscarUsuario(celular) {
    for (let item of arrUsuarios.usuarioArreglo) {
        if (item.celular == celular) {
            return item;
        }
    }  
    return null;
}

function buscarReceptor() {
    document.getElementById("permitirTransferencia").innerHTML = "";
    
    let celularReceptor = document.getElementById("celularReceptor").value;
    console.log(celularReceptor);
    let origen = buscarUsuario(celularEmisor);

    document.getElementById("receptorEncontrado").innerHTML = "";

    let usuarioEncontrado = buscarUsuario(celularReceptor);
    if ( usuarioEncontrado != null) {
        document.getElementById("mensajeError").innerHTML = "Receptor encontrado con éxito.";
        document.getElementById("receptorEncontrado").innerHTML = "Enviara dinero al usuario " + usuarioEncontrado.nombreCompleto + " de numero " + usuarioEncontrado.celular
        document.getElementById("permitirTransferencia").innerHTML = `<p>Ingrese monto a transferir: <input type="text" id="monto"/></p>
        <p>Tipo de moneda: </p>
        <input type="radio" id="soles" name="moneda" value="1">
        <label for="soles">Soles</label><br>
        <input type="radio" id="dolares" name="moneda" value="2">
        <label for="dolares">Dólares</label><br>
        <p id="mensajeMoneda"></p>
        <p id="mensajeSaldo"></p>
        <p id="saldoNuevo"></p>
        <div id="operacionRealizada"></div>
        <button onClick="ejecutarTransferencia()">Yapear</button>`
    } else {
        document.getElementById("mensajeError").innerHTML = "Receptor no encontrado. Ingrese un número válido.";
    }

}

function ejecutarTransferencia() {
    let celularEmisor = document.getElementById("celularEmisor").value;
    let celularReceptor = document.getElementById("celularReceptor").value;

    let monto = document.getElementById("monto").value;
    let origen = buscarUsuario(celularEmisor);
    let destino = buscarUsuario(celularReceptor);
    // Convertir el monto a un número
    monto = parseFloat(monto);

    enviarDinero(origen, destino, monto);
    
    let nuevoSaldo = "";
    nuevoSaldo = nuevoSaldo + origen.saldo;
    document.getElementById("saldoNuevo").innerHTML = "Saldo actualizado: S/." + nuevoSaldo;
    console.log(operaciones); 
}

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
    {
        id_moneda: 1,
        nombre_moneda: "soles"
    },
    {
        id_moneda: 2,
        nombre_moneda: "dolares"
    }
]

function buscarTipoCambio(fecha) {
    for (let item of arrTipoCambio) {
        // Obtener solo 'YYYY-MM-DD'
        const fechaParam = fecha.toISOString().split('T')[0];
        if (item.fecha === fechaParam) {
            return item;
        }
    }
    return null;
}

function obtenerDatosOperacion(operaciones, destino) {
    let impresion = "";
    for(let item of operaciones){
        if (item.id_moneda == 1) {
            impresion = impresion + "id_operacion: "+item.id_operacion + ", monto: " + item.monto + " , moneda: "+ item.id_moneda +
                        " , receptor: " + destino.nombreCompleto + " , fecha: " + (item.fecha).toISOString().split('T')[0] + "<br>";
        } else {
            impresion = impresion + "id_operacion: "+item.id_operacion + ", monto: " + item.monto + " , moneda: "+ item.id_moneda +
                        " , receptor: " + destino.nombreCompleto + ", valor_cambio: "+ buscarTipoCambio(item.fecha).valor_cambio +
                        " , fecha: " + (item.fecha).toISOString().split('T')[0] + "<br>";
        }
    }
    return impresion
}

function enviarDinero(origen, destino, monto) {

    let moneda = document.querySelector('input[name="moneda"]:checked');
    console.log(origen);
    console.log(destino);
    // console.log(monto);
    // console.log(moneda);

    const cambioASoles = (fecha, dolar) => buscarTipoCambio(fecha).valor_cambio*dolar;
    
    document.getElementById("mensajeMoneda").innerHTML = "";
    document.getElementById("mensajeSaldo").innerHTML = "";
    
    let fechaActual = new Date();
    // Verificar que el monto sea válido
    if (isNaN(monto) || monto <= 0) {
        document.getElementById("mensajeSaldo").innerHTML = "Debe ingresar un monto válido.";
        return; 
    }
    // Verificar que seleccionó una moneda
    if (!moneda) { //moneda==null
        document.getElementById("mensajeMoneda").innerHTML = "Debe seleccionar un tipo de moneda.";
        return;
    }
    
    if (moneda.value === "1") {
            
        document.getElementById("mensajeMoneda").innerHTML = "Moneda: "+moneda.value;
        console.log(moneda.value); // 1(soles)

            if (origen.saldo >= monto) {
            origen.saldo -= monto;
            destino.saldo += monto;

            console.log("\nScripts para actualizar saldos:");
            let sqlUpdate1 = "UPDATE bdyape.usuario set saldo = "+origen.saldo+
                            " where id_usuario = "+origen.id_usuario;
            console.log(sqlUpdate1)
            let sqlUpdate2 = "UPDATE bdyape.usuario set saldo = "+destino.saldo+
                            " where id_usuario = "+destino.id_usuario;
            console.log(sqlUpdate2)

            id_operacion++;
            operaciones.push(new Operacion(id_operacion, monto, origen.id_usuario, destino.id_usuario, null, 1, fechaActual));
            let sqlInsertOperacion = "INSERT INTO operacion (id_operacion, monto, id_moneda, id_usuario_emisor, id_usuario_receptor, id_cambio, fecha)"+
            "VALUES ("+id_operacion+", "+monto+", "+ moneda.value +", "+ origen.id_usuario +", "+ destino.id_usuario + ", " + 
            buscarTipoCambio(fechaActual).id_tipo_cambio + ", NOW());"
            console.log("\nScript para insertar nueva operacion");
            console.log(sqlInsertOperacion);

            document.getElementById("mensajeSaldo").innerHTML = "Ha yapeado exitosamente.";
            document.getElementById("operacionRealizada").innerHTML = obtenerDatosOperacion(operaciones, destino);
            let sqlSelectDatosOperacion = "SELECT u.id_usuario, u.nombre, o.id_operacion, o.monto, o.id_moneda, u2.nombre as receptor, o.fecha" +
                " from bdyape.usuario u "+
                "\nleft join bdyape.operacion o on u.id_usuario = o.id_usuario_emisor"+
                "\nleft join bdyape.usuario u2 on u2.id_usuario = o.id_usuario_receptor"+ 
                "\nwhere u.id_usuario = "+ origen.id_usuario;
            console.log("\nScript para ver operacion realizada (solo como emisor)");
            console.log(sqlSelectDatosOperacion);
                    
        } else {
            document.getElementById("mensajeSaldo").innerHTML = "Saldo insuficiente. Necesita recargar.";
        }
            
    } else {
        document.getElementById("mensajeMoneda").innerHTML = "Moneda: "+moneda.value;
        console.log(moneda.value); // 2(dolares)

        let montoSoles = cambioASoles(fechaActual, monto);
        console.log(montoSoles)
        if (origen.saldo >= montoSoles) {
                origen.saldo -= montoSoles;
                destino.saldo += montoSoles;
    
            id_operacion++;
            operaciones.push(new Operacion(id_operacion, monto, origen.id_usuario, destino.id_usuario, buscarTipoCambio(fechaActual).id_tipo_cambio, 2, fechaActual));
            let sqlInsertOperacion = "INSERT INTO operacion (id_operacion, monto, id_moneda, id_usuario_emisor, id_usuario_receptor, id_cambio, fecha)"+
            "VALUES ("+id_operacion+", "+monto+", "+ moneda.value +", "+"origen.id_usuario" +", "+ destino.id_usuario + ", " + 
            buscarTipoCambio(fechaActual).id_tipo_cambio + ", NOW());"
            console.log("Script para insertar nueva operacion");
            console.log(sqlInsertOperacion);

            document.getElementById("mensajeSaldo").innerHTML = "Ha yapeado exitosamente.";
            document.getElementById("operacionRealizada").innerHTML = obtenerDatosOperacion(operaciones, destino);
            let sqlSelectDatosOperacion = "SELECT u.id_usuario, u.nombre, o.id_operacion, o.monto, o.id_moneda, u2.nombre as receptor, o.fecha" +
                " from bdyape.usuario u "+
                "\nleft join bdyape.operacion o on u.id_usuario = o.id_usuario_emisor"+
                "\nleft join bdyape.usuario u2 on u2.id_usuario = o.id_usuario_receptor"+ 
                "\nwhere u.id_usuario = "+ origen.id_usuario;
            console.log("\nScript para ver operacion realizada (solo como emisor)");
            console.log(sqlSelectDatosOperacion);

        } else {
            document.getElementById("mensajeSaldo").innerHTML = "Saldo insuficiente. Necesita recargar.";
        }
    }

    console.log(origen);
    console.log(destino);
}
