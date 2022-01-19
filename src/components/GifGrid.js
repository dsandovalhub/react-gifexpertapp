import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridIterm from './GifGridIterm';

const GifGrid = ({category}) => {
    /* CUSTOM HOOK */
   const {data:imgs, loading} = useFetchGifs(category);   
    
    /* const [images, setImages] = useState([]);

    useEffect( () =>{
        getGifs(category)
        .then(imgs => setImages(imgs));

    }, [category]) */ //[] arreglo de dependencias

    /* get a API */
    

    //getGifs();

    return (
        <>
            <h3 className='animate__animated animate__fadeInDown'>{category}</h3>
            {/* {loading ? 'Cargando...' : 'Data cargada'} */}
            {loading && <p className='animate__animated animate__flash'>Loading...</p>}
            {<div className='card-grid'>
                
                    {
                        imgs.map( img => (
                            <GifGridIterm
                                key ={img.id}
                                {...img} 
                                />
                        ))
                    }
                
            </div>}
        </>
    )
}

export default GifGrid
