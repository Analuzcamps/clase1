import React from 'react'


const Item = (id, name , image) => {
  return (
    <card key={id}>
    <h1>{name}</h1>
    <img src={image} alt={name}/>
    </card>
  )
}

export default Item