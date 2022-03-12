import React from "react";
import {GifGridItem} from "./GifGridItem";

import { useFectchGifs } from "../hooks/useFectchGifs";
export const GifGrid = ({category}) =>{



    const {data:images,loading} = useFectchGifs(category);//Se crea un hook personalizado para renderizar solo cuando se agrega una categoria es decir una busqueda de imagenes acá se espera recibir las imagenes
    

    return(
        <>
        <h3 >{category}</h3>

        {loading&&<p >Loading</p>}
    <div className="card-grid ">
       
    
            {images.map((img)=>( //Se cargan las imagenes directamente
                <GifGridItem 
                key = {img.id}
                {...img}//Envio directamente las propiedades de las imagenes como una propiedad independiente
                />
            ))}

    </div>
    </>
    );
}