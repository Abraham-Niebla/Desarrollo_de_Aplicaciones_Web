const donatarios = require("../modelos/donatarios");

const getAll = async function(req, res)
{
    let p = donatarios.findAll();
    await res.json(p);
}

const findByRFC = async function(req, res)
{
    await res.json(donatarios.findByRFC(req.params.sku));
}

const add = async function(req, res)
{
    try
    {
        const newDonatario = await donatarios.add(req.body);
        res.status(201).json(newDonatario);
    }
    catch (error)
    {
        res.status(500).json({ error: "No se pudo agregar el donatario." });
    }
}

exports.getAll = getAll;
exports.findByRFC = findByRFC;
exports.add = add;
