const proyectos = [
    {
        id: 1,
        nombre: "Proyectito",
        descripcion: "Pastel del tamaño de un edificio",
        imagen: "https://random.imagecdn.app/100/100",
        donatario: "Abraham Niebla",
        donadores: ["Axel Vega", "Erika Lian"],
        cantidadDonada: 123456.17,
    },
    {
        id: 2,
        nombre: "Proyectote",
        descripcion: "Fresas del tamaño de una sandía",
        imagen: "https://random.imagecdn.app/100/100",
        donatario: "Ericka Lian",
        donadores: ["Axel Vega", "Abraham Niebla"],
        cantidadDonada: 987654.46,
    },
];

const findAll = function()
{
    return proyectos;
}

const findByID = function(id)
{
    let p = proyectos.find(e => e.id == id);
    return p;
}

const add = async function(newProyecto)
{
    // Genera un ID único para el nuevo proyecto
    const uniqueID = Math.max(...proyectos.map(proyecto => proyecto.id), 0) + 1;

    // Agrega el nuevo proyecto al modelo
    const newProyectoWithID = {
        id: uniqueID,
        ...newProyecto,
    };
    proyectos.push(newProyectoWithID);

    return newProyectoWithID;
};

exports.findAll = findAll;
exports.findByID = findByID;
exports.add = add;