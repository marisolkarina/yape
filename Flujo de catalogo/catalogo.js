// Función para simular el proceso de ver movimientos
function verMovimientos(verTodo, detalleMovimiento = null) {
    if (verTodo) {
        console.log("Mostrando todos los movimientos.");
        verDetalleMovimiento(detalleMovimiento);
    } else {
        console.log("Eligiendo tipo de filtro por período.");
        elegirFiltro();
    }
}

// Función para simular la visualización del detalle del movimiento
function verDetalleMovimiento(detalleMovimiento) {
    if (detalleMovimiento) {
        console.log("Viendo detalle del movimiento: "+detalleMovimiento);
        preguntarCompartir(true);
    } else {
        console.log("No se especificó un movimiento detallado.");
        regresarPantallaPrincipal();
    }
}

// Función para preguntar si se desea compartir el comprobante o historial
function preguntarCompartir(esHistorial) {
    let deseaCompartir = confirm("¿Deseas compartir?"); // Simula la pregunta
    if (deseaCompartir) {
        if (esHistorial) {
            enviarHistorial();
        } else {
            enviarComprobante();
        }
    } else {
        regresarPantallaPrincipal();
    }
}

// Función para elegir el filtro por período
function elegirFiltro() {
    console.log("Seleccionando el filtro de movimientos por período.");
    preguntarCompartir(true); // Después de filtrar, preguntar si quiere compartir el historial
}

// Función para enviar el historial
function enviarHistorial() {
    console.log("Enviando historial de movimientos.");
    // Aquí podrías integrar un sistema de envío real de historial
    finalizarProceso();
}

// Función para enviar el comprobante del movimiento
function enviarComprobante() {
    console.log("Enviando comprobante del movimiento.");
    // Aquí podrías integrar un sistema de envío real de comprobantes
    finalizarProceso();
}

// Función para regresar a la pantalla principal
function regresarPantallaPrincipal() {
    console.log("Regresando a la pantalla principal.");
    finalizarProceso();
}

// Función para finalizar el proceso
function finalizarProceso() {
    console.log("Proceso finalizado.");
}

// Ejemplo de uso:

// Ver todos los movimientos y el detalle de un movimiento específico
verMovimientos(true, "Compra en tienda X");

// Filtrar por período y compartir el historial
verMovimientos(false);