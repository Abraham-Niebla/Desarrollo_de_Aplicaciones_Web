const donatarios = [
    {
        rfc: 1,
        nombre: "Abraham Niebla",
        proyectoAsociado: "Proyectito",
        imagen: "https://random.imagecdn.app/100/100",
    },
    {
        rfc: 2,
        nombre: "Erika Lian",
        proyectoAsociado: "Proyectote",
        imagen: "https://random.imagecdn.app/100/100",
    },
];

const findAll = function()
{
    return donatarios;
}

const findByRFC = function(rfc)
{
    let p = donatarios.find(e => e.rfc == rfc);
    return p;
}

const add = async function(newDonatario)
{
    // Genera un RFC único para el nuevo donatario
    const uniqueRFC = Math.max(...donatarios.map(donatario => donatario.rfc), 0) + 1;

    // Agrega el nuevo donatario al modelo
    const newDonatarioWithRFC = {
        rfc: uniqueRFC,
        ...newDonatario, // Esta línea expande las propiedades del nuevo donatario
    };
    donatarios.push(newDonatarioWithRFC);

    return newDonatarioWithRFC;
};

exports.findAll = findAll;
exports.findByRFC = findByRFC;
exports.add = add;
