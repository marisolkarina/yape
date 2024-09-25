const condicionRegistro = confirm("Tiene una cuenta?");
let numeroCelular;
let deseoCodigoVerificacion;
let codigoVerificacion

console.log("Bienvenido al registro.");
Registro(condicionRegistro);

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
    let numeroDNI = prompt("Ingrese su número de DNI: ");
    let correoElectronico = prompt("Ingrese su correo electrónico: ");
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

