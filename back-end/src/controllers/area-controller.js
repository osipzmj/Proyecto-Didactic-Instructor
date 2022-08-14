const areaController={};

const Area = require('../models/Area');

 //Consultando Temas
areaController.getAreas=(req,res) => {
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM area_conocimiento',(err,rows) => {
            if(err){
                res.json(err);
            }
            res.json(rows);
        });
    });
}

module.exports= areaController;