export const getGifs = async(category) =>{//Se hace un asinc porque se hace de forma asincrona
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=UTfrX9Me5cvPdiFwhSEo7EjBg6ON8tkd`;
    const resp = await fetch(url);//Se recibe una promesa
    const {data} = await resp.json();//Se recibe una promesa
    const gifs = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            url : img.images?.downsized_medium.url
        }//Retorna un objeto con las imagenes con cada imagen vaya, es complicado aun no entiendo como esq ue envia todas las imagenes y al otro lado recibe el arreglo pero asi funciona el .map
    });
    return (gifs);
}