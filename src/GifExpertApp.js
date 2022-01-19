import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punche', 'Samurai X', 'Dragon']

    const [categories, setCategories] = useState(['Metallica']);

   /*  const handleAdd = () =>{
        //categories.push('david');X
        //setCategories(['David', ...categories]);
        setCategories(cats => [...cats, 'Andres']);

        <li key={category}> { category}  </li>
    } */


    return (
        <>
        <h2>GifExpertApp!</h2>
        <AddCategory setCategories={setCategories} />
        <hr /> 
        <ol>
            {
                categories.map( category => ( 
                   <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
            }
        </ol>

        </>
    )
}

export default GifExpertApp
