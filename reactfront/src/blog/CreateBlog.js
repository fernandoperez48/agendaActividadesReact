import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//definimos la URI de la API

const URI = 'http://localhost:8000/blogs/';

const CreateBlog = () => {
    //configuramos los estados
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()


    //procedimiento para guardar un blog
    const store = async (e) =>{
       e.preventDefault()
       await axios.post(URI, {title: title, content: content})
         navigate('/')
    }
    return(
         <div>
            <h3>Crear Blog</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Titulo</label>
                    <input 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)} 
                    type='text'
                    className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='content' className='form-label'>Contenido</label>
                    <textarea 
                    className='form-control' 
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}>
                    </textarea>
                </div>
                <button type='submit' className='btn btn-primary'>Guardar</button>
            </form>
         </div>       
    )
}

export default CreateBlog;