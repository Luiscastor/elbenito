const API = "http://localhost:3000/Productos"
export const getProducts = async () =>{
    const res = await fetch(API)
    return await res.json()
  }