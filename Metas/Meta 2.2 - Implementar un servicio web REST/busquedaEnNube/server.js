const cors = require("cors");
const express = require("express");
const donadoresRouter = require("./rutas/donadores");
const donatariosRouter = require("./rutas/donatarios");
const proyectosRouter = require("./rutas/proyectos");
const app = express();
const port = 4590;

app.use(cors());
app.use(express.json());

app.use("/proyectos", proyectosRouter);
app.use("/donatarios", donatariosRouter);
app.use("/donadores", donadoresRouter);



app.listen(port, () =>
{
    console.log("Server en puerto ", port);
});