const cors = require("cors");
const express = require("express");
const productosController = require("./controladores/productosController");
const app = express();

app.use(cors());
app.use(express.json());
app.get("/productos", productosController.getAll);
app.get("/productos/:sku", productosController.getBySKU);

app.listen(3000, () =>
{
    console.log("Server en puerto 3000");
});