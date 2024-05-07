import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

//definimos la URI de la API
const URI = 'http://localhost:8000/blogs/';

const CompEditBlog = () => {
    //configuramos los estados
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(()=>{
        getBlog()
    },[])

    //funcion para obtener un blog
    const getBlog = async () =>{
        const res = await axios.get(`${URI}${id}`)
        setTitle(res.data.title)
        setContent(res.data.content)
    }

    //procedimiento para actualizar un blog
    const update = async (e) =>{
        e.preventDefault()
        await axios.put(`${URI}${id}`, {title: title, content: content})
        navigate('/')
    }

    return(
        <div>
            <h3>Editar Blog</h3>
            <form onSubmit={update}>
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
                <button type='submit' className='btn btn-primary'>Actualizar</button>
            </form>
        </div>
    )
}
export default CompEditBlog;