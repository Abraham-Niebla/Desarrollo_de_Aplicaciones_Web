const proyectos = require("../modelos/proyectos");

const getAll = async function(req, res)
{
    let p = proyectos.findAll();
    await res.json(p);
}

const findByID = async function(req, res)
{
    await res.json(proyectos.findByID(req.params.sku));
}

const add = async function(req, res)
{
    try
    {
        const newProyecto = await proyectos.add(req.body);
        res.status(201).json(newProyecto);
    }
    catch (error)
    {
        res.status(500).json({ error: "No se pudo agregar el proyecto." });
    }
}


exports.getAll = getAll;
exports.findByID = findByID;
exports.add = add;