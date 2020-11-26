import React from 'react'
// import {useState, useEffect} from 'react';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    //*Antes de usar Customhooks
    // const [images, setImages] = useState([]);
    //Con este codigo hacemos que el getGifs se ejecute solo cuando se rendereiza por primera vez.
    // useEffect( () => {
    //     getGifs( category )
    //         .then( imgs => setImages(imgs));
    // }, [ category ]); //Si la categoria cambia, vuelve a ejecutar el efecto interno.

    //* Usando Customhooks
    //Se renombra data a images
    const {data:images, loading } = useFetchGifs( category );

    return (
    <>
        <h3 className="animate__animated animate__fadeIn">{ category }</h3>

        {/* Forma corta de un if */}
        { loading && <p className="animate__animated animate__flash">Cargando...</p>}

        <div className="card-grid">
            {
                images.map((img) => {
                    return <GifGridItem
                        key = {img.id}
                        {...img}
                    />
                })
            }
        </div>
    </>
    )
}