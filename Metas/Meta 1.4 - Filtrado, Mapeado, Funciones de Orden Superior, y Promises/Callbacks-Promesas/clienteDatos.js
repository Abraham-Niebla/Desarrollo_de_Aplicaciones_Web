//INICIAL
/*
const servicio = require("./servicioDatos");

servicio.getDatos(1, 3000);
servicio.getDatos(2, 500);
servicio.getDatos(3, 4000);
servicio.getDatos(4, 700);
servicio.getDatos(5, 3500);
*/

//MODIFICADO (Callbacks)
/*
const servicio = require("./servicioDatos");

servicio.getDatos(1, 3000, function()
{
    servicio.getDatos(2, 500, function()//Callback 1
    {
        servicio.getDatos(3, 4000, function()//Callback 2
        {
            servicio.getDatos(4, 700, function()//Callback 3
            {
                servicio.getDatos(5, 3500, function()//Callback 4
                {
                    console.log('Programa Terminado');//Callback 5
                })
            })
        })
    })
});*/

//MODIFICADO (Promises .than y async/await)
const servicio = require("./servicioDatos");

servicio.getDatos(1, 3000);
servicio.getDatos(2, 500);
servicio.getDatos(3, 4000);
servicio.getDatos(4, 700);
servicio.getDatos(5, 3500);