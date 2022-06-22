import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({id, name , image, }) => {
  return (
    <div key={id}>
    <h1>{name}</h1>
    <img src={image} alt={name}/>

    <Link to= {`/detail/${id}`}> Ver detalle </Link>
    </div>
  )
}

export default Item