const cliente = [
    {
        nombreCompleto: "Marisol Pachauri",
        celular: "99999999",
        tipoCuenta: "DNI"
    },
    {
        nombreCompleto: "Christian Soto",
        celular: "99999998",
        tipoCuenta: "DNI"
    },
    {
        nombreCompleto: "Boris Pichihua",
        celular: "99999997",
        tipoCuenta: "BCP"
    },
    {
        nombreCompleto: "Jean Quico",
        celular: "99999996",
        tipoCuenta: "BCP"
    },
    {
        nombreCompleto: "Alexia Flores",
        celular: "99999995",
        tipoCuenta: "DNI"
    }
]

console.log("Busqueda por nombre")

for (let i=0;i<5;i++) {
    if (cliente[i].nombreCompleto == 'Jean Quico') {
        console.log(cliente[i]);
    }
}

console.log("Solo cuenta DNI: ")

for (let i=0;i<5;i++) {
    if (cliente[i].tipoCuenta == 'DNI') {
        console.log(cliente[i]);
    }
}

//JSON
console.log("JSON");

let clientesJSON = '{"clienteArreglo":['+
'{"nombreCompleto":"Marisol Pachauri",'+
'"celular":"99999999",'+
'"tipoCuenta":"DNI"}, '+

'{"nombreCompleto":"Christian Soto",'+
'"celular":"99999998",'+
'"tipoCuenta":"DNI"}, '+

'{"nombreCompleto":"Boris Pichihua",'+
'"celular":"99999997",'+
'"tipoCuenta":"BCP"}, '+

'{"nombreCompleto":"Jean Quico",'+
'"celular":"99999996",'+
'"tipoCuenta":"BCP"}, '+

'{"nombreCompleto":"Alexia Flores",'+
'"celular":"99999995",'+
'"tipoCuenta":"DNI"} '+

']}';

const arrClienteJson= JSON.parse(clientesJSON);
//un solo obj
console.log(arrClienteJson.clienteArreglo[1].nombreCompleto);

console.log("Recorriendo el arreglo de clientes...")
for(item of arrClienteJson.clienteArreglo){
    console.log(item);
    console.log(item.nombreCompleto);

}

