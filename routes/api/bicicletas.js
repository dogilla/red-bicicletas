var express = require('express');
var router = express.Router();
var bicicletaController = require('../../controller/api/bicicletaControllerAPI');

router.get('/', bicicletaController.bicicleta_lista);

module.exports = router;
