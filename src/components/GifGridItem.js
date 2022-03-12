import React from 'react'

export const GifGridItem = ({id,title,url}) => {
  return (
    <div className='card '>
        <img src ={url} alt ={title}/>{/*Se cargan las imagenes*/}
        <p>{title}</p> 
    </div>
  )
}
