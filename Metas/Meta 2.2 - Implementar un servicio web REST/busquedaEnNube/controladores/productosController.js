const productos = require("../modelos/productos");

const getAll = async function(req, res)
{
    let p = productos.findAll();
    await res.json(p);
}

const getBySKU = async function(req, res)
{
    await res.json(productos.findBySKU(req.params.sku));
}

exports.getAll = getAll;
exports.getBySKU = getBySKU;