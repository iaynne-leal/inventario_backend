const express = require('express');
const router = express.Router();
const { getPuestos } = require('../controllers/puesto');
const { validarJWT } = require('../middlewares/validarJWT');
const { postEquipo, getEquipo } = require('../controllers/equipo');

router.get('/:id_puesto',validarJWT, getEquipo);
router.post('/',validarJWT, postEquipo);

module.exports = router;