const { Router} = require("express");
const router = Router();
const apiRoute = '/api';
const notasController = require('../controllers/notas_controller')

router.get(apiRoute+'/notas',notasController.notasObtenidas)



module.exports = router;