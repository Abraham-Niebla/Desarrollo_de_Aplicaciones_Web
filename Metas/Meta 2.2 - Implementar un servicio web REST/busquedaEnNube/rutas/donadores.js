const express = require("express");
const router = express.Router();
const donadoresController = require("../controladores/donadoresController");

router.get("/", donadoresController.getAll);
router.get("/:sku", donadoresController.findByRFC);
router.post("/", donadoresController.add); // Cambio de nombre de la función

module.exports = router;
