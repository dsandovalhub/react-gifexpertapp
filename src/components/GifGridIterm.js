import React from 'react'

const GifGridIterm = ({title, url}) => {
   // console.log('gitem',id, title, url);

    return (
        <div className='card animate__animated animate__fadeInDown'>
            {/* img.title */}
            <img src= {url} alt={title}/>
            <p>{title}</p>
            
        </div>
    )
}

export default GifGridIterm
