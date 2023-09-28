const donadores = require("../modelos/donadores");

const getAll = async function (req, res)
{
    let p = donadores.findAll();
    await res.json(p);
}

const findByRFC = async function (req, res)
{
    await res.json(donadores.findByRFC(req.params.sku));
}

const add = async function (req, res)
{
    try
    {
        const newDonador = await donadores.add(req.body);
        res.status(201).json(newDonador);
    }
    catch (error)
    {
        res.status(500).json({ error: "No se pudo agregar el donador." });
    }
}

exports.getAll = getAll;
exports.findByRFC = findByRFC;
exports.add = add;
