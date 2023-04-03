import React from 'react'
import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    // Hook de React que se ejecuta cuando el componente es renderizado por primera vez en pantalla (componentDidMount) y cuando se actualiza (componentDidUpdate) 
    // El segundo parámetro es un arreglo de dependencias, si está vacío se ejecuta solo una vez, si tiene un valor, se ejecuta cada vez que ese valor cambie (componentDidUpdate) 
    // Si no se pasa el segundo parámetro, se ejecuta cada vez que se renderiza el componente (componentDidUpdate y componentDidMount)


    // getGifts(category);

    return (
        <>
            <h3> {category}</h3>
             {
                isLoading && <h2 >Loading...</h2>
             }
            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid