import { useState,useEffect } from "react"
import { getGifs } from "../helpers/getGifs"


export const useFectchGifs = (category) => {

    const [state,setState] = useState({
        data:[],
        loading:true
    })//Hay un estado con las imagenes y el loading que traduce como que se está haciendo la busqueda sirve como bandera para hacer el renderizado
    
    useEffect(()=>{
     
        getGifs(category).then(imgs =>{//El get Gif es un helper que basicamente es una funcion que trae las imagenes de un json
            setState({
                data: imgs,
                loading: false
            });//Como traemos las imagenes ya que se agregó una categoria se espera traer, le cambiamos el estado a la data y por lo tanto al loading para que nos muestre las imagenes
        })

        
    },[category])//Usamos el useefect para que se renderice solo cuando se modifica la categoria por eso se encierra en llaves cuadradas

   
    return state;
}
