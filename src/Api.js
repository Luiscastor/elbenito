const API = "http://147.182.177.124/Productos"
export const getProducts = async () =>{
    const res = await fetch(API)
    return await res.json()
  }