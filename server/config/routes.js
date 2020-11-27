const express = require("express");
const router = express.Router();
const medicoController = require("../controllers/MedicoController.js");

router.post("/", medicoController.store);
router.get("/", medicoController.get);

module.exports = router;
