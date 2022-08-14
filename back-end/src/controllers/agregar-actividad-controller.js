const actividadController={};

 //Consultando Actividades
actividadController.getActividades=(req,res) => {
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM actividades',(err,rows) => {
            if(err){
                res.json(err);
            }
            res.json(rows);
        });
    });
}

//Consultando Actividad

actividadController.getActividad= (req,res)=>{
    const { cveActividad } = req.params;
    req.getConnection((err,conn) => {
        conn.query('SELECT cveTema FROM actividades WHERE cveActividad = ?',
                            [cveActividad],(err,rows) => {
            res.send(rows);
        });
    });
}

//Creando Actividad
actividadController.createActividades=(req,res) => {
    const data= req.body;
    console.log(data);
    req.getConnection((err,conn) => {
        conn.query('INSERT INTO actividades SET ?',
                        [data],(err,actividad) => {
            res.redirect('/agregar-actividad');
        });
    });
    
}


actividadController.editActividades= (req,res)=>{
    const { cveActividad } = req.params;
    const  data  = req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE actividades SET ? WHERE cveActividad = ?',
                                [data, cveActividad],(err,rows) => {
            res.redirect('/agregar-actividad');
        });
    });
}


actividadController.deleteActividades= (req,res)=>{
    const { cveActividad } = req.params;
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM actividades WHERE cveActividad = ?',
                            [ cveActividad ],(err,rows) => {
            res.send(rows);
        });
    });
}

module.exports= actividadController;
