const express = requiere('express');
const router= express.Router();
const tema = require('../models/Temas');
const actividad= require('../models/Actividades');
const area= require('../models/Area');

//Listar todos los temas
router.get('/agregar-tema',(req,res) => {
    Tema.find({},(err,temas) => {
    return res.json(temas);
});
});

//Dar de alta un tema
router.post('/agregar-tema',(req,res) => {
    Tema.create(req.body,(err, tema) => {
    if(err){
        res.json(err);
    }else{ 
        return res.json(tema)
    }
});
});


//Listar todas las actividades
router.get('/agregar-actividad',(req,res) => {
    Actividad.find({},(err,actividades) => {
    return res.json(actividades);
});
});

//Dar de alta una actividad
router.post('/agregar-actividad',(req,res) => {
    Actividad.create(req.body,(err, actividad) => {
    if(err){
        res.json(err);
    }else{ 
        return res.json(actividad)
    }
});
});

//Listar todas las areas
router.get('/areas',(req,res) => {
    Actividad.find({},(err,areas) => {
    return res.json(areas);
});
});

module.exports= router;
