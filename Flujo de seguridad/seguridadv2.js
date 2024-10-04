class Usuario {
    constructor(nombreCompleto, saldo, contrasena, celular, dni, correo) {
        this.nombreCompleto = nombreCompleto;
        this.saldo = saldo;
        this.contrasena = contrasena;
        this.celular = celular;
        this.dni = dni;
        this.correo = correo;
    }
}

// JSON de usuarios

let usuariosJson = '{"usuarioArreglo":[' +
'{"nombreCompleto":"Marisol Pachauri",' +
'"saldo": 100,' +
'"contrasena": "000001",' +
'"celular":"999999999",' +
'"dni": "11111111",' +
'"correo": "mp@mail.com"},' +
'{"nombreCompleto":"Christian Soto",' +
'"saldo": 100,' +
'"contrasena": "000002",' +
'"celular":"999999998",' +
'"dni": "11111112",' +
'"correo": "cs@mail.com"},' +
'{"nombreCompleto":"Boris Pichihua",' +
'"saldo": 100,' +
'"contrasena": "000003",' +
'"celular":"999999997",' +
'"dni": "11111113",' +
'"correo": "bp@mail.com"},' +
'{"nombreCompleto":"Jean Quico",' +
'"saldo": 100,' +
'"contrasena": "000004",' +
'"celular":"999999996",' +
'"dni": "11111113",' +
'"correo": "jq@mail.com"},' +
'{"nombreCompleto":"Alexia Flores",' +
'"saldo": 100,' +
'"contrasena": "000005",' +
'"celular":"977941222",' +
'"dni": "11111114",' +
'"correo": "af@mail.com"}' +
']}';


let arrUsuarios = JSON.parse(usuariosJson).usuarioArreglo;

function verificarUsuario(celular) {
    return arrUsuarios.find(usuario => usuario.celular === celular);
}

let nombreCompleto;
let contrasena;
let olvidoContrasena;
let deseoCodigoVerificacion;
let codigoVerificacion;
let codigoVerificado = false;
let codigoVerificadoRegistro = false;
let numeroCelular;
let numeroCelularRecuperar;
let numeroCelularRegistro;
let numeroDNI;
let correoElectronico;


function ingresar() {
    numeroCelular = document.getElementById("numeroCelular").value;
    contrasena = document.getElementById("contrasena").value;
    //console.log(numeroCelular);
    const usuarioExistente = verificarUsuario(numeroCelular);

    if (usuarioExistente) {
        do {
            if (usuarioExistente.contrasena === contrasena) {
                document.getElementById("mensajeErrorIngreso").innerHTML = "Has iniciado sesión exitosamente. Mostrando interfaz de yape.";
                let sqlSelectUsuario = "SELECT id_usuario, nombre, celular, contrasenia, correo, dni, saldo from bdyape.usuario"+
                    "\nWHERE u.celular = \"" + usuarioExistente.celular + "\";";
                console.log(sqlSelectUsuario);
            } else {
                document.getElementById("mensajeErrorIngreso").innerHTML = "Contraseña incorrecta. Si olvido su contraseña, puede recuperarla.";
            }
        } while(olvidoContrasena == false);
    }
    else
    {
        document.getElementById("mensajeErrorIngreso").innerHTML = "El número de celular no está registrado. Por favor, crea una cuenta nueva o corrige el celular ingresado.";
    }
}

function solicitarCodigoVerificacionRecuperar() {
    numeroCelularRecuperar = document.getElementById("numeroCelularRecuperar").value;
    //console.log(numeroCelularRecuperar);
    if (verificarUsuario(numeroCelularRecuperar)) {
        deseoCodigoVerificacion = true;
        enviarCodigoVerificacion(deseoCodigoVerificacion);
        document.getElementById("mensajeErrorSolicito").innerHTML = "Se ha enviado el código de verificación.";    
    }
    else {
        document.getElementById("mensajeErrorSolicito").innerHTML = "La cuenta que intenta recuperar no existe. Vuelva a ingresar celular.";    
    }
}

function enviarCodigoVerificacion(deseoCodigoVerificacion) {
    if (deseoCodigoVerificacion) {
        console.log("Su código de verificación es: ");
        console.log(generarCodigo());
    }
}

function verificarCodigo() {
    let codigoAVerificar = document.getElementById("codigoAVerificar").value;
    if (codigoAVerificar == codigoVerificacion) {
        document.getElementById("mensajeErrorCodigo").innerHTML = "Código verificado. Ingrese su contraseña nueva.";
        codigoVerificado = true;  
    } 
    else {
        document.getElementById("mensajeErrorCodigo").innerHTML = "Código erróneo.";
        codigoVerificado = false; 
    }
}

function actualizarContrasena() {
    if (codigoVerificado) {
        let nuevaContrasena = document.getElementById("nuevaContrasena").value;
        let usuarioHallado = verificarUsuario(numeroCelularRecuperar);
        let posicion = arrUsuarios.indexOf(usuarioHallado);
        arrUsuarios[posicion].contrasena = nuevaContrasena;
        document.getElementById("mensajeErrorContrasena").innerHTML = "Contraseña actualizada. Inicie sesión.";
        let sqlActualizarContrasena = "UPDATE bdyape.usuario u" +
        "\nSET u.contrasenia = \"" + usuarioHallado.contrasena + "\"" +
        "\nWHERE u.celular = \"" + usuarioHallado.celular + "\";";
        console.log(sqlActualizarContrasena);
    }
    else {
        document.getElementById("mensajeErrorContrasena").innerHTML = "Solicite el código de verificación o ingrese el código correcto.";
    }

}

function solicitarCodigoVerificacionRegistro() {
    numeroCelularRegistro = document.getElementById("numeroCelularRegistro").value;
    if (numeroCelularRegistro != '') {
        if (!verificarUsuario(numeroCelularRegistro)) {
            deseoCodigoVerificacion = true;
            enviarCodigoVerificacion(deseoCodigoVerificacion);
            document.getElementById("mensajeErrorVerificarUsuario").innerHTML = "Se ha enviado el código de verificación."
        }
        else {
            document.getElementById("mensajeErrorVerificarUsuario").innerHTML = "El usuario de este número ya existe. Ingrese o recupere su cuenta.";
        }
    }
    else {
        document.getElementById("mensajeErrorVerificarUsuario").innerHTML = "Debe ingresar un número de celular."; 
    }
}

function verificarCodigoRegistro() {
    let codigoAVerificar = document.getElementById("codigoAVerificarRegistro").value;
    if (codigoAVerificar == codigoVerificacion) {
        document.getElementById("mensajeErrorCodigoRegistro").innerHTML = "Código verificado. Ingrese sus datos.";
        codigoVerificadoRegistro = true;  
    } 
    else {
        document.getElementById("mensajeErrorCodigoRegistro").innerHTML = "Código erróneo.";
        codigoVerificadoRegistro = false; 
    }
}

function confirmarRegistro() {
    if (codigoVerificadoRegistro) {
        let nombreCompletoRegistro = document.getElementById("nombreCompletoRegistro").value;
        let numeroDNIRegistro = document.getElementById("numeroDNIRegistro").value;
        let correoElectronicoRegistro = document.getElementById("correoElectronicoRegistro").value;
        let contrasenaRegistro = document.getElementById("contrasenaRegistro").value;
        let saldoRegistro = 0;
        agregarUsuario(nombreCompletoRegistro, saldoRegistro, contrasenaRegistro, numeroCelularRegistro, numeroDNIRegistro, correoElectronicoRegistro);
        document.getElementById("mensajeErrorConfirmarRegistro").innerHTML = "Registro exitoso. Puede iniciar sesión.";
    }
    else {
        document.getElementById("mensajeErrorConfirmarRegistro").innerHTML = "Solicite el código de verificación o ingrese el código correcto.";
    }

}

function agregarUsuario(nombreCompletoRegistro, saldoRegistro, contrasenaRegistro, numeroCelularRegistro, numeroDNIRegistro, correoElectronicoRegistro)
{
    let nuevoUsuario = new Usuario(nombreCompletoRegistro, saldoRegistro ,contrasenaRegistro, numeroCelularRegistro, numeroDNIRegistro, correoElectronicoRegistro);
    arrUsuarios.push(nuevoUsuario);
    //console.log(arrUsuarios);
    let sqlNuevoUsuario = "INSERT INTO bdyape.usuario(nombre, contrasenia, correo, dni, celular, saldo)" + 
    "\nVALUES (\"" + nombreCompletoRegistro + "\", \"" + contrasenaRegistro + "\", \"" + correoElectronicoRegistro +
    "\", \"" + numeroDNIRegistro + "\", \"" + numeroCelularRegistro + "\", " + saldoRegistro + ");";
    console.log(sqlNuevoUsuario);
}


function generarCodigo() {
    codigoVerificacion = Math.floor(100000 + Math.random() * 900000);
    return codigoVerificacion;
}

