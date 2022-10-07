const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const dotenv = require('dotenv');

//app.get('/', (req,res) => {
   // res.send("Hello world");
//});

//app.get('/empleados', (req,res) => {
 //   res.send('Empleados');
//});

const connectDB = require('./Config/db');

//Cargar config
dotenv.config({ path: './Config/config.env'});

connectDB();

//Rutas
app.use('/', require('./rutas/index'));


app.listen(3000); 