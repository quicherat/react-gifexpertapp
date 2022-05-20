import React from 'react'


//Se desestructura el objeto que viene como un props
const GifGridItem = ( {title, url} ) => {

    // console.log( {id, title, url} );

  return (
    <div className='card animate__animated animate__fadeIn'>
         <img src={url} alt={title} />
         <p> { title }</p>
    </div>
  )
}

export default GifGridItem
