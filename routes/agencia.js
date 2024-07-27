const { Router } = require('express');
const { agenciaPost, agenciaGet } = require('../controllers/agencia');
const router = Router();

router.get('/', agenciaGet);
router.post('/',agenciaPost);

module.exports = router;