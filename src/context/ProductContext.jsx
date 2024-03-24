"use client"
import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios";



export const productContext = createContext();
const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState()
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/product/`)
            .then((res) => {
                
                setProducts(res.data.product)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return <productContext.Provider value={{products}}>{children}</productContext.Provider>
}
const useProductContext = () => {
    return useContext(productContext)
}
export { useProductContext, ProductProvider }