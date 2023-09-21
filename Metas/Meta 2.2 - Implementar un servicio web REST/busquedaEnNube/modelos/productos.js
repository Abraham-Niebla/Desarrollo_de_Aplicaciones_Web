const productos =
[
    {
        id: 1,//id
        //nombre: "Abraham Niebla",
        descripcion: "Gansito",

    },
    {
        id: 2,
        //nombre: "Axel Vega",
        descripcion: "Zanahorias"
    },
    {
        id: 3,
        //nombre: "Erika Lian",
        descripcion: "Leche"
    },
];

const findAll = function()
{
    return productos;
}

const findByid = function(id)
{
    let p = productos.find(e => e.id == id);
    return p;
}

exports.findAll = findAll;
exports.findByid = findByid;