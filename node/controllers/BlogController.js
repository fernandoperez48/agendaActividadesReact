//importamos el modelo
import BlogModel from '../models/BlogModel.js';


   //Metodo para mostrar todos los blogs
    export const getAllBlogs= async(req, res) => {
      try {
        const blogs= await BlogModel.findAll();
        res.json(blogs);
      } catch (error) {
        res.json({message: error.message});
      }
   
};

//Metodo para mostrar un blog por id
export const getBlog= async(req, res) => {
    try {
        const blog= await BlogModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(blog[0]);
        
    } catch (error) {
        res.json({message: error.message});
    }
};

//Metodo para crear un blog
export const createBlog= async(req, res) => {
    try {
        await BlogModel.create(req.body);
        res.json({message: 'Blog creado correctamente'});
    } catch (error) {
        res.json({message: error.message});
    }
};

//Metodo para actualizar un blog
export const updateBlog= async(req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({message: 'Blog actualizado correctamente'});
    } catch (error) {
        res.json({message: error.message});
    }
};

//Metodo para eliminar un blog
export const deleteBlog= async(req, res) => {
    try {
        await BlogModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({message: 'Blog eliminado correctamente'});
    } catch (error) {
        res.json({message: error.message});
    }
};