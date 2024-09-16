const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validarJWT');
const { postEquipo, getEquipo, putEquipo } = require('../controllers/equipo');

router.get('/:id_puesto',validarJWT, getEquipo);
router.post('/',validarJWT, postEquipo);
router.put('/:id_puesto', validarJWT, putEquipo);

module.exports = router;