import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
const GifExpertApp = () =>{

    const [categories,setCategories] = useState(['One Punch Man']);



    return(
        <>
            <h2 >GifExpertApp</h2> {/*Titulo*/}
            <hr></hr>

            <AddCategory setCategories = {setCategories}/>
            {/* componente para agregar categoria  se envia el setcategories como parametro, este trae el formulario*/}
            <ol>
                {
                    categories.map(category=>{//Se recorren las categorias y se envian al componente GifGrid el cual maneja como se carga cada imagen
                       return <GifGrid
                        key = {category}
                        category = {category}
                       />
                    })
                }
            </ol>
        </>
    );
}
export default GifExpertApp;