const { Router } = require('express');
const {agenciaGet, agenciaPost} = require('../controllers/agencia');
const {validarJWT} = require('../middlewares/validarJWT');
const router = Router();

router.get('/',validarJWT, agenciaGet);
router.post('/', validarJWT, agenciaPost);

module.exports = router;