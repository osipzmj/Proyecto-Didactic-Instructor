const {Router}= require('express');
const router=Router();
const temaController= require('../controllers/agregar-tema-controller.js');


//Consultar todos los Temas
router.get('/agregar-tema',temaController.getTemas);
//Consultar un Tema        
router.get('/agregar-tema/:cveTema',temaController.getTema);
//Crear un Tema
router.post('/agregar-tema',temaController.createTemas);
//Actualizar un Tema
router.put('/agregar-tema/:cveTema',temaController.editTemas);
//Eliminar un Tema 
router.delete('/agregar-tema/:cveTema',temaController.deleteTemas);



module.exports= router;