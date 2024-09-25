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


// document.getElementById("loginForm").addEventListener("submit", function(event) {
    // event.preventDefault(); 


    // const celular = document.getElementById("celular").value;
    let nombreCompleto;
    let numeroCelular = prompt("Ingrese celular");
    let deseoCodigoVerificacion;
    let codigoVerificacion;
    // const contrasena = document.getElementById("contrasena").value;
    let contrasena = prompt("Ingrese contraseña");
    // const mensajeDiv = document.getElementById("mensaje");

    const usuarioExistente = verificarUsuario(numeroCelular);

    if (usuarioExistente) {

        if (usuarioExistente.contrasena === contrasena) {
            // mensajeDiv.innerHTML = Bienvenido ${usuarioExistente.nombreCompleto}, has iniciado sesión exitosamente.;
            console.log("has iniciado sesión exitosamente");
        } else {
            // mensajeDiv.innerHTML = "Contraseña incorrecta.";
            console.log("Contraseña incorrecta.");
        }
    } else {

        // mensajeDiv.innerHTML = "El número de celular no está registrado. Por favor, crea una cuenta nueva.";
        console.log("El número de celular no está registrado. Por favor, crea una cuenta nueva.");
        console.log("Bienvenido al registro.");
        Registro();
    }
// });
/**/


// const condicionRegistro = confirm("Tiene una cuenta?");
// let numeroCelular;
// let deseoCodigoVerificacion;
// let codigoVerificacion

// console.log("Bienvenido al registro.");
// Registro(condicionRegistro);

function Registro(condicionRegistro)
{
    if (condicionRegistro)
    {
        console.log("Bienvenido. Inicie Sesión");
        return;
    }
    else
    {
        numeroCelular = prompt("Ingrese el número de celular");
        deseoCodigoVerificacion = confirm("Enviar código de verificación");
        enviarCodigoVerificacion(deseoCodigoVerificacion); 
    }
}

function enviarCodigoVerificacion(deseoCodigoVerificacion)
{
    if (deseoCodigoVerificacion)
    {
        console.log("Su código de verificación es: ");
        console.log(generarCodigo());
        verificarCodigo();
    }
    else
    {
        deseoCodigoVerificacion = confirm("Enviar código de verificación");
        enviarCodigoVerificacion(deseoCodigoVerificacion);
    }
}

function verificarCodigo()
{
    let codigoAVerificar = prompt("Ingrese el código de verificación");
    if (codigoAVerificar == codigoVerificacion)
    {
        console.log("Código verificado");
        ingresarDatos();
    }
    else
    {
        verificarCodigo();
    }
}

function ingresarDatos()
{
    nombreCompleto=prompt("Ingrese nombre completo: ");
    let numeroDNI = prompt("Ingrese su número de DNI: ");
    
    let correoElectronico = prompt("Ingrese su correo electrónico: ");
    contrasena = prompt("Cree contraseña");
    let registroValidado = validacionRegistro();
    esValidacionExitosa(registroValidado);
}

function validacionRegistro()
{
    let deseoRegistro = confirm("Desea registrarse con DNI?");
    let respondioBien = confirm("Respondio bien a las preguntas de seguridad?");
    return respondioBien;
}

function esValidacionExitosa(registroValidado)
{
    if (registroValidado)
        {
            arrUsuarios.push(new Usuario(nombreCompleto,0,contrasena,numeroCelular));
            console.log(arrUsuarios);
            console.log("Bienvenido. Inicie Sesión");
        }
        else
        {
            let registroValidado = validacionRegistro();
            esValidacionExitosa(registroValidado);
        }
}




function generarCodigo()
{
    codigoVerificacion = Math.floor(100000 + Math.random() * 900000);
    return codigoVerificacion;
}

