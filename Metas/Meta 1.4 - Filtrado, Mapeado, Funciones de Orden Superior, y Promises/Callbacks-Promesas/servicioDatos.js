//INICIAL
/*
const finDeTransmisionDeDatos = function (id)
{
    console.log( 'Transferencia ' , id, 'terminada ' );
};

let obtenDatosDeInternet = function (id, duracion)
{
    console.log('Proceso' , id, 'obteniendo datos de Internet');
    setTimeout(finDeTransmisionDeDatos, duracion, id);
}
module.exports.getDatos = obtenDatosDeInternet;
*/

//MODIFICADO (Callbacks)
/*
const finDeTransmisionDeDatos = function(id, callback)
{
	console.log('Transferencia', id,  'terminada');
	callback();
}

let obtenDatosDeInternet = function(id, duracion, callback)
{
	console.log('proceso', id, 'obteniendo datos de Internet');
	setTimeout(finDeTransmisionDeDatos, duracion, id, callback);
}
module.exports.getDatos = obtenDatosDeInternet;
*/

//MODIFICADO (Promises .than)
/*
const obtenDatosDeInternet = function resolvePromise(id, duracion)
{
	const promesa = new Promise(function (resolve, reject)
	{
		setTimeout(function ()
		{
			console.log('proceso', id, 'obteniendo datos de Internet');
			resolve(id);
		}, duracion, id);
	});

	promesa.then(function(r)
	{
		console.log('Transferencia', r,  'terminada');
	})
	.catch(function(){})
	.then(function(){});
}

module.exports.getDatos = obtenDatosDeInternet;*/

//MODIFICADO (Promises async/await)
const promesa = function(id, duracion)
{
    return new Promise(function(resolve, reject)
    {
        setTimeout(function()
		{
			console.log('proceso', id, 'obteniendo datos de Internet');
			resolve(id);
		}, duracion, id);
    })
};

async function procesa(id, duracion)
{
    try //Resultado aceptado
    {
        const r = await promesa(id, duracion);
        console.log('Transferencia', r,  'terminada');
    }
    catch(error){}
}

const obtenDatosDeInternet = function resolvePromise(id, duracion)
{
	procesa(id, duracion);
}

module.exports.getDatos = obtenDatosDeInternet;