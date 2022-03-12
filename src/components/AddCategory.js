import React, { useState } from "react";
import PropTypes  from 'prop-types';
const AddCategory = ({setCategories}) =>{
    const [inputValue, setInputValue] = useState("");//Estado de la busqueda que vamos a hacer

    const handleChange = ({target}) =>{//Funcion para hacer el cambio, se puede hacer directamente en el onChange pero asi se ve mas organizado
        setInputValue(target.value);
    }

    const handleSubmit = (e) =>{/*Aca entra cuando hacemos el enter */
        e.preventDefault();/*para evitar que se recargue la pagina con el enter, recordar que cuando solo se envia un valor la funcion se llama poniendo solo el nombre IMPORTANTE*/
        
        inputValue.trim().length >2&&//Validad que la palabra sea grande o que no se envie basio
            setCategories(c=>[inputValue,...c]);//Se está agregando adelante
            setInputValue('');//se restablece el valor inicial, por lo que renderiza de nuevo el componente y borra el contenido ya escrito

    }
    return(<form onSubmit={handleSubmit}>{/*Se envia el parametro automaticamente es decir como solo hay un valor se envia el valor que ingresamos en el input */}
    
        <input 
        type = "text"
        value = {inputValue}
        onChange={handleChange}
        >
        </input>
    </form>);
};
AddCategory.propTypes = {//Exige que se envie el setcategories
    setCategories : PropTypes.func.isRequired
}
export default AddCategory;