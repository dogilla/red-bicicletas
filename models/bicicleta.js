var Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function(){
    return "id: " + this.id + "| color: " + this.color;
}


Bicicleta.allBicis = [];

Bicicleta.add = function(bici){
    Bicicleta.allBicis.push(bici);
}



var a = new Bicicleta(1, 'roja', 'urbana', [-34.5012424, -58,38614971]);
var b = new Bicicleta(2, 'azul', 'moderna', [-34.5012424, -58,38614971]);

Bicicleta.findById = function(idBici){
    let found = Bicicleta.allBicis.find(x => {
        if (x.id == idBici)
            return true;
        return false;
    });
    console.log(found);
    if(found)
        return found;
    else
        throw new Error(`No existe una bici con el id ${idBici}`);
}

Bicicleta.removeById = function(idBici){
    Bicicleta.findById(idBici);
    for(var i = 0; i < Bicicleta.allBicis.length; i++){
        if(Bicicleta.allBicis[i].id == idBici){
            Bicicleta.allBicis.splice(i,1);
            break;
        }
    }
}

Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;