
const productos= [

    {
       id: 1,
       name: 'Canon Xf705 Professional Camcorder', 
       image: "../", 
       descripcion: 'descripcion producto ' ,
       category:'camara' ,
},

{
   id: 1,
   name: 'Sony Hvr-Z7U Hdv Professional Video Camcorder ',
   image: "",
   descripcion: 'descripcion producto ' ,
   category:'camara' ,
},
{
    id: 1,
    name: 'Canon Xa10 Professional Camcorder 64Gb Internal Flash Memory y Full Manual Control',
    image:"" ,
    descripcion: 'descripcion producto ' ,
    category:'camara' ,
    },

    {
        id: 1,
        name: '4K Camcorder Vlogging Camara', 
        image:"", 
        descripcion: 'descripcion producto ' ,
        category:'camara' ,
 },

 {
    id: 1,
    name: 'Panasonic Ag-Dvx200 4K De Mano Camcorder', 
    image: "", 
    descripcion: 'descripcion producto ' , 
    category:'camara' ,
},

{
    id: 2,
    name: 'Estabilizador DJI Osmo Mobile 3 Videos Y Fotos Función Panorámica + Bolso', 
    image: "", 
    descripcion: 'descripcion producto ' ,
    category:'accesorio' ,
},

{
    id: 2,
    name: 'Atem Mini Extreme - Blackmagic - Proservice', 
    image:"" ,  
    descripcion: 'descripcion producto ' ,
    category:'accesorio' ,
},

{
    id: 3,
    name: 'Iluminador Fresnel Led 200w. Para Video, Cine Dimerizable', 
    image:"" , 
    descripcion: 'descripcion producto ' ,
    category:'luz' ,
},

{
    id: 3,
    name: 'Fovitec Kit de iluminación fluorescente de estudio de alta potencia d ', 
    image: "", 
    descripcion: 'descripcion producto ' ,
    category:'luz' ,
},

{
    id: 3,
    name: 'Bresser Foco LED SH-360 SlimLine Bi-Color 3 Unidades', 
    image:"" , 
    descripcion: 'descripcion producto ' ,
    category:'luz' ,
},

{
    id: 4,
    name: 'Micrófono de cañón para cámara Rode VideoMic NTG', 
    image: "", 
    descripcion: 'descripcion producto ' ,
    category:'micro' ,
},

{
    id: 4,
    name: 'Micrófonos Boya BY-WM8 Pro K2 condensador omnidireccional negros', 
    image: "", 
    descripcion: 'descripcion producto ' ,
    category:'micro' ,
},

{
    id: 4,
    name: 'Saramonic Vws Zeppelin Parabrisas Y Sistema De Suspensión', 
    image:"" , 
    descripcion: 'descripcion producto ' ,
    category:'micro' ,
},

]

const producto = { 
    id: 1,
    name: 'Canon Xf705 Professional Camcorder', 
    image: "https://www.google.com/aclk?sa=l&ai=DChcSEwjzvtu9k6n4AhUYQkgAHT5XDvMYABABGgJjZQ&sig=AOD64_2SqsKLQ1UQg4zycN7yMueVtskRig&adurl&ctype=5&ved=2ahUKEwjG0dC9k6n4AhWiDNQKHfL1C1UQvhd6BAgBEEo", 
    descripcion: 'descripcion producto CON DETALLE',
    precio:'17000',
    category:'camara' ,

}

export const traerProducto = ()=> {
    return new Promise ((resolve)=>
    {
        setTimeout(()=>{
            resolve (producto);
        }, 1000);
    });
};




export default productos;
