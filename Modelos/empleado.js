const mongoose = require('mongoose');



//Empleado

const empleado = mongoose.model('empleado', {
    Nombre: {
        type:String,
        required:true
    },
    ApellidoP: {
        type:String,
        required:true
    },
    ApellidoM: {
        type:String,
        required:true
    },
    Telefono : {
        type:String,
        required:true
    }
});
 
module.exports = { empleado  }