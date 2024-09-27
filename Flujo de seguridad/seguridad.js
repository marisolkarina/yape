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
let numeroCelular;
let numeroDNI;
let correoElectronico;

login();
function login () {
    numeroCelular = prompt("INICIO DE SESIÓN \nIngresar celular: ");
    const usuarioExistente = verificarUsuario(numeroCelular);

    if (usuarioExistente) {

        do {
            contrasena = prompt("Ingresar contraseña");
            if (usuarioExistente.contrasena === contrasena) {
                console.log("Has iniciado sesión exitosamente. Mostrando interfaz de yape.");
            } else {
                console.log("Contraseña incorrecta.");
                olvidoContrasena = confirm("¿Olvidó contraseña?");
                console.log("Recuperar cuenta");
                recuperarCuenta();
                olvidoContrasena == false;
            }
        } while(olvidoContrasena == false);
            
    } else {
        console.log("El número de celular no está registrado. Por favor, crea una cuenta nueva o corrige el celular ingresado.");
        let deseaRegistrarse = confirm('Desea registrarse?');
        if (deseaRegistrarse) {
            registro();
        } else {
            login();
        }
    }
}

function recuperarCuenta () {
    numeroCelular = prompt("RECUPERACION DE CUENTA\nIngrese celular");
    if (verificarUsuario(numeroCelular)) { 
        deseoCodigoVerificacion = confirm("Solicitar código de verificación");
        enviarCodigoVerificacion(deseoCodigoVerificacion);
        contrasena = prompt("Crear una nueva contraseña de 6 dígitos: ");
        let usuarioHallado = verificarUsuario(numeroCelular);
        //hallo la posicion del usuario que se desea cambiar su contraseña:
        let posicion = arrUsuarios.indexOf(usuarioHallado); 
        arrUsuarios[posicion].contrasena = contrasena;
        console.log("Contraseña actualizada");
        console.log(arrUsuarios[posicion]);
        login();
    } else {
        console.log("La cuenta que intenta recuperar no existe. Vuelva a ingresar celular.");
        recuperarCuenta();
    }
    
}

function enviarCodigoVerificacion(deseoCodigoVerificacion) {
    if (deseoCodigoVerificacion) {
        console.log("Su código de verificación es: ");
        console.log(generarCodigo());
        verificarCodigo();
    } else {
        deseoCodigoVerificacion = confirm("Solicitar código de verificación");
        enviarCodigoVerificacion(deseoCodigoVerificacion);
    }
}

function verificarCodigo() {
    let codigoAVerificar = prompt("Ingresar el código de verificación");
    if (codigoAVerificar == codigoVerificacion) {
        console.log("Código verificado");
    } else {
        verificarCodigo();
    }
}

function registro() {
    while(true) {
        numeroCelular = prompt("REGISTRO\nIngresar celular");
        if (numeroCelular != '') {
            break;
        } else {
            console.log("Debe ingresar un celular.")
        }
    }
    //verificando que el usuario a registrar no exista en la bd
    if (verificarUsuario(numeroCelular)) {
        console.log("El usuario ya existe.");
        login();
    } else {
        deseoCodigoVerificacion = confirm("Solicitar código de verificación");
        enviarCodigoVerificacion(deseoCodigoVerificacion);
        nombreCompleto=prompt("Ingresar nombre completo: ");
        numeroDNI = prompt("Ingresar número de DNI: ");
        correoElectronico = prompt("Ingresar correo electrónico: ");
        contrasena = prompt("Crear contraseña de 6 dígitos: ");
        let confirmoRegistro = confirm("¿Confirma su registro?");
        if (confirmoRegistro) {
            esValidacionExitosa(confirmoRegistro);
        } else {
            login();
        }
    }
    
}

function esValidacionExitosa(registroValidado) {
    if (registroValidado) {
        let nuevoUsuario = new Usuario(nombreCompleto,0,contrasena,numeroCelular,numeroDNI, correoElectronico);
        arrUsuarios.push(nuevoUsuario);
        console.log(arrUsuarios);
        console.log("Nuevo usuario:");
        console.log(nuevoUsuario)
        let deseoIniciarSesion = confirm("¿Desea iniciar sesion?");
        if (deseoIniciarSesion) {
            console.log("Registro exitoso. Inicie Sesión.");
            login();
        } else {
            console.log("Registro exitoso");
        }
        
    }
    else {
        let registroValidado = validacionRegistro();
        esValidacionExitosa(registroValidado);
    }
}

function generarCodigo() {
    codigoVerificacion = Math.floor(100000 + Math.random() * 900000);
    return codigoVerificacion;
}

