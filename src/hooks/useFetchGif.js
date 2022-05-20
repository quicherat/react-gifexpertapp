
import { useState, useEffect } from "react";
import {getGifs} from '../helpers/getGifs';

export const useFetchGif = ( category) => {

    /*
    Un custom hook no es mas que una función que usa hooks.
    En este caso useState recibe la data e indica que la carga está en proceso o terminada. useEffect hace la petición cada vez que cambia category y actualiza el state con las imágenes recibidas y la bandera de terminada la carga
    */

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    /*
    Usamos el hook useEffect para ejecutar tareas despues de
    que se ha ejecutado el "render" 
    Para evitar que con cada cambio se vuelva a utilizar el 
    Fetch colocamos las dependencias [] en el array y el hook
    compara si han existido cambios y; de ser asi, se ejecuta nuevamente.
    */

    useEffect( () => {
        getGifs( category )
            .then( imgs => {
                
                setState({
                    data: imgs,
                    loading: false
                });
                                
            });
    
    }, [ category ]);
    
    
    return state;
}