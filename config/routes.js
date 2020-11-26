const express = require("express");
const router = express.Router();
const medicoController = require("../controllers/MedicoController.js");

router.post("/medico/cadastrar", medicoController.store);
router.get("/medico/buscar/:crm", medicoController.getOne);
router.get("/medico/listar", medicoController.get);
router.put("/medico/alterar", medicoController.update);
router.delete("/medico/remover/:crm", medicoController.delete);

module.exports = router;
