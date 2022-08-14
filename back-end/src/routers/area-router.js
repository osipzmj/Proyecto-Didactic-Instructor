const {Router}= require('express');
const router=Router();
const areaController= require('../controllers/area-controller');


//Consultar todas las areas
router.get('/area',areaController.getAreas);


module.exports= router;