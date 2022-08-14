const {Router}= require('express');
const router=Router();
const actividadController= require('../controllers/agregar-actividad-controller');


//Consultar todos las Actividades
router.get('/agregar-actividad',actividadController.getActividades);
//Consultar una Actividad       
router.get('/agregar-actividad/:cveActividad',actividadController.getActividad);
//Crear una Actividad
router.post('/agregar-actividad',actividadController.createActividades);
//Actualizar una Actividad
router.put('/agregar-actividad/:cveActividad',actividadController.editActividades);
//Eliminar una Actividad 
router.delete('/agregar-actividad/:cveActividad',actividadController.deleteActividades);



module.exports= router;