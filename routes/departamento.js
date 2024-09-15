const express = require('express');
const router = express.Router();
const {getDepartamentos, getDepartamentosPorArea, postDepartamento } = require('../controllers/departamento');
const { validarJWT } = require('../middlewares/validarJWT');

// Define la ruta para obtener departamentos por agencia
router.get('/:id_agencia',validarJWT, getDepartamentos);
router.get('/:id_agencia/:id_area', validarJWT, getDepartamentosPorArea);
router.post('/', validarJWT, postDepartamento);

module.exports = router;
