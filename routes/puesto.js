const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validarJWT');
const { getPuestos, postPuesto } = require('../controllers/puesto');


router.get('/:id_departamento', validarJWT, getPuestos);
router.post('/', validarJWT, postPuesto);

module.exports = router;