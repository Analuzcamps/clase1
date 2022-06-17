
const productos= [

    {
       id: 1,
       name: 'producto 1', 
       image: "https://www.google.com/aclk?sa=l&ai=DChcSEwjzvtu9k6n4AhUYQkgAHT5XDvMYABABGgJjZQ&sig=AOD64_2SqsKLQ1UQg4zycN7yMueVtskRig&adurl&ctype=5&ved=2ahUKEwjG0dC9k6n4AhWiDNQKHfL1C1UQvhd6BAgBEEo", 
       descripcion: 'descripcion producto 1'
},

{
   id: 2,
   name: 'producto 2',
   image: "https://www.google.com/aclk?sa=l&ai=DChcSEwjzvtu9k6n4AhUYQkgAHT5XDvMYABADGgJjZQ&sig=AOD64_3lg_nOH_fc9v4JlNtkw0W-3ctEyg&adurl&ctype=5&ved=2ahUKEwjG0dC9k6n4AhWiDNQKHfL1C1UQvhd6BAgBEFE",
   descripcion: 'descripcion producto 2'
},
{
    id: 3,
    name: 'producto 3',
    image: "https://www.google.com/aclk?sa=l&ai=DChcSEwjzvtu9k6n4AhUYQkgAHT5XDvMYABAFGgJjZQ&sig=AOD64_1JAQq0ECNPp8egvD7FSFyEY7H7yA&adurl&ctype=5&ved=2ahUKEwjG0dC9k6n4AhWiDNQKHfL1C1UQvhd6BAgBEFg",
    descripcion: 'descripcion producto 3'
    },
     
]

const producto = { 
    id: 1,
    name: 'producto 1', 
    image: "https://www.google.com/aclk?sa=l&ai=DChcSEwjzvtu9k6n4AhUYQkgAHT5XDvMYABABGgJjZQ&sig=AOD64_2SqsKLQ1UQg4zycN7yMueVtskRig&adurl&ctype=5&ved=2ahUKEwjG0dC9k6n4AhWiDNQKHfL1C1UQvhd6BAgBEEo", 
    descripcion: 'descripcion producto 1',
    precio:'17000',
}

export const traerProducto = ()=> {
    return new Promise ((resolve, reject)=>
    {
        setTimeout(()=>{
            resolve (producto);
        }, 1000);
    });
};




export default productos;
