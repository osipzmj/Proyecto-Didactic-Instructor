const{Schema,model} =require('mongoose');

const actividadesSchema = new Schema({
    cveTema: {type: Number,required:true},
    nombre: {type: String,required:true},
    contenido: {type: String},
    tipo: {type: String,required:true},
    valor: {type: Number,required:true},
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Actividad',actividadesSchema);
