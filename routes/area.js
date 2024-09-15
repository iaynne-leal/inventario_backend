const { Router } = require('express');
const { getAreasByAgencia } = require("../controllers/area");
const { validarJWT } = require("../middlewares/validarJWT");
const router = Router();

router.get('/:id_agencia', validarJWT, getAreasByAgencia);

module.exports = router;