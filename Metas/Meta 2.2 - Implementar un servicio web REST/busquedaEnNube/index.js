const cors = require("cors");
const express = require("express");
const productosController = require("./controladores/productosController");
const app = express();
const port = 4590;

app.use(cors());
app.use(express.json());
app.get("/productos", productosController.getAll);
app.get("/productos/:sku", productosController.getBySKU);

app.listen(port, () =>
{
    console.log("Server en puerto ", port);
});