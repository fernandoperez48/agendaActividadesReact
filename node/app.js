//importamos express
import express from 'express';
//importamos la libreria cors
import cors from 'cors';
//importamos la conexion a la base de datos
import db from './database/db.js';
//importamos las rutas
import blogRoutes from './routes/routes.js';

//instanciamos express
const app= express();


//configuramos cors
app.use(cors());
//configuramos express para recibir json
app.use(express.json());
//configuramos las rutas
app.use('/blogs', blogRoutes);

//sincronizamos la base de datos
try {
    await db.authenticate();
    console.log('Conexion a la base de datos establecida');
    
} catch (error) {
    console.log(`Error al conectar a la base de datos: ${error}`);
}

//probamos si funcionan los metodos de http
//app.get('/', (req, res) => {
//    res.send('Hola mundo');
//});

app.listen(8000, () => {
    console.log('Server UP running in http://localhost:8000');
});