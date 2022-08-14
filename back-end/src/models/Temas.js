const{Schema,model} =require('mongoose');

const temasSchema = new Schema({
    cveTema: {type: Number,required:true},
    cveArea: {type: Number,required:true},
    nombre: {type: String,required:true},
    descripcion: {type: String,required:true},
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Tema',temasSchema);


