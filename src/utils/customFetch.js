//promises- simulacion de de busqueda


const customFetch=(time, task)=>{
    return new Promise((resolve) => {
    setTimeout(()=>{
        resolve(task);

    },)
        
    })

}
export default customFetch; 