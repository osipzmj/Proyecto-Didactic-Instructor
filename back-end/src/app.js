const express=require('express');
const morgan=require('morgan');
const mysql=require('mysql');
const myConnection=require('express-myconnection');

const app= express();
const cors= require('cors');

app.set('port',9000);

//middleware
app.use(cors());
app.use(morgan('dev'));

//coneccion a la base de datos
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'1234',
    port:3306,
    database:'didactic2',
},'single'));

app.use(express.json());
app.use(express.urlencoded({extend:false}));

app.use(require('./routers/agregar-tema-router'));
app.use(require('./routers/agregar-actividad-router'));
app.use(require('./routers/area-router'));

module.exports= app;