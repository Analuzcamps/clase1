import React from 'react'


const Item = ({id, name , image}) => {
  return (
    <div key={id}>
    <h1>{name}</h1>
    <img src={image} alt={name}/>
    </div>
  )
}

export default Item