const productos =
[
    {
        sku: 1,//sku
        //nombre: "Abraham Niebla",
        descripcion: "Gansito",

    },
    {
        sku: 2,
        //nombre: "Axel Vega",
        descripcion: "Zanahorias"
    },
    {
        sku: 3,
        //nombre: "Erika Lian",
        descripcion: "Leche"
    },
];

const findAll = function()
{
    return productos;
}

const findBySKU = function(sku)
{
    let p = productos.find(e => e.sku == sku);
    return p;
}

exports.findAll = findAll;
exports.findBySKU = findBySKU;