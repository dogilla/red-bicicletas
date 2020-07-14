var Bicicleta = require('../../models/bicicleta');


exports.bicicleta_lista = function(req, res){
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    });
}