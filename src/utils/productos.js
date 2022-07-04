


const productos= [

    {
       id: 1,
       name: 'Canon Xf705 Professional Camcorder', 
       image: "" , 
       descripcion: 'descripcion producto ' ,
       category:'camara' ,
       price:'80000',
},

{
   id: 2,
   name: 'Sony Hvr-Z7U Hdv Professional Video Camcorder ',
   image: "",
   descripcion: 'descripcion producto ' ,
   category:'camara' ,
   price:'90000',
},
{
    id: 3,
    name: 'Canon Xa10 Professional Camcorder 64Gb Internal Flash Memory y Full Manual Control',
    image: "" ,
    descripcion: 'descripcion producto ' ,
    category:'camara' ,
    price:'70000',
    },

    {
        id: 4,
        name: '4K Camcorder Vlogging Camara', 
        image:"", 
        descripcion: 'descripcion producto ' ,
        category:'camara' ,
        price:'60000',
 },

 {
    id: 5,
    name: 'Panasonic Ag-Dvx200 4K De Mano Camcorder', 
    image: "", 
    descripcion: 'descripcion producto ' , 
    category:'camara' ,
    price:'110000',
},

{
    id: 6,
    name: 'Estabilizador DJI Osmo Mobile 3 Videos Y Fotos Función Panorámica + Bolso', 
    image: "", 
    descripcion: 'descripcion producto ' ,
    category:'accesorio' ,
    price:'50000',
},

{
    id: 7,
    name: 'Atem Mini Extreme - Blackmagic - Proservice', 
    image:"",  
    descripcion: 'descripcion producto ' ,
    category:'accesorio' ,
    price:'60000',
},

{
    id: 8,
    name: 'Iluminador Fresnel Led 200w. Para Video, Cine Dimerizable', 
    image:"", 
    descripcion: 'descripcion producto ' ,
    category:'luz' ,
    price:'90000',
},

{
    id: 9,
    name: 'Fovitec Kit de iluminación fluorescente de estudio de alta potencia d ', 
    image: "", 
    descripcion: 'descripcion producto ' ,
    category:'luz' ,
    price:'80000',
},

{
    id: 10,
    name: 'Bresser Foco LED SH-360 SlimLine Bi-Color 3 Unidades', 
    image: "", 
    descripcion: 'descripcion producto ' ,
    category:'luz' ,
    price:'25000',
},

{
    id: 11,
    name: 'Micrófono de cañón para cámara Rode VideoMic NTG', 
    image: "", 
    descripcion: 'descripcion producto ' ,
    category:'micro' ,
    price:'15000',
},

{
    id: 12,
    name: 'Micrófonos Boya BY-WM8 Pro K2 condensador omnidireccional negros', 
    image: "", 
    descripcion: 'descripcion producto ' ,
    category:'micro' ,
    price:'11000',
}, 

{
    id: 13,
    name: 'Saramonic Vws Zeppelin Parabrisas Y Sistema De Suspensión', 
    image:"" , 
    descripcion: 'descripcion producto ' ,
    category:'micro' ,
    price:'70000',
},

]

const producto = { 
    id: 1,
    name: 'Canon Xf705 Professional Camcorder', 
    image: "",
    descripcion: 'descripcion producto CON DETALLE',
    precio:'17000',
    category:'camara' ,
    price:'80000',


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
