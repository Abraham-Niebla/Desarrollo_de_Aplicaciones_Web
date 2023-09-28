const donadores =
[
    {
        rfc: 1,
        nombre: "Abraham Niebla",
        proyectosAsociados: ["Proyectote"],
        imagen: "https://random.imagecdn.app/100/100",
        cantidadDonada: 620000.00,
    },
];

const findAll = function ()
{
    return donadores;
}

const findByRFC = function (rfc)
{
    let p = donadores.find((e) => e.rfc == rfc);
    return p;
}

const add = async function (newDonador)
{
    // Genera un RFC único para el nuevo donador
    const uniqueRFC = Math.max(...donadores.map((donador) => donador.rfc)) + 1;

    // Agrega el nuevo donador al modelo
    const donador = {
        rfc: uniqueRFC,
        ...newDonador,
    };
    donadores.push(donador);

    return donador;
};

exports.findAll = findAll;
exports.findByRFC = findByRFC;
exports.add = add;
