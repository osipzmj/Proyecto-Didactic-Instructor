const{Schema,model} =require('mongoose');

const areasSchema = new Schema({
    cveArea: {type: Number,required:true},
    descripcion: {type: String,required:true},
    activo: {type: String,required:true},
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Area',areasSchema);