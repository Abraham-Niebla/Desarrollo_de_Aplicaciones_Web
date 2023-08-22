var instrucciones =[
["var a=5;", "var b=8;", "var c=a+b;","document.write('5+8');", "document.write(c);"],
["var l=prompt('Ingrese un lado de un cuadrado',1);", "var area=l*l;", "document.write('area = ' + area);"],
["var nombre = prompt('¿Quién eres?','');", "document.write('Hola ' + nombre);"],
["var nombre=prompt('Escribe tu nombre (Solo uno)','');", "var apellido=prompt('Escribe tu apellido (Solo uno)','');", "nombre.toLowerCase();", "apellido.toLowerCase();", "document.write('Tu correo será:');", "document.write(apellido+'.'+nombre+'@uabc.edu.mx');"],
["var dado=Math.round(Math. random()*6);", "document.write('Valor del dado: '+dado);"],
["var tiempo=Math.round(Math. random()*60);", "var formato=['s','hrs'];, f=Math.round(Math. random()*1);", "document.write('Tienes ' + tiempo + ' ' + formato[f]);"]];


var noProcesos = prompt("Ingresa el número de procesos: ", 1); //Solicitud de número de procesos
let procesos=[]; //Creación de arreglo de procesos
inicializar(noProcesos, procesos);
var m = inclusionCodigo(noProcesos, procesos);
simulacion(noProcesos, procesos, m);

//Asignación del código a los procesos
function inclusionCodigo(noProcesos, procesos)
{
    var max = 0;
    for(var i = 0;i < noProcesos; i++)
    {
        procesos[i].codigo = instrucciones[Math.round(Math. random()*(instrucciones.length-1))];
        if (procesos[i].codigo.length > max)
            max = procesos[i].codigo.length;
    }
    return max;
}

//Inicialización de los procesos
function inicializar(noProcesos, procesos)
{
    for(var i = 0;i < noProcesos; i++)
    {
        procesos[i] = {id: i+1};
    }
}

//La simulación del Round Robin
function simulacion(noProcesos, procesos, m)
{
    for(var i = 0; i < m; i++)//For para las instrucciones
    {
        for(var p = 0; p < noProcesos; p++)//For para procesos
        {
            document.write("<b>Proceso " + procesos[p].id + "<br></b>");
            if (i < procesos[p].codigo.length)
            {
                document.write("<font color='008080'>   " + procesos[p].codigo[i] + "<br></font>");
            }
            else
            {
                document.write("   Terminado" + "<br>");
            }
        }
        document.write("<br>");
    }
}