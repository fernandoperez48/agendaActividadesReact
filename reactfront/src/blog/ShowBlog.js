import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//definimos la URI de la API

const URI = 'http://localhost:8000/blogs/';


const CompShowBlog = () => {
    //configuramos los estados
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        getBlogs()
    },[])

    //funcion para obtener los blogs
    const getBlogs = async () =>{
        const res = await axios.get(URI)
        setBlogs(res.data)
    }

    //procedimiento para eliminar un blog
    const deleteBlog = async (id) =>{
        await axios.delete(`${URI}${id}`)
        getBlogs()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link className='btn btn-primary mt-2 mb-2' to='/create'><i className="fa-solid fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Titulo</th>
                                <th>Contenido</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                blogs.map(blog =>(
                                    <tr key={blog.id}>
                                        <td>{blog.title}</td>
                                        <td>{blog.content}</td>
                                        <td>
                                            <Link className='btn btn-primary' to={`/edit/${blog.id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
                                            <button className='btn btn-danger' onClick={()=>deleteBlog(blog.id)}><i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowBlog;