const { Router } = require('express');
const {usuariosPost, usuariosGet, usuariosDelete, usuariosPut} = require('../controllers/usuario');
const router = Router();


router.get('/', usuariosGet);
router.post('/', usuariosPost);
router.put('/:id', usuariosPut);
router.delete('/:id', usuariosDelete);

module.exports = router;