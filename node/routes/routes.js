import express from 'express';
import { createBlog, getAllBlogs, getBlog, updateBlog, deleteBlog } from '../controllers/BlogController.js';

const router = express.Router();

//metodo para mostrar todos los blogs
router.get('/', getAllBlogs);
//metodo para mostrar un blog por id
router.get('/:id', getBlog);
//metodo para crear un blog
router.post('/', createBlog);
//metodo para actualizar un blog
router.put('/:id', updateBlog);
//metodo para eliminar un blog
router.delete('/:id', deleteBlog);

export default router;