const express = require("express");
const router = express.Router();
const donatariosController = require("../controladores/donatariosController");

router.get("/", donatariosController.getAll);
router.get("/:sku", donatariosController.findByRFC);
router.post("/", donatariosController.add);

module.exports = router;
