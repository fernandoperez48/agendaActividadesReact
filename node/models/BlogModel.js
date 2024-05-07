// importamos la conexion a la base de datos
import db from '../database/db.js';

// importamos sequilize
import {DataTypes} from 'sequelize';


// definimos el modelo
const BlogModel= db.define('blog', {
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    }
});

// exportamos el modelo
export default BlogModel;
